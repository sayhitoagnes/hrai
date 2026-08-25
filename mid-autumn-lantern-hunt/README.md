# HKAC · 月餅謎局 / The Mooncake Puzzle

Async Mid-Autumn activity for about **70 remote staff** of **Hong Kong Arts Centre**. Average age ~**30**. Gender mixed. People do not meet in person.

The activity is a **mooncake pair puzzle**: sixteen cakes, eight pairs. Turn two tiles. A match stays. When the table is complete, write one line, email a greeting if you wish, then send a lucky ticket to HR.

**Play (staff):** [Open the puzzle](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-mid-autumn-lantern-hunt-1baf/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**HR desk:** footer → *HR organiser desk*, or add `#hr` to the same URL.

---

## How this plays

- Sixteen cakes, eight kinds, two of each
- Tap one tile, then another
- A pair stays open; a miss turns back
- **Eight pairs** finish the board — enough for an equal prize draw (turns are not a ranking)

Then: **題燈**, a greeting you may email to someone you love, and the HR ticket.

---

## What staff do (about 5 minutes)

1. Name → **Open the puzzle**.
2. Light **one** lantern.
3. Find the **eight pairs**.
4. Write ≤ 40 characters (prompts: 但願人長久 / 千里共嬋娟 / 燈火未闌人未散).
5. Closing card: **HKAC blessing**, inscription, ticket `HKAC-MAF-…`
6. **Email a greeting** to someone they love (own mail app; HR never sees that address).
7. Separately, **email the lucky ticket to HR**.

---

## What you (HR) do

Open **HR desk**. Fill mailbox, prize, deadline. **Copy invitation**.

Inbox search: `[HKAC Mid-Autumn]`

**Invitation subject:** `[HKAC Mid-Autumn] 月餅謎局 — eight pairs, write one line`

After the deadline: paste names → **Draw the winner**. Completers only, equal chance.

---

## Offline / demo

```bash
cd mid-autumn-lantern-hunt
python3 -m http.server 8765
```

Staff: `http://127.0.0.1:8765/`  
HR: `http://127.0.0.1:8765/#hr`
