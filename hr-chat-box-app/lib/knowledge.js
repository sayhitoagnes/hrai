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
      "Cap. 57 is Hong Kong’s main employment law. For continuous-contract employees it sets concrete minimums such as: at least 1 rest day every 7 days; paid annual leave of 7–14 days after each 12 months of service; sickness allowance for absences of 4+ consecutive days (usually 4/5 of average daily wages); 14 weeks’ maternity leave; 5 days’ paternity leave; statutory holidays; and wage payment within 7 days after the wage period ends.",
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
      "You are usually under a continuous contract if you worked for the same employer for 4 consecutive weeks or more, and at least 18 hours in each of those weeks. That status unlocks rest days, paid annual leave, sickness allowance, holiday pay (after 3 months), and other Cap. 57 benefits.",
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
      "If you are under a continuous contract, you must get at least 1 rest day in every 7-day period. A rest day is a continuous 24-hour period when you are entitled not to work. Your employer should appoint rest days; if they are not fixed in advance, they should be notified before the start of each week.",
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
      "After every 12 months under a continuous contract, paid annual leave is: Year 1–2 = 7 days; Year 3 = 8; Year 4 = 9; Year 5 = 10; Year 6 = 11; Year 7 = 12; Year 8 = 13; Year 9+ = 14 days. Leave timing is set by the employer after consulting you, with written notice at least 14 days in advance unless you agree to shorter notice. Pay is your average daily wage over the previous 12 months (or shorter period if employed for less than 12 months). If your contract ends after 3 months but before 12 months in a leave year (except summary dismissal), you get pro-rata annual leave pay.",
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
      "Under a continuous contract you accumulate paid sickness days at 2 days per month for the first 12 months, then 4 days per month, up to a maximum of 120 days. Sickness allowance is payable when you take at least 4 consecutive sickness days supported by a medical certificate. The daily rate is usually 4/5 of your average daily wages.",
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
      "An eligible female employee under a continuous contract gets 14 continuous weeks of maternity leave. If the baby arrives later than the expected date, extra days equal to that delay are added. Up to 4 more weeks may be granted for illness or disability due to pregnancy or confinement. Maternity leave pay is generally 4/5 of average daily wages; pay for the 11th to 14th weeks is capped at HK$80,000. To get paid maternity leave, you normally need at least 40 weeks’ continuous employment immediately before the leave starts, plus the required pregnancy notice.",
    source: "Employment Ordinance Cap. 57",
    sourceUrl: CAP57_URL,
  },
  {
    id: 107,
    topic: "Paternity leave",
    category: "cap57",
    triggers: ["paternity leave", "father leave", "paternity pay"],
    answer:
      "An eligible male employee under a continuous contract gets 5 days of paternity leave for each confinement of his spouse/partner. You may take the 5 days together or separately, from 4 weeks before the expected delivery date to 14 weeks after the actual birth. To get paternity leave pay (4/5 of average daily wages), you normally need at least 40 weeks’ continuous employment immediately before the leave day, plus the required documents. Give notice at least 3 months before the expected delivery (or at least 5 days before the leave date if that advance notice was not given).",
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
      "Every employee covered by Cap. 57 is entitled to statutory holidays (not just continuous-contract staff). Current holidays include: 1 January, Lunar New Year Days 1–3, Ching Ming, Labour Day, Buddha’s Birthday, Tuen Ng, HKSAR Establishment Day, the day after Mid-Autumn, National Day, Chung Yeung, Winter Solstice or Christmas (employer’s choice), and the first weekday after Christmas; Easter Monday is added from 2026. If you must work on a statutory holiday, your employer must give an alternative holiday within 60 days before or after (with at least 48 hours’ prior notice). Holiday pay applies if you have been under a continuous contract for at least 3 months before that holiday. Employers cannot buy out a statutory holiday with cash instead of giving the day off.",
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
      "Wages must be paid as soon as practicable after the end of the wage period, and in any case not later than 7 days after that period ends. On termination, most termination payments (except severance payment) must also be paid within 7 days. Wage deductions are tightly limited (for example for damage/loss, absence, or other legally allowed items) and cannot simply be made at will.",
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
      "Either side may end the contract by giving notice or payment in lieu of notice. During the first month of probation, no notice is required. After the first month of probation, notice is as agreed in the contract but not less than 7 days. After probation (or if there is no probation): if the contract sets a notice period, follow it but not less than 7 days; if the contract sets no notice period, notice must be at least 1 month. Payment in lieu equals the wages you would have earned during that notice period (using average wages).",
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
      "Severance payment: available if you have at least 24 months under a continuous contract and are dismissed by redundancy, laid off, or your fixed-term contract is not renewed due to redundancy. Long service payment: available after at least 5 years under a continuous contract in the qualifying termination situations. For a monthly-paid employee, the usual rate is 2/3 × last month’s wages × years of service. Last month’s wages used in the formula are capped at HK$22,500, so the yearly unit is capped at HK$15,000, and the total payment is capped at HK$390,000. Severance must be paid within 2 months after the employer receives your written claim.",
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
