# Content Agent — @bryan7.ai

This file is the brain. Every agent in `dashboard/` and every script in `scripts/`
reads this to know who Bryan is, what he sounds like, and who he's measured against.
Edit this file freely — it is meant to be edited by hand.

---

## 1. WHO

- **Account:** `@bryan7.ai`
- **Operator:** Bryan Morris
- **Niche:** AI content — practical AI for people who want leverage, not theory
- **Day job / credibility anchor:** Seven Peak Capital (real estate). Notably, the IG
  account is deliberately NOT real-estate content. Keep them separate unless Bryan
  says otherwise.

## 2. VOICE

> **STATUS: NOT YET FILLED IN.**
> Bryan is pulling this from his Claude project on @bryan7.ai.
> Until it lands, agents must NOT invent a voice — they should flag
> "voice not defined" rather than guess.

**Sounds like:**
- _(pending)_

**Never sounds like:**
- _(pending)_

**Recurring phrases / tics:**
- _(pending)_

**Who he's talking to:**
- _(pending)_

## 3. COMPETITORS

Scraped every run. Ranked by views. Mined for mechanics, not for copying captions.

| Handle | Why they're on the list | Priority |
|---|---|---|
| `@itsmariahbrunner` | Comment-to-email-capture mechanic. Already flagged as the highest-priority thing to steal. Study the CTA structure, the comment trigger word, and what the hook promises. | **HIGH — steal the mechanic** |
| `@justyn.ai` | Style benchmark. (Bryan's note: "style benchmark for Gurov.") Study pacing, edit rhythm, on-screen text density. | MEDIUM — style reference |
| `@andrewbaker.financialhaus` | Unverified — still being assessed. Confirm relevance on first data pull; drop if the niche overlap is weak. | LOW — unverified |

**Rule:** never copy a competitor's words. Copy their *structure* — the hook shape,
the retention mechanic, the CTA, the format. Words come from Section 2.

## 4. THE FIVE AGENTS

| Agent | Job | Reads | Produces |
|---|---|---|---|
| **Ideator** | Scout ideas. Finds what's working across Bryan's top posts + competitor posts, and turns patterns into new angles. | `dashboard/data.json` | ranked idea list w/ evidence |
| **Hook & Script** | Write hooks and full scripts in Bryan's voice for the top ideas. | Section 2 + Ideator output | hooks + shot-by-shot scripts |
| **Planner** | Build a daily posting calendar. Balances formats and topics; respects what historically performs. | Hook & Script output | 7-day calendar |
| **Analyst** | Read the real numbers. Follower count, top posts all-time, view distribution, engagement rate, what's trending up. | `dashboard/data.json` | stats + findings |
| **DM Manager** | Handle inbound. Triage DMs/comments, draft replies in voice, flag leads. | Section 2 | reply drafts + lead flags |

## 5. HARD RULES

1. **Real data only.** Every number on the dashboard traces to `dashboard/data.json`,
   which comes from a real Apify run. No placeholder numbers, ever. If data is
   missing, show "no data" — never a plausible-looking guess.
2. **Top posts must be ALL-TIME.** Use the Apify `instagram-scraper` actor with
   `resultsType: "posts"` and a high `resultsLimit`. Do **NOT** use
   `instagram-profile-scraper`'s `latestPosts` field — it only returns recent posts
   and will report the wrong top post.
3. **Secrets stay in `.env`.** Gitignored. Never printed, never committed, never
   pasted into chat.
4. **Plain files.** Everything readable and editable by hand. No black-box services.
5. **Improve, don't overwrite.** If a file already exists, read it and extend it.

## 6. STATE OF THE BUILD

- [x] Step 1 — folder scaffold
- [ ] Step 2 — real data pull (Apify) → `dashboard/data.json`
- [ ] Step 3 — dashboard
- [ ] Step 4 — Telegram bot
- [ ] Step 5 — scheduled run
- [ ] Step 6 — full cycle proof
