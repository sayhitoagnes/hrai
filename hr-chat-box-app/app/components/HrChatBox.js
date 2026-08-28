"use client";

import { useEffect, useRef, useState } from "react";
import { findAnswer } from "../../lib/knowledge";
import styles from "./HrChatBox.module.css";

const welcome =
  "Hello. Ask about the Staff Manual, medical benefits (Plan 1/2), or Employment Ordinance — or tap a Quick FAQ below.";

const FAQ_SHORTCUTS = [
  { label: "Leave entitlement", query: "leave entitlement" },
  { label: "Bad weather arrangement", query: "bad weather arrangement" },
  { label: "Staff benefits", query: "staff benefits" },
];

export default function HrChatBox() {
  const [messages, setMessages] = useState([
    { id: "welcome", role: "bot", text: welcome },
  ]);
  const [question, setQuestion] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  function ask(preset) {
    const text = (typeof preset === "string" ? preset : question).trim();
    if (!text) return;

    const match = findAnswer(text);
    const reply = match
      ? {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: match.answer,
          source: match.source,
          sourceUrl: match.sourceUrl,
        }
      : {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: "I don’t have that yet. Try: annual leave, probation, notice, working hours, sick/marriage/maternity leave, or Plan 2 GP claim.",
        };

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", text },
      reply,
    ]);
    setQuestion("");
  }

  function onKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      ask();
    }
  }

  return (
    <main className={styles.app} aria-label="HR Chat box">
      <header className={styles.header}>
        <h1>HR Chat box</h1>
        <p>Staff Manual · Medical benefits · Employment Ordinance</p>
      </header>

      <section className={styles.faq} aria-label="Frequently asked topics">
        <p className={styles.faqLabel}>Quick FAQ</p>
        <div className={styles.faqRow}>
          {FAQ_SHORTCUTS.map((item) => (
            <button
              key={item.query}
              type="button"
              className={styles.faqBtn}
              onClick={() => ask(item.query)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <div
        id="messages"
        className={styles.messages}
        role="log"
        aria-live="polite"
        ref={listRef}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.bubble} ${
              message.role === "user" ? styles.user : styles.bot
            }`}
          >
            {message.role === "bot" ? (
              <div className={styles.speaker}>HR Specialist</div>
            ) : null}
            {message.text}
            {message.source ? (
              message.sourceUrl ? (
                <a
                  className={styles.source}
                  href={message.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reference: {message.source}
                </a>
              ) : (
                <div className={styles.source}>Reference: {message.source}</div>
              )
            ) : null}
          </div>
        ))}
      </div>

      <div className={styles.composer}>
        <div className={styles.row}>
          <textarea
            className={styles.question}
            rows={2}
            placeholder="Ask about leave, probation, GP claim…"
            aria-label="Your question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={onKeyDown}
          />
          <button type="button" className={styles.askBtn} onClick={() => ask()}>
            Ask
          </button>
        </div>
      </div>
    </main>
  );
}
