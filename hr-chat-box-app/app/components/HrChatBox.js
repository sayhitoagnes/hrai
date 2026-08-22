"use client";

import { useEffect, useRef, useState } from "react";
import { CAP57_URL, findAnswer } from "../../lib/knowledge";
import styles from "./HrChatBox.module.css";

const welcome =
  "Hi! Ask a Cap. 57 question and I will give the concrete rule (days, pay rate, eligibility). The source link is only for reference.";

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

  function ask() {
    const text = question.trim();
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
          text: "I don't know that one from the sample knowledge yet. Try asking about rest days, annual leave, sickness allowance, maternity/paternity leave, statutory holidays, wages, notice, or severance.",
          source: undefined,
          sourceUrl: undefined,
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
        <p>Ask about policies, benefits, workplace guidelines, or Cap. 57.</p>
        <a
          className={styles.headerLink}
          href={CAP57_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Employment Ordinance (Cap. 57)
        </a>
      </header>

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
            {message.text}
            {message.source ? (
              message.sourceUrl ? (
                <a
                  className={styles.source}
                  href={message.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source: {message.source}
                </a>
              ) : (
                <div className={styles.source}>Source: {message.source}</div>
              )
            ) : null}
          </div>
        ))}
      </div>

      <div className={styles.composer}>
        <button
          type="button"
          className={styles.contactHr}
          disabled
          title="Coming next"
        >
          Contact HR (coming next)
        </button>
        <div className={styles.row}>
          <textarea
            className={styles.question}
            rows={2}
            placeholder="Try: What is statutory annual leave under Cap. 57?"
            aria-label="Your question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={onKeyDown}
          />
          <button type="button" className={styles.askBtn} onClick={ask}>
            Ask
          </button>
        </div>
        <p className={styles.hint}>
          Cap. 57 answers are short summaries linked to{" "}
          <a href={CAP57_URL} target="_blank" rel="noopener noreferrer">
            elegislation.gov.hk
          </a>
          . Not legal advice. No login. Personal leave balances are not available
          in this build.
        </p>
      </div>
    </main>
  );
}
