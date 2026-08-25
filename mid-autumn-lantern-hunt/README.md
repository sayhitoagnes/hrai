# HKAC · 月餅謎局 · 燈謎 / The Mooncake Puzzle

Async Mid-Autumn activity for about **70 remote staff** of **Hong Kong Arts Centre**. Average age ~**30**. Gender mixed. People do not meet in person.

The evening is a **mooncake pair puzzle** plus three **燈謎** (verse, idiom, cryptic), then one inscribed line. Completing is enough for an equal prize draw. Nothing is emailed from the page.

**Play (staff):** [Open the evening](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-mid-autumn-lantern-hunt-1baf/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**HR desk:** footer → *HR organiser desk*, or add `#hr` to the same URL.

---

## How this plays

1. Sixteen cakes, eight pairs — tap two tiles
2. Three lantern riddles: 詩 / 成語 / 燈謎
3. **題燈** — one line of your own
4. Closing card with HKAC blessing and ticket `HKAC-MAF-…` (copy if asked)

Turns and riddle scores are not a ranking.

---

## What staff do (about 8 minutes)

1. Name → **Open the evening**.
2. Light **one** lantern.
3. Find the **eight pairs**.
4. Answer three 燈謎 (a miss still continues).
5. Write ≤ 40 characters (prompts: 但願人長久 / 千里共嬋娟 / 燈火未闌人未散).
6. Closing card: blessing, inscription, ticket. **Copy ticket** if HR asks. No email from this page.

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
