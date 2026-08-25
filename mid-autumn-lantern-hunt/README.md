# HKAC · 賞月室 / The Viewing Room

Async Mid-Autumn activity for about **70 remote staff** of **Hong Kong Arts Centre**. Average age ~**30**. Gender mixed. People do not meet in person.

The activity is a **viewing-room lantern sequence** (賞月室), not a carnival game. It is modelled on how Hong Kong companies actually run online Mid-Autumn: a short 猜燈謎, then a lucky draw among people who finish.

**Play (staff):** [Open the viewing room](https://htmlpreview.github.io/?https://github.com/sayhitoagnes/hrai/blob/cursor/hkac-mid-autumn-lantern-hunt-1baf/mid-autumn-lantern-hunt/index.html)

GitHub’s file page shows source code. Always use the htmlpreview link, or open `index.html` locally.

**HR desk:** footer → *HR desk · lucky draw*, or add `#hr` to the same URL.

---

## What Hong Kong companies actually play (research)

This is **not** a children’s tap-game. Hong Kong offices, and the H5 templates they reuse, still treat Mid-Autumn as **猜燈謎** plus a **lucky draw**. No app. A link, a few adult riddles, a ticket.

| Who | What they actually ran | What we took |
| --- | --- | --- |
| ASK IT Limited (HK SME, 2024) | Office **燈謎** whose answers were **colleagues’ Chinese names** — adult, in-group, not folklore-for-kids. [Source](https://askit.com.hk/lantern-riddle-party/) | Tone: wit for grown colleagues, not a carnival |
| Midland Realty (staff, 2020) | 「中秋競猜燈謎慶團圓」— staff race the riddles; fastest with ≥3 correct get seasonal gifts. [Source](https://www.midland.com.hk/news/group-news/20201002.html) | Short closed-set 燈謎, prize after playing |
| Midland IC&I (public, 2023) | Visual **Hong Kong street-name** 燈謎 + raffle among correct answers | Local adult cryptic play (we kept the *register*, not the street quiz) |
| Poly Joy Club (2023) | **Write your own 燈謎** for a mooncake draw | The create layer: **題燈** (one inscription of your own) |
| Corporate H5 (eqxiu / 凡科 etc.) | 4–8 燈謎 on a phone page; finish (or all-correct) → lucky draw | Async link + email ticket, no Zoom, no kit |
| Cathay Pacific (consumer CRM) | Mooncake **puzzle + raffle**, sent by email | Completing is the ticket — not a ranked exam |

In-person lantern-making, fruit boxes, and scavenger hunts exist. They need a room or a kit. They do not fit **70 people who will not meet**, run **only by email**.

**Designed for staff ~30 at an arts centre:** gallery / salon (ink, bone, gold hairline), the stranger facts of the night (mooncake cipher, jade-rabbit elixir, Tai Hang fire dragon), one inscription, a greeting you may email to someone you love, HKAC blessing. Not punch-the-sun, not whack-a-mole, not intern comics.

---

## What staff do (about 6 minutes)

1. Enter name → **Enter the viewing room**.
2. Light **one** lantern.
3. Four lanterns:
   - **I · The slip in the cake** — folk telling: mooncakes hid the **date of an uprising**
   - **II · The rabbit’s night work** — the jade rabbit **pounds the elixir**, it does not bake
   - **III · A Hong Kong night** — Tai Hang, Causeway Bay: **fire-dragon dance** for more than a century
   - **IV · Inscription** — write ≤ 40 characters for someone you would rather be with. Prompts: 但願人長久 / 千里共嬋娟 / 燈火未闌人未散
4. Closing card: **HKAC blessing**, their inscription, ticket `HKAC-MAF-…`
5. **Email a Mid-Autumn greeting** to someone they love (opens their own mail app; HR never sees that address).
6. Separately, **email the lucky ticket to HR**. Completing is enough. The three closed lanterns are a salon, not an exam.

---

## What you (HR) do

### 1. Before you send

Open **HR desk**. Fill mailbox, prize, deadline (saved in this browser). **Copy invitation**.

Inbox search: `[HKAC Mid-Autumn]`

### 2. Invitation (edit dates)

**Subject:** `[HKAC Mid-Autumn] 賞月室 — light a lantern, write one line`

Paste from **Copy invitation**.

### 3. After the deadline

Paste names from emails → **Draw one winner**. Completers only, equal chance.

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
