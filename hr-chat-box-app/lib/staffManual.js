export const STAFF_MANUAL_PDF = "/benefits/hr-staff-manual.pdf";

/** Concise staff-manual Q&A. No organisation/company name in answers. */
const topics = [
  {
    id: 301,
    topic: "Staff manual overview",
    triggers: [
      "staff manual",
      "hr manual",
      "employee manual",
      "hr policy",
      "company policy",
      "staff handbook",
      "employee handbook",
    ],
    answer:
      "Ask about probation, notice, working hours, annual leave, sick leave, marriage/maternity/paternity/bereavement leave, menstruation leave, compensation leave, payday, medical eligibility, meal allowance, or typhoon/rainstorm arrangements.",
  },
  {
    id: 302,
    topic: "Probation period",
    triggers: [
      "probation",
      "probation period",
      "probationary",
      "how long is probation",
    ],
    answer:
      "Assistant Manager or above: 6 months. Senior Officer I or below: 3 months.",
  },
  {
    id: 303,
    topic: "Termination notice",
    triggers: [
      "notice period",
      "resignation notice",
      "termination notice",
      "how much notice",
      "quit notice",
    ],
    answer:
      "After probation — Manager or above: 3 months; Assistant Manager: 2 months; Senior Officer I or below: 1 month. During probation, shorter notice applies by grade/month (see Staff Manual §8.1).",
  },
  {
    id: 304,
    topic: "Working hours",
    triggers: [
      "working hours",
      "office hours",
      "work hours",
      "lunch time",
      "flexible working",
      "what time do we start",
    ],
    answer:
      "42.5 hours/week including 1-hour lunch. Mon–Fri options: 8:30–17:00, 9:00–17:30, or 9:30–18:00 (lunch 12:00–14:00).",
  },
  {
    id: 305,
    topic: "Payday",
    triggers: [
      "payday",
      "salary date",
      "when is salary paid",
      "pay day",
      "salary payment",
    ],
    answer:
      "Office staff: on/about the 25th each month (earlier if 25th is weekend/public holiday). Direct Dialogue team: last workday of the month.",
  },
  {
    id: 306,
    topic: "Annual leave",
    triggers: [
      "annual leave",
      "how many annual leave",
      "vacation days",
      "leave entitlement",
      "leave days",
      "holiday year",
    ],
    answer:
      "Holiday year 1 Jul–30 Jun. Entitlement: 1–3 yrs = 14 days; 4 = 15; 5 = 16; 6 = 17; 7+ = 18. Available after probation. Max carry-forward 14 days at 31 Dec / 30 Jun.",
  },
  {
    id: 307,
    topic: "Official half-day holidays",
    triggers: [
      "official holiday",
      "half day holiday",
      "half working day",
      "organisation holiday",
    ],
    answer:
      "4 half working days’ paid official holidays per year (schedule announced at start of each calendar year).",
  },
  {
    id: 308,
    topic: "Sick leave",
    triggers: [
      "sick leave",
      "sickness day",
      "paid sick",
      "medical certificate leave",
    ],
    answer:
      "Accumulate 2 paid sickness days/month in year 1, then 4/month; max 120 days. Notify supervisor/HR by 08:00; submit form + medical certificate next business day.",
  },
  {
    id: 309,
    topic: "Marriage leave",
    triggers: ["marriage leave", "wedding leave"],
    answer:
      "3 paid working days after probation, within 1 week before/after registration (marriage certificate required).",
  },
  {
    id: 310,
    topic: "Maternity leave",
    triggers: ["maternity leave", "pregnancy leave"],
    answer:
      "14 weeks paid maternity leave. Apply ≥2 months before start; medical certificate with expected confinement date required.",
  },
  {
    id: 311,
    topic: "Paternity leave",
    triggers: ["paternity leave", "father leave"],
    answer:
      "5 working days per child, within 4 weeks before expected delivery to 14 weeks after birth. Notify intention ≥3 months ahead; confirm dates ≥5 days before leave.",
  },
  {
    id: 312,
    topic: "Bereavement leave",
    triggers: [
      "bereavement leave",
      "compassionate leave",
      "funeral leave",
      "death leave",
    ],
    answer:
      "After probation: 3 working days per occasion for spouse, child, parent, parent-in-law, sibling, grandparent, or grandchild (within 3 months of death).",
  },
  {
    id: 313,
    topic: "Menstruation leave",
    triggers: [
      "menstruation leave",
      "menstrual leave",
      "period leave",
    ],
    answer:
      "Full-time female staff after 3 months’ service: 1 day/month (max 12/year). Deducted from sick-leave balance. No medical certificate required.",
  },
  {
    id: 314,
    topic: "Compensation leave",
    triggers: [
      "compensation leave",
      "time off in lieu",
      "toil",
      "overtime leave",
      "cl balance",
    ],
    answer:
      "For approved overtime on special duties/travel. Max 24 hours CL accumulated at month-end; excess lapses unless CEO extends. Not paid out in cash.",
  },
  {
    id: 315,
    topic: "No-pay leave",
    triggers: ["no-pay leave", "unpaid leave", "no pay leave"],
    answer:
      "Only in special cases after annual leave and CL are used, or during probation. CEO approval required.",
  },
  {
    id: 316,
    topic: "Jury leave",
    triggers: ["jury leave", "jury duty", "jury service"],
    answer:
      "Paid leave for Hong Kong jury service; not deducted from annual leave.",
  },
  {
    id: 317,
    topic: "Meal allowance",
    triggers: [
      "meal allowance",
      "overtime meal",
      "lunch allowance",
      "dinner allowance",
    ],
    answer:
      "For approved weekend/public-holiday overtime (≥4 hours) when meal not provided: lunch max $60; dinner max $80. Pre-approve with CEO.",
  },
  {
    id: 318,
    topic: "Medical insurance eligibility",
    triggers: [
      "medical insurance eligibility",
      "when can i join medical",
      "group medical",
      "enrol medical",
    ],
    answer:
      "Eligible after probation, or after 3 months’ service for Assistant Manager or above. Covers outpatient and hospitalisation.",
  },
  {
    id: 319,
    topic: "Typhoon work arrangement",
    triggers: [
      "typhoon",
      "signal 8",
      "signal no. 8",
      "pre-no 8",
      "typhoon signal",
      "report to the office",
      "report to office",
      "wfh today",
      "work from home today",
    ],
    answer:
      "Signal Pre-No. 8 / No. 8 or above before work: do not report for duty. If issued during work: staff released. If lowered before 13:30: resume within 2 hours.",
  },
  {
    id: 320,
    topic: "Rainstorm work arrangement",
    triggers: [
      "rainstorm",
      "black rainstorm",
      "amber rainstorm",
      "red rainstorm",
    ],
    answer:
      "Amber/Red before work: report as usual. Black Rainstorm before work: do not report. Follow supervisor/HR updates for during-work releases.",
  },
  {
    id: 321,
    topic: "Attendance",
    triggers: [
      "punctuality",
      "clock in",
      "late attendance",
      "attendance",
    ],
    answer:
      "Clock in/out each workday. Habitual lateness is misconduct and may lead to disciplinary action.",
  },
];

function detectManualTopic(q) {
  // Prefer more specific leave types before generic annual leave
  const order = [
    313, 312, 311, 310, 309, 308, 307, 306, 316, 315, 314, 317, 318, 319, 320,
    302, 303, 304, 305, 321, 301,
  ];
  let best = null;
  let bestScore = 0;
  for (const id of order) {
    const item = topics.find((t) => t.id === id);
    if (!item) continue;
    let score = 0;
    for (const trigger of item.triggers) {
      if (q.includes(trigger)) score += trigger.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return bestScore > 0 ? best : null;
}

export function buildStaffManualKnowledge() {
  return topics.map((t) => ({
    id: t.id,
    topic: t.topic,
    category: "manual",
    triggers: t.triggers,
    answer: t.answer,
    source: "HR Staff Manual",
    sourceUrl: STAFF_MANUAL_PDF,
  }));
}

export function refineStaffManualAnswer(question, item) {
  const q = question.toLowerCase().trim();
  const hit = detectManualTopic(q);
  if (!hit) return item;

  // Always concise: return only the short answer, no company name, no long citation dump
  return {
    ...(item && item.category === "manual" ? item : {}),
    id: hit.id,
    topic: hit.topic,
    category: "manual",
    answer: hit.answer,
    source: undefined,
    sourceUrl: undefined,
  };
}

export function wantsStaffManual(q) {
  return /(staff manual|hr manual|employee manual|handbook|probation|notice period|working hours|office hours|annual leave|sick leave|marriage leave|maternity leave|paternity leave|bereavement|menstruation leave|menstrual leave|compensation leave|time off in lieu|no-pay leave|jury|meal allowance|payday|salary date|typhoon|signal 8|rainstorm|clock in|punctuality|official holiday|half day holiday)/i.test(
    q
  );
}
