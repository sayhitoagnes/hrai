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
];

export function findAnswer(raw) {
  const q = raw.toLowerCase().trim();
  let best = null;
  let bestScore = 0;

  for (const item of knowledge) {
    let score = 0;
    for (const trigger of item.triggers) {
      if (q.includes(trigger)) score += trigger.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  return best;
}
