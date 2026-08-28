export const STAFF_MANUAL_PDF = "/benefits/hr-staff-manual.pdf";

/**
 * Deep Staff Manual Q&A (concise). No organisation/company name in answers.
 * Source: HR Staff Manual (internal).
 */
const topics = [
  // —— Manual / general ——
  {
    id: 301,
    topic: "Staff manual overview",
    triggers: [
      "staff manual",
      "hr manual",
      "employee manual",
      "staff handbook",
      "employee handbook",
      "what can i ask",
      "hr policy",
    ],
    answer:
      "Covered: appointment, grades, probation, transfer, promotion, notice/dismissal, retirement, hours, pay/MPF/medical/rental, leave types, PMS, training sponsorship, conduct/grievance/discipline, conflict of interest, typhoon/rainstorm.",
  },
  {
    id: 302,
    topic: "Manual purpose and confidentiality",
    triggers: [
      "purpose of the manual",
      "who does the manual apply",
      "can i share the manual",
      "manual confidential",
    ],
    answer:
      "Internal use only. Gives HR terms/benefits/policies. Gaps follow HK labour law. No photocopying/disclosure to unauthorised parties. Policies may be changed by the organisation.",
  },

  // —— Appointment / grades ——
  {
    id: 310,
    topic: "Equal opportunity",
    triggers: [
      "equal opportunity",
      "equal employment",
      "discrimination in hiring",
      "recruitment policy",
    ],
    answer:
      "Equal opportunity employer. Appointments based on experience, competencies and qualifications — not gender, age, race, religion, marital status, sexual orientation or family status.",
  },
  {
    id: 311,
    topic: "Reference and qualification check",
    triggers: [
      "reference check",
      "qualification check",
      "fraudulent information",
      "previous employer check",
    ],
    answer:
      "HR checks references/qualifications on final applicants (original certificates; usually last 2 employers). Fraudulent information may lead to denial of employment or dismissal.",
  },
  {
    id: 312,
    topic: "Staff card and access card",
    triggers: [
      "staff card",
      "access card",
      "lost staff card",
      "lost access card",
      "return staff card",
    ],
    answer:
      "Issued on start. Report loss to HR immediately for cancellation/re-issue. Not transferable. Return both on last working day.",
  },
  {
    id: 313,
    topic: "SCRC",
    triggers: [
      "scrc",
      "sexual conviction",
      "sexual conviction record check",
      "criminal conviction check",
    ],
    answer:
      "Offers are conditional on SCRC. Employees must renew when the checking code expires and inform HR of the valid code.",
  },
  {
    id: 314,
    topic: "Staff grades",
    triggers: [
      "staff grade",
      "job grade",
      "grading system",
      "what grades",
      "assistant manager grade",
      "officer grade",
      "senior officer",
    ],
    answer:
      "Grades: CEO; Director / Deputy / Assistant Director; Senior Manager / Manager / Assistant Manager; Senior Officer I / II / Officer / Assistant Officer; Coordinator.",
  },

  // —— Probation / transfer / promotion ——
  {
    id: 320,
    topic: "Probation period",
    triggers: [
      "probation",
      "probation period",
      "probationary",
      "how long is probation",
      "extend probation",
      "extended probation",
    ],
    answer:
      "Assistant Manager or above: 6 months. Senior Officer I or below: 3 months. May be extended if performance/attitude needs more observation (dept head + CEO). End-of-probation appraisal with supervisor/dept head; CEO endorses.",
  },
  {
    id: 321,
    topic: "Transfer",
    triggers: ["transfer", "reassign", "change department", "another role"],
    answer:
      "Organisation may transfer/reassign roles with reasonable prior notice and the employee’s consent, for operational/HR planning needs.",
  },
  {
    id: 322,
    topic: "Promotion",
    triggers: ["promotion", "promote", "how to get promoted"],
    answer:
      "Prefer promote-from-within. Based on potential for higher role, performance, service, vacancy and finances — not just tenure. Nominated by supervisor/dept head, approved by CEO, administered by HR.",
  },

  // —— Termination / retirement ——
  {
    id: 330,
    topic: "Termination notice after probation",
    triggers: [
      "notice period",
      "resignation notice",
      "termination notice",
      "how much notice",
      "quit notice",
      "resign notice",
    ],
    answer:
      "After probation (unless contract says otherwise): Manager or above — 3 months; Assistant Manager — 2 months; Senior Officer I or below — 1 month. Written notice or payment in lieu.",
  },
  {
    id: 331,
    topic: "Termination notice during probation",
    triggers: [
      "notice during probation",
      "probation notice",
      "first month notice",
    ],
    answer:
      "Unless contract says otherwise — Manager+: 1st month immediate; months 2–3: 7 calendar days; months 4–6: 1 month. Assistant Manager: 1 month (then 2 months after probation). Senior Officer I or below: N/A in 1st month column; then 1 month. Extended probation uses same probation notice rules.",
  },
  {
    id: 332,
    topic: "Leave during notice period",
    triggers: [
      "leave during notice",
      "annual leave after resignation",
      "leave in notice period",
    ],
    answer:
      "If approved annual leave falls in the notice period, Department Head may re-approve to protect handover. Tell HR immediately of any leave change.",
  },
  {
    id: 333,
    topic: "Summary dismissal",
    triggers: [
      "summary dismissal",
      "dismiss without notice",
      "instant dismissal",
      "fired without notice",
    ],
    answer:
      "May dismiss immediately without payment in lieu for: wilful disobedience; misconduct inconsistent with duties; fraud/dishonesty; habitual neglect; or other EO grounds allowing termination without notice.",
  },
  {
    id: 334,
    topic: "Exit interview",
    triggers: ["exit interview", "leaving interview"],
    answer:
      "Exit interviews for voluntary leavers (resignation or retirement).",
  },
  {
    id: 335,
    topic: "Retirement age",
    triggers: ["retirement", "retirement age", "retire"],
    answer:
      "Employment ends at age 65 unless a new/separate agreement is made with consent.",
  },

  // —— Working hours ——
  {
    id: 340,
    topic: "Working hours",
    triggers: [
      "working hours",
      "office hours",
      "work hours",
      "lunch time",
      "what time do we start",
      "finish work",
    ],
    answer:
      "Office: 42.5 hrs/week including 1-hour lunch. Mon–Fri options: 8:30–17:00, 9:00–17:30, or 9:30–18:00 (lunch window 12:00–14:00). Overtime generally unpaid unless contract says otherwise.",
  },
  {
    id: 341,
    topic: "Direct Dialogue / shift hours",
    triggers: [
      "direct dialogue",
      "shift employee",
      "roster",
      "duty roster",
      "40 hours",
    ],
    answer:
      "Direct Dialogue / shift staff: 40 hrs/week including 1-hour lunch; 2 rest days per roster. No lunch on half-day work. Roster changes should be advised in advance.",
  },
  {
    id: 342,
    topic: "Flexible working hours",
    triggers: [
      "flexible working",
      "flexi hours",
      "flexible working hours",
    ],
    answer:
      "Office staff may apply for flexible hours for training/duties/events outside normal hours, with prior approval of supervisor and dept head or CEO.",
  },
  {
    id: 343,
    topic: "Attendance and punctuality",
    triggers: [
      "punctuality",
      "clock in",
      "clock out",
      "late attendance",
      "attendance",
      "habitual late",
    ],
    answer:
      "Clock in/out each workday. Inform supervisor ASAP if unable to attend. Habitual lateness = misconduct → disciplinary action.",
  },

  // —— Pay / benefits ——
  {
    id: 350,
    topic: "Payday",
    triggers: [
      "payday",
      "salary date",
      "when is salary paid",
      "pay day",
      "salary payment",
      "25th",
    ],
    answer:
      "Office staff: on/about the 25th (earlier if weekend/PH). Direct Dialogue: last workday of the month. First 3 months’ pay for new joiners: cheque on last working day. Final pay: cheque within 7 days after termination.",
  },
  {
    id: 351,
    topic: "Discretionary recognition payment",
    triggers: [
      "discretionary recognition",
      "recognition payment",
      "bonus",
      "year end bonus",
      "december payment",
    ],
    answer:
      "Discretionary; needs ≥3 months’ service in prior FY (pro-rata). Paid on/about 31 Dec. Not payable if employment ended on/before 31 Dec, or after summary dismissal / resigning to avoid dismissal.",
  },
  {
    id: 352,
    topic: "MPF",
    triggers: [
      "mpf",
      "mandatory provident fund",
      "provident fund",
      "pension contribution",
    ],
    answer:
      "Staff join a registered MPF scheme. Employee and employer each contribute per MPF Ordinance rates. Voluntary extra employee contributions allowed within legal limits.",
  },
  {
    id: 353,
    topic: "Salary review",
    triggers: [
      "salary review",
      "pay rise",
      "salary adjustment",
      "july salary",
    ],
    answer:
      "Usually reviewed around July (or more often at org discretion), based on finances, performance and cost of living. Need completed probation by effective date for pro-rata. Resign before announcement → not eligible.",
  },
  {
    id: 354,
    topic: "Pay confidentiality",
    triggers: [
      "salary confidential",
      "remuneration confidential",
      "discuss salary",
    ],
    answer: "Remuneration information is strictly confidential.",
  },
  {
    id: 355,
    topic: "Medical insurance eligibility",
    triggers: [
      "medical insurance eligibility",
      "when can i join medical",
      "group medical",
      "enrol medical",
      "medical scheme",
    ],
    answer:
      "Eligible after probation, or after 3 months’ service for Assistant Manager or above. Covers outpatient + hospitalisation. Plan details on HR server / medical Plan 1–2 schedules.",
  },
  {
    id: 356,
    topic: "Rental reimbursement eligibility",
    triggers: [
      "rental reimbursement",
      "rent reimbursement",
      "rental scheme",
      "housing benefit",
      "staff quarters",
    ],
    answer:
      "Permanent full-time only (not part-time/contract). Up to 40% of monthly notional salary for primary residence rent. New joiners after probation. Apply with stamped lease; claims usually by 20 March of the tax year.",
  },
  {
    id: 357,
    topic: "Rental what is covered",
    triggers: [
      "rental rates",
      "management fees rental",
      "car parking rental",
      "what rental covers",
    ],
    answer:
      "Rent for primary residence; rates & management fees included. Agent commission, utilities, car park generally excluded unless inclusive in lease. Lease in employee or joint with spouse.",
  },
  {
    id: 358,
    topic: "Breastfeeding / lactation",
    triggers: [
      "breastfeeding",
      "lactation",
      "express milk",
      "nursing break",
    ],
    answer:
      "About two 45-minute lactation breaks/day in a private designated room. Email dept head + HR ≥2 weeks ahead.",
  },
  {
    id: 359,
    topic: "Meal allowance",
    triggers: [
      "meal allowance",
      "overtime meal",
      "lunch allowance",
      "dinner allowance",
    ],
    answer:
      "Weekend/PH authorised OT ≥4 hours, meal not provided, within lunch 12:00–14:00 or dinner 19:00–21:00: lunch max $60; dinner max $80 (not both). Pre-approve with CEO; claim with receipts.",
  },

  // —— Leave ——
  {
    id: 370,
    topic: "Public holidays",
    triggers: [
      "public holiday",
      "public holidays",
      "general holiday",
      "ph leave",
    ],
    answer:
      "Per General Holidays Ordinance. No payment in lieu of unused PHs. If terminated before 3 months’ service, statutory/public holidays are unpaid (prepaid amounts deducted from final pay).",
  },
  {
    id: 371,
    topic: "Annual leave",
    triggers: [
      "annual leave",
      "how many annual leave",
      "vacation days",
      "leave entitlement",
      "leave days",
      "holiday year",
      "carry forward leave",
    ],
    answer:
      "Holiday year 1 Jul–30 Jun. 1–3 yrs: 14 days; 4: 15; 5: 16; 6: 17; 7+: 18. Accrues from day 1; take after probation. Carry-forward max 14 days at 31 Dec / 30 Jun; excess lapses.",
  },
  {
    id: 372,
    topic: "Official half-day holidays",
    triggers: [
      "official holiday",
      "half day holiday",
      "half working day",
      "organisation holiday",
    ],
    answer:
      "4 half working days’ paid official holidays/year (management sets dates; announced each calendar year).",
  },
  {
    id: 373,
    topic: "Sick leave",
    triggers: [
      "sick leave",
      "sickness day",
      "paid sick",
      "medical certificate leave",
      "call in sick",
    ],
    answer:
      "Accumulate 2 paid sickness days/month in year 1, then 4/month; max 120. Notify supervisor/dept head/CEO and cc HR by 08:00. Submit form + medical/attendance certificate next business day.",
  },
  {
    id: 374,
    topic: "No-pay leave",
    triggers: ["no-pay leave", "unpaid leave", "no pay leave"],
    answer:
      "Only special cases after annual leave + CL used, or during probation. CEO approval. If >5 consecutive working days, Sat/Sun/PH counted; deducted from payroll.",
  },
  {
    id: 375,
    topic: "Marriage leave",
    triggers: ["marriage leave", "wedding leave"],
    answer:
      "3 paid working days after probation (incl. LGBTQ). Within 1 week before/after registration. Must be employed on marriage day. Marriage certificate required.",
  },
  {
    id: 376,
    topic: "Maternity leave",
    triggers: ["maternity leave", "pregnancy leave"],
    answer:
      "14 weeks paid (per EO). Medical certificate with expected date. Seek approval ≥2 months before start. Default start: 4 weeks before expected confinement if not otherwise agreed (window 2–4 weeks before). Late delivery adds extra days. Submit obstetrician certificate on return.",
  },
  {
    id: 377,
    topic: "Paternity leave",
    triggers: ["paternity leave", "father leave"],
    answer:
      "5 working days per child; separately or together; from 4 weeks before expected delivery to 14 weeks after birth. Notify intention ≥3 months ahead; confirm dates ≥5 days before leave.",
  },
  {
    id: 378,
    topic: "Bereavement leave",
    triggers: [
      "bereavement leave",
      "compassionate leave",
      "funeral leave",
      "death leave",
    ],
    answer:
      "After probation: 3 working days per occasion for spouse, child, parent, parent-in-law, sibling, grandparent or grandchild; within 3 months of death.",
  },
  {
    id: 379,
    topic: "Jury leave",
    triggers: ["jury leave", "jury duty", "jury service"],
    answer:
      "Paid leave for HK jury service; not deducted from annual leave. Inform dept head + HR when summoned.",
  },
  {
    id: 380,
    topic: "Menstruation leave",
    triggers: [
      "menstruation leave",
      "menstrual leave",
      "period leave",
    ],
    answer:
      "Full-time female staff after 3 months: 1 day/month (max 12/year); no carry-forward. Half-day counts as 1 day. Deducted from sick-leave balance; no cash. No medical certificate. Supervisor/dept head approve → HR same day.",
  },
  {
    id: 381,
    topic: "Compensation leave",
    triggers: [
      "compensation leave",
      "time off in lieu",
      "toil",
      "overtime leave",
      "cl balance",
      "overtime",
    ],
    answer:
      "For management-requested OT (special duties/travel/weekends/PH), not voluntary OT. Max 24 CL hours at month-end; excess lapses unless CEO extends. Round down to 0.5 hr. Prior written approval (dept head + CEO). Not paid in cash.",
  },
  {
    id: 382,
    topic: "Overtime travel rules",
    triggers: [
      "overtime travel",
      "overseas overtime",
      "flight overtime",
      "overtime local event",
    ],
    answer:
      "Overseas travel OT max 7.5 hrs/day (flight; exit-to-hotel-check-in; hotel-check-out-to-home). No CL on rest days with no duty. Local event OT: home→work→home on Sat/Sun/PH or outside weekday hours.",
  },
  {
    id: 383,
    topic: "Leave application",
    triggers: [
      "leave application",
      "how to apply leave",
      "apply for leave",
      "cancel leave",
    ],
    answer:
      "Submit prescribed form ≥1 week before leave; approved form to HR ≥2 working days before. Cancel/change needs supervisor + dept head approval; inform HR.",
  },
  {
    id: 384,
    topic: "Leave without notice",
    triggers: [
      "leave without notice",
      "absent without approval",
      "no show",
    ],
    answer:
      "Leave (except emergency sick leave) without prior notice/approval = work negligence. Habitual negligence may lead to summary dismissal or discipline.",
  },

  // —— PMS ——
  {
    id: 390,
    topic: "PMS cycle",
    triggers: [
      "pms",
      "performance appraisal",
      "performance review",
      "performance management",
      "appraisal period",
    ],
    answer:
      "Annual cycle Jul–Jun for all full-time (permanent + contract). Review 15 May–30 Jun; CEO calibration 1–31 Jul; return to staff 1 Aug. No formal annual review for part-timers.",
  },
  {
    id: 391,
    topic: "PMS rating scale",
    triggers: [
      "performance rating",
      "rating scale",
      "appraisal rating",
      "score a b c",
    ],
    answer:
      "A substantially exceed (13–15); B consistently exceed (10–12); C meet (7–9); D partially meet (4–6); E below (1–3). Objectives 60% + competencies 40%. Child Safeguarding: pass/fail only (pass = 8).",
  },
  {
    id: 392,
    topic: "Child safeguarding training",
    triggers: [
      "child safeguarding",
      "safeguarding essential",
      "safeguarding course",
    ],
    answer:
      "To pass Child Safeguarding competency: complete “Safeguarding Essential” + “Keeping Children and Young People Safe…”, or “Safeguarding Essentials Refresher”, and show daily safeguarding awareness.",
  },

  // —— Training ——
  {
    id: 400,
    topic: "Training sponsorship eligibility",
    triggers: [
      "training sponsorship",
      "education sponsorship",
      "course sponsorship",
      "study leave",
      "external training",
    ],
    answer:
      "Need employment + ≥3 months’ service + satisfactory performance. Apply ≥1 month before enrolment. Study leave and/or fee reimbursement possible. Approval lapses if course not started within 3 months.",
  },
  {
    id: 401,
    topic: "Training reimbursement exclusions",
    triggers: [
      "training reimbursement",
      "course fee claim",
      "what training fees",
      "examination fee",
    ],
    answer:
      "Reimburse tuition/course fees on successful completion (no advance). Not covered: application/caution/graduation/membership/registration/student/textbook/exam/exemption/travel/reservation fees. Still employed and not resigned when paid. Claim in same FY as completion.",
  },
  {
    id: 402,
    topic: "Training service commitment",
    triggers: [
      "training commitment",
      "service commitment",
      "sponsorship commitment",
      "repay sponsorship",
    ],
    answer:
      "Claimed ≤$5,000: no service bond. $5,001–$10,000: 2 months’ service after course completion. Fail to serve → repay full amount claimed (unless CEO approves otherwise).",
  },

  // —— Conduct / policies ——
  {
    id: 410,
    topic: "Code of conduct",
    triggers: [
      "code of conduct",
      "staff declaration",
      "whistleblowing",
      "values conduct",
    ],
    answer:
      "All staff sign a Staff Declaration on joining. Follow Global Policy on Values, Conduct and Whistleblowing for details.",
  },
  {
    id: 411,
    topic: "Harassment bullying discrimination",
    triggers: [
      "harassment",
      "bullying",
      "discrimination complaint",
      "dignity at work",
    ],
    answer:
      "Harassment, bullying and discrimination are unacceptable. Complaints taken seriously, promptly and confidentially. See Harassment, Bullying & Discrimination Policy.",
  },
  {
    id: 412,
    topic: "Grievance",
    triggers: ["grievance", "complaint procedure", "raise a grievance"],
    answer:
      "Fair grievance handling aims to resolve problems properly. See Grievance Policy for steps.",
  },
  {
    id: 413,
    topic: "Disciplinary",
    triggers: ["disciplinary", "discipline policy", "misconduct process"],
    answer:
      "Disciplinary rules protect operational standards and staff/org interests. See Disciplinary Policy.",
  },
  {
    id: 414,
    topic: "Outside work / conflict",
    triggers: [
      "outside work",
      "second job",
      "part time job outside",
      "conflict of interest",
      "side business",
    ],
    answer:
      "Need prior written approval before any outside business/employment/service. Must declare conflicts to HR/CEO. Breach may mean discipline including summary dismissal; serious cases may be reported to ICAC.",
  },
  {
    id: 415,
    topic: "Gifts and advantages",
    triggers: [
      "gift",
      "advantage",
      "sponsorship offered",
      "accept gift",
      "bribery",
    ],
    answer:
      "Do not solicit/accept advantages linked to duties unless permission given. See Gifts and sponsorship offered to staff policy.",
  },
  {
    id: 416,
    topic: "Declaration of interest",
    triggers: [
      "declaration of interest",
      "declare interest",
      "interest declaration",
    ],
    answer:
      "Manager grade (incl. Assistant Manager) and above: annual declaration. Others: when needed. Report changes in writing ASAP. Form on HR server.",
  },

  // —— Weather ——
  {
    id: 420,
    topic: "Typhoon signal 1 or 3",
    triggers: ["signal 1", "signal 3", "signal no. 1", "signal no. 3"],
    answer: "Signal 1 or 3 before work: report for duty as scheduled.",
  },
  {
    id: 421,
    topic: "Typhoon signal 8",
    triggers: [
      "typhoon",
      "signal 8",
      "signal no. 8",
      "pre-no 8",
      "pre no 8",
      "report to the office",
      "report to office",
      "wfh today",
      "work from home today",
      "extreme weather",
    ],
    answer:
      "Pre-No. 8 / No. 8+ before work: do not report. Issued during work: staff released (vulnerable/remote travellers first). If lowered before 13:30: resume within 2 hours. No work/travel (incl. online meetings) under bad-weather signal unless CEO approves.",
  },
  {
    id: 422,
    topic: "Rainstorm",
    triggers: [
      "rainstorm",
      "black rainstorm",
      "amber rainstorm",
      "red rainstorm",
      "black rain",
    ],
    answer:
      "Amber/Red before work: report as usual. Black before work: do not report. During work: usually continue unless dangerous (Black). If Black lowered before 13:30: resume within 2 hours. End of day: release as usual; shelter may be provided if staff stay.",
  },
  {
    id: 423,
    topic: "Weather difficulty reporting",
    triggers: [
      "cannot report due to weather",
      "difficulty reporting for duty",
      "stuck in typhoon",
    ],
    answer:
      "Tell supervisor/HR ASAP if you have difficulty reporting. Weather rules also apply during WFH periods.",
  },

  // —— Amendments ——
  {
    id: 430,
    topic: "Manual amendments",
    triggers: [
      "manual update",
      "policy change",
      "amendment of manual",
      "who to ask hr",
    ],
    answer:
      "Policies may be changed anytime; latest announced by email. Questions → supervisor, dept head, CEO or HR.",
  },
];

function scoreTopic(q, item) {
  let score = 0;
  for (const trigger of item.triggers) {
    if (q.includes(trigger)) score += trigger.length + 8;
  }
  // light keyword overlap on topic words
  for (const word of item.topic.toLowerCase().split(/\s+/)) {
    if (word.length > 3 && q.includes(word)) score += 2;
  }
  // answer keyword boost for rare terms present in q
  for (const word of q.split(/[^a-z0-9+$/]+/).filter((w) => w.length > 3)) {
    if (item.answer.toLowerCase().includes(word)) score += 1;
  }
  return score;
}

export function detectManualTopic(q) {
  let best = null;
  let bestScore = 0;
  for (const item of topics) {
    const score = scoreTopic(q, item);
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  // Require a minimum signal so we don't invent weak matches
  return bestScore >= 6 ? best : null;
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
  return /(staff manual|hr manual|employee manual|handbook|probation|notice period|working hours|office hours|annual leave|sick leave|marriage leave|maternity leave|paternity leave|bereavement|menstruation|menstrual|compensation leave|time off in lieu|\btoil\b|no-pay leave|unpaid leave|jury|meal allowance|payday|salary|mpf|provident|rental|breastfeeding|lactation|typhoon|signal|rainstorm|clock in|punctuality|official holiday|half day|promotion|transfer|retirement|dismiss|exit interview|performance|pms|appraisal|training|sponsorship|study leave|grievance|harassment|bullying|disciplinary|conflict of interest|outside work|second job|gift|advantage|declaration of interest|staff card|access card|scrc|equal opportunity|reference check|roster|direct dialogue|carry forward|leave application|child safeguarding|recognition payment|bonus)/i.test(
    q
  );
}
