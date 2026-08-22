export const CAP57_URL = "https://www.elegislation.gov.hk/hk/cap57";

export const knowledge = [
  {
    id: 1,
    topic: "Typhoon / Signal 8",
    triggers: [
      "signal 8",
      "signal no. 8",
      "typhoon",
      "report to the office",
      "report to office",
      "wfh today",
      "work from home today",
    ],
    answer:
      "Office staff should work remotely when Signal No. 8 is active.",
    source: "Disaster Protocol",
  },
  {
    id: 2,
    topic: "Annual leave basics",
    triggers: ["annual leave", "how many days", "vacation days", "leave days"],
    answer: "Full-time staff receive 15 days of annual leave per year.",
    source: "Leave Policy",
  },
  {
    id: 3,
    topic: "Sick leave",
    triggers: ["sick leave", "medical certificate", "medical leave"],
    answer:
      "Staff may take sick leave with a medical certificate when required.",
    source: "Leave Policy",
  },
  {
    id: 4,
    topic: "Health insurance",
    triggers: ["health insurance", "medical plan", "medical coverage"],
    answer:
      "Enrolled staff are covered by the company health plan; details are in the benefits guide.",
    source: "Benefits Guide",
  },
  {
    id: 5,
    topic: "Remote work",
    triggers: ["remote work", "work from home policy", "wfh policy"],
    answer:
      "Remote work follows the published remote-work guidelines and manager approval rules.",
    source: "Remote Work Guidelines",
  },
  {
    id: 6,
    topic: "Expense claim",
    triggers: ["expense", "reimbursement", "claim expense"],
    answer:
      "Submit expense claims through the standard reimbursement process with receipts.",
    source: "Benefits Guide",
  },
  {
    id: 7,
    topic: "Code of conduct",
    triggers: ["code of conduct", "workplace rules", "employee handbook"],
    answer:
      "Staff must follow the code of conduct in the employee handbook.",
    source: "Employee Handbook",
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
      "The Employment Ordinance (Cap. 57) is Hong Kong’s main employment statute. It sets minimum rules on wages, rest days, holidays, leave, and termination for employees. This chat gives short summaries only — always check the official text for the exact wording.",
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
      "Under Cap. 57, an employee usually counts as being under a continuous contract if they have worked for the same employer for 4 or more consecutive weeks and at least 18 hours in each of those weeks. Continuous-contract employees get extra statutory benefits such as rest days, paid annual leave, and sickness allowance.",
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
      "Under Cap. 57, an employee employed under a continuous contract is entitled to at least 1 rest day in every period of 7 days. A rest day is a continuous period of not less than 24 hours during which the employee is entitled to abstain from working.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 104,
    topic: "Statutory annual leave",
    category: "cap57",
    triggers: [
      "statutory annual leave",
      "paid annual leave under",
      "cap 57 annual leave",
      "employment ordinance annual leave",
      "statutory leave",
      "how many annual leave under law",
      "legal annual leave",
    ],
    answer:
      "Under Cap. 57, after 12 months under a continuous contract, an employee is entitled to paid annual leave starting at 7 days, rising with length of service up to a maximum of 14 days (from the 9th year onward). Company policy can be more generous than this legal minimum.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 105,
    topic: "Sickness allowance",
    category: "cap57",
    triggers: [
      "sickness allowance",
      "paid sick leave",
      "statutory sick",
      "4 consecutive days",
      "sick leave pay",
      "cap 57 sick",
    ],
    answer:
      "Under Cap. 57, continuous-contract employees can accumulate paid sickness days (2 per month in the first 12 months, then 4 per month, up to 120 days). Sickness allowance is generally payable for sick leave of at least 4 consecutive days supported by a medical certificate, usually at 4/5 of average daily wages.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 106,
    topic: "Maternity leave",
    category: "cap57",
    triggers: [
      "maternity leave",
      "pregnancy leave",
      "14 weeks",
      "maternity pay",
    ],
    answer:
      "Under Cap. 57, an eligible female employee under a continuous contract is entitled to 14 weeks of maternity leave. Maternity leave pay is generally 4/5 of average daily wages, with a statutory cap applying to part of the leave period. Check Cap. 57 for eligibility details.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 107,
    topic: "Paternity leave",
    category: "cap57",
    triggers: ["paternity leave", "father leave", "paternity pay"],
    answer:
      "Under Cap. 57, an eligible male employee under a continuous contract may take paternity leave in connection with the birth of his child. Check Cap. 57 for the current number of days, notice rules, and pay conditions.",
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
      "Cap. 57 provides for statutory holidays. Employees covered by the Ordinance are entitled to statutory holidays, and continuous-contract employees may also be entitled to holiday pay subject to the Ordinance’s conditions. Company holiday calendars should not fall below the legal minimum.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 109,
    topic: "Wages and payday",
    category: "cap57",
    triggers: [
      "wage period",
      "when must wages be paid",
      "payday law",
      "payment of wages",
      "unpaid wages",
      "wage payment",
    ],
    answer:
      "Under Cap. 57, wages must generally be paid as soon as practicable after the end of the wage period, and in any case not later than 7 days after that period ends. Deductions from wages are tightly restricted by the Ordinance.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 110,
    topic: "Termination notice",
    category: "cap57",
    triggers: [
      "termination notice",
      "notice period",
      "resignation notice",
      "payment in lieu of notice",
      "dismiss",
      "termination of employment",
    ],
    answer:
      "Cap. 57 sets rules on termination by notice or payment in lieu of notice. The required notice depends on the contract and whether the employee is still in probation. Summary dismissal and constructive dismissal have separate legal tests — read Cap. 57 and seek advice for a real case.",
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
      "Under Cap. 57, eligible employees may be entitled to a severance payment (for example on redundancy) or a long service payment after longer service, subject to qualifying conditions. Amounts and offsets are set by the Ordinance — use the official Cap. 57 text for calculations.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
];

function wantsCap57(q) {
  return /(employment ordinance|cap\.?\s*57|chapter\s*57|statutory|hong kong law|hk law|labour law|labor law)/i.test(
    q
  );
}

export function findAnswer(raw) {
  const q = raw.toLowerCase().trim();
  const preferCap57 = wantsCap57(q);
  let best = null;
  let bestScore = 0;

  for (const item of knowledge) {
    let score = 0;
    for (const trigger of item.triggers) {
      if (q.includes(trigger)) score += trigger.length;
    }
    if (preferCap57 && item.category === "cap57" && score > 0) {
      score += 50;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  return best;
}
