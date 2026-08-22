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
      "Thanks for checking in. Under our Disaster Protocol, when Typhoon Signal No. 8 is in force you should work remotely rather than report to the office. Please stay safe and keep your manager updated if your working arrangement changes during the day.",
    source: "Disaster Protocol",
  },
  {
    id: 2,
    topic: "Annual leave basics",
    triggers: ["annual leave", "how many days", "vacation days", "leave days"],
    answer:
      "Under our company Leave Policy, full-time colleagues receive 15 days of annual leave each year. Please submit your leave request through the usual process so your manager can approve coverage before you take time off.",
    source: "Leave Policy",
  },
  {
    id: 3,
    topic: "Sick leave",
    triggers: ["sick leave", "medical certificate", "medical leave"],
    answer:
      "If you are unwell, please take sick leave and rest. Under our Leave Policy, a medical certificate is required when the policy asks for one. Notify your manager as soon as you can, and HR can help if you need support on documentation.",
    source: "Leave Policy",
  },
  {
    id: 4,
    topic: "Health insurance",
    triggers: ["health insurance", "medical plan", "medical coverage"],
    answer:
      "If you are enrolled, you are covered by the company health plan. The Benefits Guide sets out the medical options and claim steps. If you are unsure whether you are enrolled or what is covered, reply with your question and I can point you to the right section.",
    source: "Benefits Guide",
  },
  {
    id: 5,
    topic: "Remote work",
    triggers: ["remote work", "work from home policy", "wfh policy"],
    answer:
      "Remote work is allowed under our Remote Work Guidelines and still needs manager approval where the policy requires it. Please follow the published guidelines for eligibility, working hours, and communication expectations.",
    source: "Remote Work Guidelines",
  },
  {
    id: 6,
    topic: "Expense claim",
    triggers: ["expense", "reimbursement", "claim expense"],
    answer:
      "Please submit your expense claim through the standard reimbursement process and attach your receipts. Once Finance/HR has reviewed a complete claim, reimbursement follows the usual payment cycle.",
    source: "Benefits Guide",
  },
  {
    id: 7,
    topic: "Code of conduct",
    triggers: ["code of conduct", "workplace rules", "employee handbook"],
    answer:
      "All colleagues are expected to follow the code of conduct in the Employee Handbook. If you are unsure whether a situation is appropriate, please ask HR before acting — we would rather clarify early than leave you guessing.",
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
      "Happy to help. Cap. 57 is Hong Kong’s Employment Ordinance — the baseline legal protection for employees. In practice, continuous-contract colleagues are entitled to at least 1 rest day every 7 days, paid annual leave of 7–14 days after each 12 months of service, sickness allowance for absences of 4+ consecutive days (usually at 4/5 of average daily wages), 14 weeks’ maternity leave, 5 days’ paternity leave, statutory holidays, and wage payment within 7 days after the wage period ends. Our company policy may be more generous than these legal minimums.",
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
      "From an HR perspective, you are usually under a continuous contract if you have worked for the same employer for 4 consecutive weeks or more, and at least 18 hours in each of those weeks. Once that status applies, you gain Cap. 57 benefits such as rest days, paid annual leave, sickness allowance, and holiday pay after 3 months.",
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
      "If you are under a continuous contract, you are entitled to at least 1 rest day in every 7-day period. That rest day is a continuous 24-hour period when you should not be required to work. Your manager/employer should appoint rest days; if they are not fixed in advance, you should be told before each week starts.",
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
      "annual leave entitlement under",
      "how many days of annual leave",
    ],
    answer:
      "Here is the statutory annual leave position under Cap. 57 after each 12 months of continuous contract service: Year 1–2 = 7 days; Year 3 = 8; Year 4 = 9; Year 5 = 10; Year 6 = 11; Year 7 = 12; Year 8 = 13; Year 9 or above = 14 days. Leave dates are appointed by the employer after consulting you, with written notice at least 14 days in advance unless you agree to shorter notice. Leave pay is based on your average daily wage over the previous 12 months. Separately, our company policy gives full-time staff 15 days, which is more generous than the legal minimum.",
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
      "Under Cap. 57, if you are on a continuous contract you accumulate paid sickness days at 2 days per month in the first 12 months, then 4 days per month, up to 120 days in total. Sickness allowance is payable when you take at least 4 consecutive sickness days with a medical certificate. The usual daily rate is 4/5 of your average daily wages. Please also follow our internal sick-leave reporting steps so payroll can process it correctly.",
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
      "Congratulations — and thank you for asking early. An eligible female employee under a continuous contract is entitled to 14 continuous weeks of maternity leave. If the baby arrives later than expected, extra days equal to that delay are added, and up to 4 further weeks may be available for pregnancy-related illness or disability. Maternity leave pay is generally 4/5 of average daily wages, with pay for weeks 11–14 capped at HK$80,000. Paid maternity leave normally requires at least 40 weeks’ continuous employment immediately before leave starts, plus the required pregnancy notice to HR/your employer.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 107,
    topic: "Paternity leave",
    category: "cap57",
    triggers: ["paternity leave", "father leave", "paternity pay"],
    answer:
      "An eligible male employee under a continuous contract is entitled to 5 days of paternity leave for each confinement of his spouse/partner. You may take those 5 days together or separately, from 4 weeks before the expected delivery date to 14 weeks after the actual birth. Paternity leave pay is 4/5 of average daily wages and normally requires at least 40 weeks’ continuous employment immediately before the leave day, plus the required documents. Please notify HR/your employer at least 3 months before the expected delivery, or at least 5 days before the leave date if that earlier notice was not given.",
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
      "Under Cap. 57, employees are entitled to statutory holidays. The current list includes 1 January, Lunar New Year Days 1–3, Ching Ming, Labour Day, Buddha’s Birthday, Tuen Ng, HKSAR Establishment Day, the day after Mid-Autumn, National Day, Chung Yeung, Winter Solstice or Christmas (employer’s choice), and the first weekday after Christmas; Easter Monday is added from 2026. If you are asked to work on a statutory holiday, your employer must arrange an alternative holiday within 60 days before or after, with at least 48 hours’ prior notice. Holiday pay applies if you have at least 3 months under a continuous contract before that holiday. Cash cannot replace the holiday itself.",
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
      "Under Cap. 57, your wages must be paid as soon as practicable after the wage period ends, and no later than 7 days after that period. On termination, most termination payments (except severance payment) must also be paid within 7 days. Wage deductions are tightly limited by law, so please speak with HR if something unexpected appears on your payslip.",
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
      "Here is the Cap. 57 notice position in plain terms. During the first month of probation, no notice is required. After the first month of probation, notice is as agreed in the contract but not less than 7 days. After probation (or if there is no probation): if the contract sets a notice period, follow it but not less than 7 days; if it sets no notice period, notice must be at least 1 month. Either side may give payment in lieu of notice instead of working the notice. If you are planning a resignation, HR can help you calculate the correct notice date.",
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
      "Severance payment generally applies if you have at least 24 months under a continuous contract and leave because of redundancy, layoff, or non-renewal of a fixed-term contract due to redundancy. Long service payment generally applies after at least 5 years under a continuous contract in the qualifying situations. For a monthly-paid employee, the usual formula is 2/3 × last month’s wages × years of service. Last month’s wages used in the formula are capped at HK$22,500 (so each year is capped at HK$15,000), and the total is capped at HK$390,000. Severance should be paid within 2 months after the employer receives your written claim. If this relates to your own case, please contact HR so we can review your service record properly.",
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
