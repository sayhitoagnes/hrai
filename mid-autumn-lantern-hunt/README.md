# HKAC · 月餅謎局 · 燈謎 / The Mooncake Puzzle

Async Mid-Autumn activity for **Hong Kong Arts Centre** staff who cannot gather in person. About **10 minutes**. **No login. No lucky draw.** The closing card shows a personal score out of **180**.

**Play (staff):** [Open the evening](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-mid-autumn-lantern-hunt-1baf/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**Staff invitation email (with graphic):** [staff-invitation-email.html](staff-invitation-email.html) · plain text: [staff-invitation-plain.txt](staff-invitation-plain.txt)

**Game rules (bilingual, no spoilers):** [game-rules.html](game-rules.html)

**HR desk:** footer → *HR organiser desk*, or add `#hr` to the same URL.

---

## How this plays

1. Light one lantern
2. Sixteen cakes, eight pairs — tap two tiles (memory match)
3. Reunion table — twelve festival items; seat the four that belong at Mid-Autumn
4. Six lantern riddles (a miss still continues)
5. **題燈** — one line of your own (not scored)
6. Closing card: **score / 180**, HKAC blessing, inscription

**Score:** 10 points per pair (80) + 10 per table seat (40) + 10 per correct riddle (60). Turns on the mooncake board are recorded and do not affect the score. Completing the first two games awards 120; riddles add 0–60.

---

## What staff do (about 10 minutes)

1. Name → **Begin**.
2. Light **one** lantern.
3. Find the **eight pairs**.
4. Set the **reunion table** (select a full set, then Seat them).
5. Answer six 燈謎.
6. Write ≤ 40 characters.
7. Closing card: score, blessing, inscription.

Answers stay on the device. Refreshing the page starts again.

---

## What you (HR) do

1. Open **staff-invitation-email.html**, copy the plain-text email or send the designed body with the banner (`assets/email-banner.jpg`).
2. Share the play link once with all staff.
3. If asked how to play, send **game-rules.html**. Do not circulate the HR note at the bottom of that page (it names the four table items).

There is no prize, ticket, or draw.

---

## Offline / demo

```bash
cd mid-autumn-lantern-hunt
python3 -m http.server 8765
```

Staff: `http://127.0.0.1:8765/`  
Rules: `http://127.0.0.1:8765/game-rules.html`  
Email: `http://127.0.0.1:8765/staff-invitation-email.html`  
HR: `http://127.0.0.1:8765/#hr`
