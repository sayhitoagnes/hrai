# HKAC · 月餅謎局 · 燈謎 / The Mooncake Puzzle

Voluntary Mid-Autumn **team game** for Hong Kong Arts Centre staff. About **10 minutes**. Teams of **3–5**. Register with Agnes by **22 September**; game link to representatives on **23 September**; score screenshot due **24 September**. Highest score (faster finish if tied) wins a **$500 cash coupon**.

**Play (for team representatives, from 23 Sep):** [Open the game](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-lantern-rules-email-7d8a/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**Staff invitation email:** [staff-invitation-email.html](staff-invitation-email.html) · [HKAC-Mid-Autumn-Staff-Invitation.txt](HKAC-Mid-Autumn-Staff-Invitation.txt) · [HKAC-Mid-Autumn-Staff-Invitation.docx](HKAC-Mid-Autumn-Staff-Invitation.docx)

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

Refreshing the page starts again. Competing teams email a closing-card screenshot to HR.

---

## What you (HR) do

1. Send **staff-invitation-email.html** (or the Word/txt file). Do not include the game link in this announcement.
2. Collect team lists by **22 September** at agnwong@hkac.org.hk.
3. On **23 September**, send the play link only to team representatives.
4. On **24 September**, collect one screenshot per team. Highest score wins $500; a tie is decided by the shorter finish.
5. If asked how to play, send **game-rules.html**. Do not circulate the HR note at the bottom of that page.

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
