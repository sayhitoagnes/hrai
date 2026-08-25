# HKAC · 月餅枱 / The Mooncake Table

Async Mid-Autumn activity for about **70 remote staff** of **Hong Kong Arts Centre**. Average age ~**30**. Gender mixed. People do not meet in person.

The activity is a **Cathay-style mooncake slice game**, dressed for HKAC (ink, bone, gold). Reach **150 points**, write one line, email a greeting if you wish, then send a lucky ticket to HR.

**Play (staff):** [Open the mooncake table](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-mid-autumn-lantern-hunt-1baf/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**HR desk:** footer → *HR organiser desk*, or add `#hr` to the same URL.

---

## How this plays (like Cathay, not a quiz)

Cathay Pacific’s Mid-Autumn CRM game (Flarie **Chop**): mooncakes and fruit rise; you **swipe to slice**; avoid tickets; hit a score; enter a raffle. Same skeleton here, arts-centre skin.

| Slice | Avoid |
| --- | --- |
| Mooncake +25 | Lucky ticket — lose a life |
| Star fruit +15 | Star anise — the clock hurries |
| Double yolk +40 | |

Hold and drag on a computer. Swipe on a phone. **45 seconds**, **3 lives**. You may play again. Reaching 150 enters the draw equally — the score is not a ranking.

Then: **題燈**, a greeting you may email to someone you love, and the HR ticket.

---

## What staff do (about 6 minutes)

1. Name → **Take a seat at the table**.
2. Light **one** lantern.
3. Slice until **150**.
4. Write ≤ 40 characters (prompts: 但願人長久 / 千里共嬋娟 / 燈火未闌人未散).
5. Closing card: **HKAC blessing**, inscription, ticket `HKAC-MAF-…`
6. **Email a greeting** to someone they love (own mail app; HR never sees that address).
7. Separately, **email the lucky ticket to HR**.

---

## What you (HR) do

Open **HR desk**. Fill mailbox, prize, deadline. **Copy invitation**.

Inbox search: `[HKAC Mid-Autumn]`

**Invitation subject:** `[HKAC Mid-Autumn] 月餅枱 — slice, write one line`

After the deadline: paste names → **Draw the winner**. Completers only, equal chance.

**Announcement subject:** `[HKAC Mid-Autumn] 花好月圓 — this year’s lantern`

---

## Offline / demo

```bash
cd mid-autumn-lantern-hunt
python3 -m http.server 8765
```

Staff: `http://127.0.0.1:8765/`  
HR: `http://127.0.0.1:8765/#hr`

Setup is stored in **this browser only**.
