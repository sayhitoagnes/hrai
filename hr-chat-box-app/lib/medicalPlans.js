export const PLAN1_PDF = "/benefits/medical-plan-1-manager.pdf";
export const PLAN2_PDF = "/benefits/medical-plan-2-staff.pdf";

/** Plan 1 = Manager grade and above. Plan 2 = staff below manager grade. */
export const medicalPlans = {
  plan1: {
    code: "Plan 1",
    audience: "Manager grade and above",
    insurer: "Blue Cross (Asia-Pacific) Insurance Limited",
    hospital: {
      levelCode: "HS 1",
      accommodation: "Semi-Private",
      reimbursement: "100%",
      surgeon: {
        complex: 25500,
        major: 17000,
        intermediate: 8500,
        minor: 4250,
      },
      anaesthetistAndTheatre: {
        complex: 7650,
        major: 5100,
        intermediate: 2550,
        minor: 1275,
      },
      roomAndBoardPerDay: 1000,
      roomAndBoardMaxDays: 45,
      miscellaneousHospital: 17500,
      physicianVisitPerDay: 1000,
      physicianVisitMaxDays: 45,
      icuPerDay: 2000,
      icuMaxDays: 7,
      hospitalCashPerDay: 500,
      hospitalCashMaxDays: 31,
    },
    supplementary: {
      levelCode: "MM 1",
      reimbursement: "80%",
      deductible: 500,
      overallMaxPerDisability: 150000,
      accommodation: "Semi-Private",
    },
    outpatient: {
      levelCode: "OP 1",
      gpPerVisit: 280,
      gpMaxVisits: 30,
      specialistPerVisit: 630,
      specialistMaxVisits: 15,
      specialistReferralRequired: false,
      diagnosticPerDisability: 800,
      physioPerVisit: 600,
      physioMaxVisits: 15,
      chineseMedicinePerVisit: 260,
      chineseMedicineMaxVisits: 20,
      vaccinationOrCheckupPerVisit: 260,
      vaccinationOrCheckupMaxVisits: 1,
      networkCopay: 0,
    },
    dental: {
      levelCode: "DENT 1",
      overallMaxPerYear: 900,
      reimbursement: "100% Reasonable & Customary",
      covered:
        "X-rays before dental service, abscess drainage, medication, fillings, simple extractions (exclude wisdom teeth & surgical cases), oral examination, scale & polish",
    },
  },
  plan2: {
    code: "Plan 2",
    audience: "Staff below manager grade",
    insurer: "Blue Cross (Asia-Pacific) Insurance Limited",
    hospital: {
      levelCode: "HS 2",
      accommodation: "Semi-Private",
      reimbursement: "100%",
      surgeon: {
        complex: 25500,
        major: 17000,
        intermediate: 8500,
        minor: 4250,
      },
      anaesthetistAndTheatre: {
        complex: 7650,
        major: 5100,
        intermediate: 2550,
        minor: 1275,
      },
      roomAndBoardPerDay: 1000,
      roomAndBoardMaxDays: 45,
      miscellaneousHospital: 17500,
      physicianVisitPerDay: 1000,
      physicianVisitMaxDays: 45,
      icuPerDay: 2000,
      icuMaxDays: 7,
      hospitalCashPerDay: 500,
      hospitalCashMaxDays: 31,
    },
    supplementary: {
      levelCode: "MM 2",
      reimbursement: "80%",
      deductible: 500,
      overallMaxPerDisability: 150000,
      accommodation: "Semi-Private",
    },
    outpatient: {
      levelCode: "OP 2",
      gpPerVisit: 240,
      gpMaxVisits: 30,
      specialistPerVisit: 530,
      specialistMaxVisits: 15,
      specialistReferralRequired: false,
      diagnosticPerDisability: 700,
      physioPerVisit: 500,
      physioMaxVisits: 15,
      chineseMedicinePerVisit: 220,
      chineseMedicineMaxVisits: 20,
      vaccinationOrCheckupPerVisit: 220,
      vaccinationOrCheckupMaxVisits: 1,
      networkCopay: 0,
    },
    dental: {
      levelCode: "DENT 2",
      overallMaxPerYear: 900,
      reimbursement: "100% Reasonable & Customary",
      covered:
        "X-rays before dental service, abscess drainage, medication, fillings, simple extractions (exclude wisdom teeth & surgical cases), oral examination, scale & polish",
    },
  },
};

function money(n) {
  return `HK$${Number(n).toLocaleString("en-HK")}`;
}

function detectPlanKey(q) {
  if (
    /below manager|non-manager|non manager|staff below|junior staff|officer grade|plan\s*2/.test(
      q
    )
  ) {
    return "plan2";
  }
  if (
    /plan\s*1|manager grade|manager and above|mgr and above|manager\+|for managers|as a manager|i am a manager|i'm a manager|\bmanager\b|\bmgr\b/.test(
      q
    )
  ) {
    return "plan1";
  }
  return null;
}

function planLabel(plan) {
  return `${plan.code} (${plan.audience})`;
}

function hospitalSummary(plan) {
  const h = plan.hospital;
  return (
    `${planLabel(plan)} hospital & surgical cover (Blue Cross, ${h.levelCode}): ` +
    `semi-private room, ${h.reimbursement} reimbursement. ` +
    `Room & board ${money(h.roomAndBoardPerDay)}/day up to ${h.roomAndBoardMaxDays} days; ` +
    `miscellaneous hospital charges up to ${money(h.miscellaneousHospital)}; ` +
    `physician hospital visits ${money(h.physicianVisitPerDay)}/day up to ${h.physicianVisitMaxDays} days; ` +
    `ICU ${money(h.icuPerDay)}/day up to ${h.icuMaxDays} days. ` +
    `Surgeon fees up to Complex ${money(h.surgeon.complex)} / Major ${money(h.surgeon.major)} / ` +
    `Intermediate ${money(h.surgeon.intermediate)} / Minor ${money(h.surgeon.minor)}. ` +
    `Anaesthetist and operating theatre each follow the same tier caps ` +
    `(Complex ${money(h.anaesthetistAndTheatre.complex)} / Major ${money(h.anaesthetistAndTheatre.major)} / ` +
    `Intermediate ${money(h.anaesthetistAndTheatre.intermediate)} / Minor ${money(h.anaesthetistAndTheatre.minor)}). ` +
    `Public-hospital general ward cash allowance ${money(h.hospitalCashPerDay)}/day up to ${h.hospitalCashMaxDays} days.`
  );
}

function outpatientSummary(plan) {
  const o = plan.outpatient;
  return (
    `${planLabel(plan)} outpatient limits (Blue Cross, ${o.levelCode}, 100% reimbursement): ` +
    `GP ${money(o.gpPerVisit)}/visit, max ${o.gpMaxVisits}/year; ` +
    `Specialist ${money(o.specialistPerVisit)}/visit, max ${o.specialistMaxVisits}/year` +
    `${o.specialistReferralRequired ? "" : " (no referral letter required)"}; ` +
    `diagnostic X-ray/lab up to ${money(o.diagnosticPerDisability)} per disability; ` +
    `physiotherapy/chiropractic ${money(o.physioPerVisit)}/visit, max ${o.physioMaxVisits}/year; ` +
    `Chinese medicine ${money(o.chineseMedicinePerVisit)}/visit, max ${o.chineseMedicineMaxVisits}/year; ` +
    `vaccination/routine checkup ${money(o.vaccinationOrCheckupPerVisit)}/visit, max ${o.vaccinationOrCheckupMaxVisits}/year. ` +
    `At Blue Cross network clinics, co-payment for the listed outpatient services is ${money(o.networkCopay)}.`
  );
}

function dentalSummary(plan) {
  const d = plan.dental;
  return (
    `${planLabel(plan)} dental benefit (Blue Cross, ${d.levelCode}): ` +
    `overall maximum ${money(d.overallMaxPerYear)} in any one year at ${d.reimbursement}. ` +
    `Covered items include ${d.covered}.`
  );
}

function supplementarySummary(plan) {
  const s = plan.supplementary;
  return (
    `${planLabel(plan)} supplementary medical benefit (Blue Cross, ${s.levelCode}): ` +
    `${s.reimbursement} reimbursement after a ${money(s.deductible)} deductible, ` +
    `overall maximum ${money(s.overallMaxPerDisability)} per disability, entitled accommodation ${s.accommodation}. ` +
    `This sits on top of the basic hospital & surgical schedule for eligible confinement/surgical expenses.`
  );
}

function bothPlansOutpatientCompare() {
  const a = medicalPlans.plan1.outpatient;
  const b = medicalPlans.plan2.outpatient;
  return (
    "Happy to help. Your medical outpatient plan depends on grade: " +
    `Plan 1 is for manager grade and above; Plan 2 is for staff below manager grade. ` +
    `Key outpatient limits — Plan 1 vs Plan 2: ` +
    `GP ${money(a.gpPerVisit)} vs ${money(b.gpPerVisit)}; ` +
    `Specialist ${money(a.specialistPerVisit)} vs ${money(b.specialistPerVisit)}; ` +
    `X-ray/lab ${money(a.diagnosticPerDisability)} vs ${money(b.diagnosticPerDisability)} per disability; ` +
    `Physio ${money(a.physioPerVisit)} vs ${money(b.physioPerVisit)}; ` +
    `Chinese medicine ${money(a.chineseMedicinePerVisit)} vs ${money(b.chineseMedicinePerVisit)}; ` +
    `Vaccination/checkup ${money(a.vaccinationOrCheckupPerVisit)} vs ${money(b.vaccinationOrCheckupPerVisit)}. ` +
    `Hospital, supplementary (80% after HK$500 deductible, max HK$150,000/disability), and dental (HK$900/year) schedules are aligned across both plans. ` +
    `Tell me your grade (manager+ or below manager), or ask about GP / specialist / hospital / dental, and I’ll give the exact figures.`
  );
}

export function buildMedicalKnowledge() {
  const p1 = medicalPlans.plan1;
  const p2 = medicalPlans.plan2;

  return [
    {
      id: 201,
      topic: "Medical plan which applies",
      category: "medical",
      triggers: [
        "which medical plan",
        "what medical plan",
        "my medical plan",
        "medical plan for manager",
        "medical plan for staff",
        "plan 1 or plan 2",
        "manager grade medical",
        "below manager medical",
      ],
      answer:
        "As your HR specialist: medical cover is split by grade. Plan 1 applies to manager grade and above. Plan 2 applies to staff below manager grade. Both are Blue Cross schedules. Please tell me your grade, or ask about a benefit type (GP, specialist, hospital, dental), and I’ll quote the exact limits.",
      source: "Medical Plan 1 & 2 Benefit Schedules",
    },
    {
      id: 202,
      topic: "Medical benefits overview",
      category: "medical",
      triggers: [
        "medical benefit",
        "medical benefits",
        "health insurance",
        "medical insurance",
        "medical coverage",
        "medical plan",
        "company medical",
        "outpatient benefit",
        "hospital benefit",
      ],
      answer: bothPlansOutpatientCompare(),
      source: "Medical Plan 1 & 2 Benefit Schedules",
    },
    {
      id: 203,
      topic: "Plan 1 overview",
      category: "medical",
      triggers: [
        "plan 1",
        "plan1",
        "manager medical",
        "manager and above medical",
        "mgr and above",
      ],
      answer:
        `Plan 1 is for manager grade and above (${p1.insurer}). ` +
        outpatientSummary(p1) +
        " " +
        hospitalSummary(p1) +
        " " +
        supplementarySummary(p1) +
        " " +
        dentalSummary(p1),
      source: "Medical Plan 1 (Manager and above)",
      sourceUrl: PLAN1_PDF,
    },
    {
      id: 204,
      topic: "Plan 2 overview",
      category: "medical",
      triggers: [
        "plan 2",
        "plan2",
        "below manager medical",
        "below manager",
        "staff medical plan",
        "non-manager medical",
      ],
      answer:
        `Plan 2 is for staff below manager grade (${p2.insurer}). ` +
        outpatientSummary(p2) +
        " " +
        hospitalSummary(p2) +
        " " +
        supplementarySummary(p2) +
        " " +
        dentalSummary(p2),
      source: "Medical Plan 2 (Below manager)",
      sourceUrl: PLAN2_PDF,
    },
    {
      id: 205,
      topic: "GP consultation limits",
      category: "medical",
      triggers: [
        "gp",
        "gp visit",
        "gp consultation",
        "gp limit",
        "gp benefit",
        "gp claim",
        "claim for gp",
        "how much can i claim for gp",
        "how much gp",
        "general practitioner",
        "family doctor",
        "clinic visit limit",
        "outpatient gp",
      ],
      answer: "Plan 1 (manager+): $280. Plan 2 (below manager): $240.",
      source: "Medical Plan Outpatient Benefits",
    },
    {
      id: 206,
      topic: "Specialist consultation limits",
      category: "medical",
      triggers: [
        "specialist",
        "specialist visit",
        "specialist consultation",
        "see a specialist",
        "referral letter",
      ],
      answer: "Plan 1 (manager+): $630. Plan 2 (below manager): $530.",
      source: "Medical Plan Outpatient Benefits",
    },
    {
      id: 207,
      topic: "Hospital and surgical limits",
      category: "medical",
      triggers: [
        "hospital",
        "hospitalisation",
        "hospitalization",
        "surgical",
        "surgery benefit",
        "room and board",
        "icu",
        "surgeon fee",
      ],
      answer:
        "Hospital & surgical schedules are the same for Plan 1 and Plan 2 (semi-private, 100% reimbursement): " +
        `room & board ${money(p1.hospital.roomAndBoardPerDay)}/day up to ${p1.hospital.roomAndBoardMaxDays} days; ` +
        `miscellaneous hospital charges up to ${money(p1.hospital.miscellaneousHospital)}; ` +
        `physician visits ${money(p1.hospital.physicianVisitPerDay)}/day up to ${p1.hospital.physicianVisitMaxDays} days; ` +
        `ICU ${money(p1.hospital.icuPerDay)}/day up to ${p1.hospital.icuMaxDays} days; ` +
        `surgeon fees up to Complex ${money(p1.hospital.surgeon.complex)} / Major ${money(p1.hospital.surgeon.major)} / Intermediate ${money(p1.hospital.surgeon.intermediate)} / Minor ${money(p1.hospital.surgeon.minor)}. ` +
        `Supplementary cover is also aligned: 80% after HK$500 deductible, overall max HK$150,000 per disability.`,
      source: "Medical Plan Hospital & Surgical Benefits",
    },
    {
      id: 208,
      topic: "Dental benefits",
      category: "medical",
      triggers: [
        "dental",
        "dentist",
        "scale and polish",
        "teeth cleaning",
        "filling",
        "tooth extraction",
      ],
      answer: "$900 per year (same for Plan 1 and Plan 2).",
      source: "Medical Plan Dental Benefits",
    },
    {
      id: 209,
      topic: "Chinese medicine physio checkup",
      category: "medical",
      triggers: [
        "chinese medicine",
        "acupuncture",
        "bonesetting",
        "physiotherapy",
        "chiropractic",
        "vaccination",
        "routine checkup",
        "body check",
        "x-ray",
        "laboratory test",
      ],
      answer:
        `Other outpatient limits — Plan 1 (manager+) vs Plan 2 (below manager): ` +
        `Chinese medicine ${money(p1.outpatient.chineseMedicinePerVisit)} vs ${money(p2.outpatient.chineseMedicinePerVisit)} per visit (max 20/year); ` +
        `Physiotherapy/chiropractic ${money(p1.outpatient.physioPerVisit)} vs ${money(p2.outpatient.physioPerVisit)} per visit (max 15/year); ` +
        `Diagnostic X-ray/lab ${money(p1.outpatient.diagnosticPerDisability)} vs ${money(p2.outpatient.diagnosticPerDisability)} per disability; ` +
        `Vaccination/routine checkup ${money(p1.outpatient.vaccinationOrCheckupPerVisit)} vs ${money(p2.outpatient.vaccinationOrCheckupPerVisit)} (1 visit/year). ` +
        `Chinese medicine, physio, GP and specialist visits share an overall combined maximum of 30 visits per year.`,
      source: "Medical Plan Outpatient Benefits",
    },
    {
      id: 210,
      topic: "Network clinic and claims tip",
      category: "medical",
      triggers: [
        "network clinic",
        "blue cross",
        "medical card",
        "how to claim",
        "claim medical",
        "co-payment",
        "copay",
      ],
      answer:
        "For Blue Cross network clinics, co-payment on the listed outpatient services (GP, specialist, physio, Chinese medicine) is HK$0 under both plans. For network outpatient surgery such as gastroscopy/colonoscopy, use your electronic Medical Service Card at designated Blue Cross network clinics for full cover under the schedule. If you need the full benefit tables, open Plan 1 (manager+) or Plan 2 (below manager) from the benefits folder, or tell me your grade and the benefit you need.",
      source: "Medical Plan 1 & 2 Benefit Schedules",
    },
  ];
}

function detectBenefit(q) {
  if (
    /\bgp\b|general practitioner|family doctor|gp visit|gp consultation|gp limit|gp benefit|claim for gp|gp claim/.test(
      q
    )
  ) {
    return "gp";
  }
  if (/specialist/.test(q)) return "specialist";
  if (/chinese medicine|acupuncture|bonesetting/.test(q)) return "chinese";
  if (/physio|chiropractic/.test(q)) return "physio";
  if (/x-ray|laboratory|lab test|diagnostic/.test(q)) return "diagnostic";
  if (/vaccination|routine checkup|body check/.test(q)) return "checkup";
  if (/dental|dentist|teeth|filling|scale/.test(q)) return "dental";
  if (/room and board/.test(q)) return "room";
  if (/\bicu\b/.test(q)) return "icu";
  if (/hospital|surg|surgeon|hospitalisation|hospitalization/.test(q)) {
    return "hospital";
  }
  return null;
}

function dollars(n) {
  return `$${Number(n).toLocaleString("en-HK")}`;
}

function conciseBenefitAnswer(plan, benefit) {
  const o = plan.outpatient;
  const h = plan.hospital;
  switch (benefit) {
    case "gp":
      return dollars(o.gpPerVisit);
    case "specialist":
      return dollars(o.specialistPerVisit);
    case "chinese":
      return dollars(o.chineseMedicinePerVisit);
    case "physio":
      return dollars(o.physioPerVisit);
    case "diagnostic":
      return dollars(o.diagnosticPerDisability);
    case "checkup":
      return dollars(o.vaccinationOrCheckupPerVisit);
    case "dental":
      return dollars(plan.dental.overallMaxPerYear);
    case "room":
      return `${dollars(h.roomAndBoardPerDay)}/day`;
    case "icu":
      return `${dollars(h.icuPerDay)}/day`;
    case "hospital":
      return `${dollars(h.roomAndBoardPerDay)}/day room & board (max ${h.roomAndBoardMaxDays} days)`;
    default:
      return null;
  }
}

function shortCompare(benefit) {
  const a = conciseBenefitAnswer(medicalPlans.plan1, benefit);
  const b = conciseBenefitAnswer(medicalPlans.plan2, benefit);
  if (!a || !b) return null;
  return `Plan 1 (manager+): ${a}. Plan 2 (below manager): ${b}.`;
}

export function refineMedicalAnswer(question, item) {
  if (!item || item.category !== "medical") return item;
  const q = question.toLowerCase();
  const key = detectPlanKey(q);
  const benefit = detectBenefit(q);

  const sourceFor = (planKey) =>
    planKey === "plan1"
      ? {
          source: "Medical Plan 1 (Manager and above)",
          sourceUrl: PLAN1_PDF,
        }
      : planKey === "plan2"
        ? {
            source: "Medical Plan 2 (Below manager)",
            sourceUrl: PLAN2_PDF,
          }
        : {
            source: "Medical Plan 1 & 2 Benefit Schedules",
          };

  // Specific benefit + known plan → concise amount only (e.g. "$240")
  if (benefit && key) {
    const amount = conciseBenefitAnswer(medicalPlans[key], benefit);
    if (amount) {
      return {
        ...item,
        answer: amount,
        source: undefined,
        sourceUrl: undefined,
      };
    }
  }

  // Specific benefit, plan unknown → short Plan 1 vs Plan 2 compare
  if (benefit && !key) {
    const compare = shortCompare(benefit);
    if (compare) {
      return {
        ...item,
        answer: compare,
        ...sourceFor(null),
      };
    }
  }

  // Known plan, general medical question → one short line
  if (key && !benefit) {
    const plan = medicalPlans[key];
    return {
      ...item,
      answer: `${plan.code}: GP ${dollars(plan.outpatient.gpPerVisit)}, Specialist ${dollars(plan.outpatient.specialistPerVisit)}, Dental ${dollars(plan.dental.overallMaxPerYear)}/year.`,
      ...sourceFor(key),
    };
  }

  return item;
}
