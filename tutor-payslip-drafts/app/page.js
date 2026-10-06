"use client";

import { useEffect, useRef, useState } from "react";

const schedule = [
  {
    payee: "Individual",
    title: "Ms",
    name: "Mia Chen",
    party: "Mia Chen",
    moduleCode: "ART-101",
    moduleName: "The Colour Workshop",
    teachingStart: "2 Sep 2026",
    teachingEnd: "16 Sep 2026",
    lessons: 2,
    hours: 4,
    grossPay: 2000,
  },
  {
    payee: "Individual",
    title: "Ms",
    name: "Mia Chen",
    party: "Mia Chen",
    moduleCode: "ART-102",
    moduleName: "Saturday Brush Practice",
    teachingStart: "9 Sep 2026",
    teachingEnd: "9 Sep 2026",
    lessons: 1,
    hours: 2,
    grossPay: 800,
  },
  {
    payee: "Individual",
    title: "Ms",
    name: "Mia Chen",
    party: "Mia Chen",
    moduleCode: "ART-103",
    moduleName: "Oil Colour",
    teachingStart: "21 Sep 2026",
    teachingEnd: "21 Sep 2026",
    lessons: 0,
    hours: 0,
    grossPay: 0,
  },
  {
    payee: "Company",
    title: "Mr",
    name: "Ken Ho",
    party: "Bright Studio",
    moduleCode: "ART-200",
    moduleName: "Studio Clay Day",
    teachingStart: "4 Sep 2026",
    teachingEnd: "11 Sep 2026",
    lessons: 2,
    hours: 5,
    grossPay: 2800,
  },
];

function isPaidIndividual(row) {
  const hasNoWork = row.lessons === 0 && row.grossPay === 0;
  return row.payee === "Individual" && !hasNoWork;
}

function money(amount) {
  return amount.toLocaleString("en-US");
}

function leftOffNote(rows) {
  const sentences = rows
    .filter((row) => row.payee === "Individual" && row.lessons === 0 && row.grossPay === 0)
    .map((row) => row.moduleCode + " " + row.moduleName + " has no lessons in this window.");

  rows
    .filter((row) => row.payee === "Company")
    .forEach((row) => {
      sentences.push(row.party + " is a company payee and stays with you.");
    });

  return "Left off: " + sentences.join(" ");
}

export default function Home() {
  const [status, setStatus] = useState("empty");
  const [draft, setDraft] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  function showDraft() {
    if (status !== "empty") return;
    setStatus("preparing");
    timer.current = window.setTimeout(() => {
      const paid = schedule.filter(isPaidIndividual);
      const tutor = paid[0];
      const surname = tutor.name.split(" ").slice(-1)[0];
      setDraft({
        subject: "Your September 2026 Payslip - " + tutor.name,
        greeting: "Dear " + tutor.title + ". " + surname + ",",
        rows: paid,
        note: leftOffNote(schedule),
      });
      setStatus("ready");
    }, 600);
  }

  const buttonLabel =
    status === "empty" ? "Show September draft" : status === "preparing" ? "Preparing draft…" : "Draft ready";

  return (
    <main>
      <p className="eyebrow">Compensation and Benefits</p>
      <h1>Tutor Payslip Drafts</h1>
      <p className="period">September 2026 · 19 Aug 2026 to 18 Sep 2026</p>
      <div className="actions">
        <button id="show-draft" type="button" disabled={status !== "empty"} onClick={showDraft}>
          {buttonLabel}
        </button>
      </div>

      <section id="draft-panel" aria-live="polite">
        {status !== "ready" ? <p id="empty-state" className="empty">The September draft will appear here.</p> : null}

        {status === "ready" && draft ? (
          <article id="email" className="email">
            <p className="subject">
              <span>Subject</span> <strong id="subject-line">{draft.subject}</strong>
            </p>
            <div className="letter">
              <p id="greeting">{draft.greeting}</p>
              <p>
                The current month’s payslip is ready for download now. To access your e-payslip, please click{" "}
                <a href="https://hrms12.bipocloud.com/HKAC/Login">https://hrms12.bipocloud.com/HKAC/Login</a> and log
                onto the system with your username and password.
              </p>
              <p>
                Username: English name plus surname, for example PeterChan. If you do not have an English name, use
                first name plus surname, for example TaiManChan.
              </p>
              <p>
                To facilitate you to check the payment details, please find below the respective teaching/payment
                schedules from 19 August to 18 September 2026 for your reference.
              </p>
              <div className="table-wrap">
                <table>
                  <caption>Sample September draft. This email has not been sent.</caption>
                  <thead>
                    <tr>
                      <th>Instructor Name</th>
                      <th>Module Code</th>
                      <th>Module Name</th>
                      <th>Teaching Start Date</th>
                      <th>Teaching End Date</th>
                      <th className="num">Total Lesson</th>
                      <th className="num">Total Course Hour</th>
                      <th className="num">Total Gross Pay</th>
                    </tr>
                  </thead>
                  <tbody id="module-rows">
                    {draft.rows.map((row, index) => (
                      <tr key={row.moduleCode}>
                        <td>{index === 0 ? row.name : ""}</td>
                        <td>{row.moduleCode}</td>
                        <td>{row.moduleName}</td>
                        <td>{row.teachingStart}</td>
                        <td>{row.teachingEnd}</td>
                        <td className="num">{String(row.lessons)}</td>
                        <td className="num">{row.hours.toFixed(2)}</td>
                        <td className="num">{money(row.grossPay)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Should you have any enquiries, please feel free to contact me directly. Thank you for your attention.</p>
              <p className="signoff">
                Agnes Wong
                <br />
                Assistant Human Resources Manager
                <br />
                Hong Kong Arts Centre
                <br />
                8/F 2 Harbour Road Wan Chai
                <br />
                <br />
                T +852 2582 0266 &nbsp; E <a href="mailto:agnwong@hkac.org.hk">agnwong@hkac.org.hk</a>
              </p>
            </div>
          </article>
        ) : null}

        {status === "ready" && draft ? (
          <p id="left-off" className="left-off">
            {draft.note}
          </p>
        ) : null}
      </section>
    </main>
  );
}
