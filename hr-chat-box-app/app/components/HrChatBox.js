"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);
  const messageSequence = useRef(0);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  function messageId(prefix) {
    messageSequence.current += 1;
    return `${prefix}-${messageSequence.current}`;
  }

  async function ask(preset) {
    const text = (typeof preset === "string" ? preset : question).trim();
    if (!text || isLoading) return;

    const userMessage = { id: messageId("user"), role: "user", text };
    const pendingMessage = {
      id: messageId("pending"),
      role: "bot",
      text: "Looking up the approved HR knowledge base…",
      pending: true,
    };
    const history = messages
      .filter((message) => !message.pending)
      .map((message) => ({
        role: message.role === "bot" ? "assistant" : "user",
        content: message.text,
      }));

    setMessages((prev) => [...prev, userMessage, pendingMessage]);
    setQuestion("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      const result = await response.json();
      const reply = {
        id: messageId("bot"),
        role: "bot",
        text:
          result.answer ||
          result.error ||
          "I could not answer that right now. Please try again or contact HR.",
        sources: result.sources || [],
      };
      setMessages((prev) =>
        prev.map((message) =>
          message.id === pendingMessage.id ? reply : message
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === pendingMessage.id
            ? {
                id: messageId("bot"),
                role: "bot",
                text: "I could not connect to the AI service. Please try again or contact HR.",
              }
            : message
        )
      );
    } finally {
      setIsLoading(false);
    }
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
              disabled={isLoading}
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
            {message.sources?.length ? (
              <div className={styles.sources} aria-label="Sources">
                {message.sources.map((source) =>
                  source.sourceUrl ? (
                    <a
                      className={styles.source}
                      href={source.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={source.id}
                    >
                      Source: {source.source}
                    </a>
                  ) : (
                    <span className={styles.source} key={source.id}>
                      Source: {source.source}
                    </span>
                  )
                )}
              </div>
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
          <button
            type="button"
            className={styles.askBtn}
            onClick={() => ask()}
            disabled={isLoading}
          >
            {isLoading ? "Thinking…" : "Ask"}
          </button>
        </div>
      </div>
    </main>
  );
}
