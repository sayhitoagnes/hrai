# HKAC · 月餅謎局 · 燈謎 / The Mooncake Puzzle

Async Mid-Autumn activity for about **70 remote staff** of **Hong Kong Arts Centre**. Average age ~**30**. Gender mixed. People do not meet in person.

The evening is two games — a **mooncake pair puzzle** and a **reunion table** — plus **six 燈謎**, then one inscribed line. Completing is enough for an equal prize draw. Nothing is emailed from the page. The closing card shows an accumulated score (for the evening, not a ranking).

**Play (staff):** [Open the evening](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-mid-autumn-lantern-hunt-1baf/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**HR desk:** footer → *HR organiser desk*, or add `#hr` to the same URL.

---

## How this plays

1. Sixteen cakes, eight pairs — tap two tiles
2. Reunion table — tap four Mid-Autumn things among eight
3. Six lantern riddles (a correct choice is marked **Correct**)
4. **題燈** — one line of your own
5. Closing card: **accumulated score / 180**, HKAC blessing, ticket `HKAC-MAF-…`

Score: 10 points per pair (80), 10 per table find (40), 10 per correct riddle (60). Completing still enters the draw equally.

---

## What staff do (about 10 minutes)

1. Name → **Open the evening**.
2. Light **one** lantern.
3. Find the **eight pairs**.
4. Set the **reunion table** (mooncake, pomelo, lantern, tea).
5. Answer six 燈謎 (a miss still continues; **Correct** is shown when right).
6. Write ≤ 40 characters (prompts: 但願人長久 / 千里共嬋娟 / 燈火未闌人未散).
7. Closing card: score, blessing, inscription, ticket. **Copy ticket** if HR asks.

---

## What you (HR) do

Open **HR desk**. Fill prize and deadline. **Copy invitation** into Teams, WhatsApp, or a notice.

After the deadline: paste names of people who finished → **Draw the winner**. Equal chance.

---

## Offline / demo

```bash
cd mid-autumn-lantern-hunt
python3 -m http.server 8765
```

Staff: `http://127.0.0.1:8765/`  
HR: `http://127.0.0.1:8765/#hr`
