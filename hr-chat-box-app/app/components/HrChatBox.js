"use client";

import { useEffect, useRef, useState } from "react";
import { findAnswer } from "../../lib/knowledge";
import styles from "./HrChatBox.module.css";

const welcome =
  "Hi! I can answer sample questions about policies, benefits, and workplace guidelines.";

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
        }
      : {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: "I don't know based on the sample knowledge in this build.",
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
        <p>Ask about policies, benefits, or workplace guidelines.</p>
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
              <div className={styles.source}>Source: {message.source}</div>
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
            placeholder="Type your question…"
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
          Sample knowledge only. No login. Personal leave balances are not
          available in this build.
        </p>
      </div>
    </main>
  );
}
