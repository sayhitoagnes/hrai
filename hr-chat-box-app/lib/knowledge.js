import {
  buildMedicalKnowledge,
  refineMedicalAnswer,
} from "./medicalPlans.js";
import {
  buildStaffManualKnowledge,
  refineStaffManualAnswer,
  wantsStaffManual,
  detectManualTopic,
} from "./staffManual.js";

export const CAP57_URL = "https://www.elegislation.gov.hk/hk/cap57";

const baseKnowledge = [
  {
    id: 4,
    topic: "Health insurance pointer",
    triggers: ["health insurance", "medical plan", "medical coverage"],
    answer:
      "Ask your grade (Plan 1 manager+ / Plan 2 below manager) and the benefit (e.g. GP, specialist).",
    source: "Medical Plan 1 & 2 Benefit Schedules",
  },
  {
    id: 5,
    topic: "Remote work",
    triggers: ["remote work", "work from home policy", "wfh policy"],
    answer:
      "Follow published remote-work guidelines and manager approval. Typhoon/rainstorm WFH follows Staff Manual weather rules.",
    source: "HR Staff Manual",
  },
  {
    id: 6,
    topic: "Expense claim",
    triggers: ["expense", "reimbursement", "claim expense"],
    answer: "Submit via the standard reimbursement process with receipts.",
    source: "Benefits Guide",
  },
  {
    id: 101,
    topic: "Employment Ordinance overview",
    category: "cap57",
    triggers: [
      "what is the employment ordinance",
      "what is cap 57",
      "what is cap. 57",
      "explain the employment ordinance",
      "employment ordinance of hk",
      "employment ordinance of hong kong",
      "hong kong employment law",
      "hk employment law",
    ],
    answer:
      "Cap. 57 is HK’s Employment Ordinance. Key minimums for continuous-contract staff include rest days, paid annual leave 7–14 days, sickness allowance, 14 weeks’ maternity leave, 5 days’ paternity leave, and wage payment within 7 days after the wage period.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 102,
    topic: "Continuous contract",
    category: "cap57",
    triggers: [
      "continuous contract",
      "18 hours",
      "4 weeks",
      "continuous employment",
    ],
    answer:
      "Usually: 4+ consecutive weeks with the same employer and ≥18 hours each week.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 103,
    topic: "Rest days",
    category: "cap57",
    triggers: [
      "rest day",
      "rest days",
      "one day off",
      "day off every week",
      "weekly rest",
    ],
    answer:
      "Continuous-contract staff: at least 1 rest day every 7 days (24 continuous hours).",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 104,
    topic: "Statutory annual leave",
    category: "cap57",
    triggers: [
      "statutory annual leave",
      "cap 57 annual leave",
      "employment ordinance annual leave",
      "statutory leave",
      "legal annual leave",
    ],
    answer:
      "After each 12 months under continuous contract: Year 1–2 = 7 days; then up to 14 days from Year 9+. Staff Manual company leave may be higher.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 105,
    topic: "Sickness allowance",
    category: "cap57",
    triggers: [
      "sickness allowance",
      "statutory sick",
      "4 consecutive days",
      "sick leave pay",
      "cap 57 sick",
    ],
    answer:
      "Accumulate 2 days/month in year 1, then 4/month (max 120). Paid for ≥4 consecutive sickness days with medical certificate, usually at 4/5 average daily wages.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 108,
    topic: "Statutory holidays",
    category: "cap57",
    triggers: [
      "statutory holiday",
      "statutory holidays",
      "public holiday pay",
      "holiday entitlement under law",
    ],
    answer:
      "Statutory holidays are set by Cap. 57 / General Holidays rules. Holiday pay usually needs ≥3 months under a continuous contract before that holiday.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 111,
    topic: "Severance and long service",
    category: "cap57",
    triggers: [
      "severance payment",
      "long service payment",
      "redundancy",
      "lsp",
      "severance",
    ],
    answer:
      "Severance: usually ≥24 months continuous + redundancy/layoff. LSP: usually ≥5 years in qualifying cases. Formula often 2/3 × monthly wages × years (wage capped at $22,500; total capped at $390,000).",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
];

export const knowledge = [
  ...baseKnowledge,
  ...buildMedicalKnowledge(),
  ...buildStaffManualKnowledge(),
];

function wantsCap57(q) {
  return /(employment ordinance|cap\.?\s*57|chapter\s*57|statutory|hong kong law|hk law|labour law|labor law)/i.test(
    q
  );
}

function wantsMedical(q) {
  return /(medical|health insurance|outpatient|hospital|dental|specialist|\bgp\b|blue cross|plan\s*[12]|physio|chinese medicine|vaccination|checkup|claim for gp|gp claim)/i.test(
    q
  );
}

export function findAnswer(raw) {
  const q = raw.toLowerCase().trim();
  const preferCap57 = wantsCap57(q);
  const preferMedical = wantsMedical(q);
  const preferManual = wantsStaffManual(q);
  let best = null;
  let bestScore = 0;

  for (const item of knowledge) {
    let score = 0;
    for (const trigger of item.triggers) {
      if (q.includes(trigger)) score += trigger.length;
    }
    if (preferCap57 && item.category === "cap57" && score > 0) score += 50;
    if (preferMedical && item.category === "medical" && score > 0) score += 60;
    if (preferManual && item.category === "manual" && score > 0) score += 70;
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  const medical = refineMedicalAnswer(raw, best);
  if (
    medical &&
    typeof medical.answer === "string" &&
    /^\$/.test(medical.answer)
  ) {
    return medical;
  }

  const manualTopic = detectManualTopic(q);
  if (manualTopic || preferManual) {
    const manual = refineStaffManualAnswer(raw, best);
    if (manual && manual.category === "manual") {
      // Prefer medical only when question is clearly plan/benefit pricing
      if (
        medical &&
        medical.category === "medical" &&
        preferMedical &&
        /(plan\s*[12]|gp claim|claim for gp|specialist limit|dental benefit)/i.test(
          q
        )
      ) {
        return medical;
      }
      return manual;
    }
  }

  if (medical && medical.category === "medical" && preferMedical) {
    return medical;
  }

  return medical || best;
}
