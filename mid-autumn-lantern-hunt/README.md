# HKAC · 月餅謎局 / The Mooncake Puzzle

Async Mid-Autumn activity for about **70 remote staff** of **Hong Kong Arts Centre**. Average age ~**30**. Gender mixed. People do not meet in person.

The activity is Cathay’s **mooncake matching puzzle** (not the later swipe-to-slice Chop game), dressed for HKAC (ink, bone, gold). Reach **200 points**, write one line, email a greeting if you wish, then send a lucky ticket to HR.

**Play (staff):** [Open the puzzle](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-mid-autumn-lantern-hunt-1baf/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**HR desk:** footer → *HR organiser desk*, or add `#hr` to the same URL.

---

## How this plays

Cathay’s 2024 Mid-Autumn CRM game (Flarie jewel / matching): line up pieces, hit a score, enter a raffle. Same skeleton here.

- Five cakes: lotus, red bean, yolk, snow skin, tea
- Tap two **neighbours** to swap
- Three in a row or column clear; cascades score more
- **25 moves**, target **200**
- You may try another board. Reaching 200 enters the draw equally — not a ranking

Then: **題燈**, a greeting you may email to someone you love, and the HR ticket.

---

## What staff do (about 6 minutes)

1. Name → **Open the puzzle**.
2. Light **one** lantern.
3. Match three until **200**.
4. Write ≤ 40 characters (prompts: 但願人長久 / 千里共嬋娟 / 燈火未闌人未散).
5. Closing card: **HKAC blessing**, inscription, ticket `HKAC-MAF-…`
6. **Email a greeting** to someone they love (own mail app; HR never sees that address).
7. Separately, **email the lucky ticket to HR**.

---

## What you (HR) do

Open **HR desk**. Fill mailbox, prize, deadline. **Copy invitation**.

Inbox search: `[HKAC Mid-Autumn]`

**Invitation subject:** `[HKAC Mid-Autumn] 月餅謎局 — match three, write one line`

After the deadline: paste names → **Draw the winner**. Completers only, equal chance.

---

## Offline / demo

```bash
cd mid-autumn-lantern-hunt
python3 -m http.server 8765
```

Staff: `http://127.0.0.1:8765/`  
HR: `http://127.0.0.1:8765/#hr`
