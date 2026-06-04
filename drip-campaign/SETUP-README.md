# Seven Peak Capital — Investor Drip Campaign

Production-ready HTML email sequence for GHL (or any ESP). 12-email investor nurture + pre/post-call sequence + 1 CRM re-engagement blast.

The sequence assumes the reader knows nothing about private real estate. Lessons 02 and 03 lay the foundation; lessons 04–11 build the framework; lesson 12 is the ask.

## Start Here

If you're building this in GoHighLevel tomorrow, open these in order:

1. **`DAY-OF-BUILD-RUNBOOK.md`** — sequenced step-by-step build (~2.5 hours)
2. **`WORKFLOW-GUIDE.md`** — architecture and decision logic
3. **`TAGS.txt`** — copy-paste tag list for GHL setup
4. **`UTM-LINK-MAP.md`** — pre-built UTM URLs (optional but recommended)
5. This file — design tokens, voice rules, disclosure language

---

## Files

| # | File | Subject | Preview Text |
|---|------|---------|--------------|
| 01 | `email-01-welcome.html` | You're in. | 11 lessons. About 30 days. Then you decide. |
| 02 | `email-02-plain-english.html` | Plain English: how private real estate actually works | Syndication, LPs, sponsors — translated. |
| 03 | `email-03-why-we-built.html` | Why we built Seven Peak Capital | It started in 2016 with a Lowe's credit card. |
| 04 | `email-04-two-ways.html` | There are only two ways to make money in real estate | Pick one and you're already losing. |
| 05 | `email-05-podcast.html` | If you'd rather listen than read | Peak Profits — conversations with the people moving capital. |
| 06 | `email-06-deal-is-sponsor.html` | The deal is the sponsor | Five questions that filter out 95% of operators. |
| 07 | `email-07-read-a-deal.html` | How to read a deal in 10 minutes | Skip the pitch deck. Go to four numbers. |
| 08 | `email-08-be-the-bank.html` | The boring trade most investors miss | Why being the bank beats owning the building. |
| 09 | `email-09-operator-vs-allocator.html` | Active real estate is a job | The shift from operator to allocator. |
| 10 | `email-10-only-number.html` | The only number that matters | Net worth is a vanity metric. |
| 11 | `email-11-investor-portal.html` | Inside the investor portal | Where investing happens. A short tour. |
| 12 | `email-12-fit-check.html` | The honest fit check | Three options. Pick one. |
| — | `crm-reengagement-blast.html` | It's been a minute. | Income Fund I is open. Here's what changed. |

---

## Cadence

12 emails over ~30 days. Spaced ~2–3 days apart, biased toward weekday mornings.

| Email | Day | Send Time (recipient local) | Notes |
|-------|-----|-----------------------------|-------|
| 01 — Welcome | 0 (immediate) | within 5 min of opt-in | Tag `drip-investor-active` |
| 02 — Plain English | +2 | 8:00 AM Tuesday | Foundation — long-form, save-worthy |
| 03 — Why we built 7P | +5 | 8:00 AM Friday | Founder story |
| 04 — Two ways to make money | +8 | 8:00 AM Monday | First framework |
| 05 — Peak Profits Podcast | +11 | 8:00 AM Thursday | Light send — content drop |
| 06 — Deal is the sponsor | +14 | 8:00 AM Sunday | Sponsor diligence |
| 07 — Read a deal in 10 min | +17 | 8:00 AM Wednesday | Underwriting basics |
| 08 — Be the bank | +20 | 8:00 AM Saturday | Income Fund I introduction |
| 09 — Operator vs. allocator | +23 | 8:00 AM Tuesday | Mindset shift |
| 10 — Only number that matters | +26 | 8:00 AM Friday | Cash flow framing |
| 11 — Investor portal | +28 | 8:00 AM Sunday | Operational preview |
| 12 — Fit check | +30 | 8:00 AM Tuesday | Tag `drip-investor-completed` |

CRM blast: separate one-time send to dormant list (no opens in 90+ days). Send Tuesday or Wednesday, 9:00 AM recipient local.

---

## Sequence Logic

The first three emails do specific jobs:

01. **Welcome** — Sets the curriculum and the no-pitch promise. Earns the open rate of every subsequent email.
02. **Plain English** — Defines every term the next 10 emails will use (LP, GP, syndication, pref, distribution, 506(c), accredited). This is the licensing email. Once it's read, every later email can use jargon without breaking.
03. **Why we built 7P** — Bryan's 2016 → 2023 arc. Establishes credibility through specificity, not credentials.

The middle eight emails build frameworks. The last email asks.

---

## Exit Conditions

Pull contact from drip immediately if any of the following:

- ✔️ Books a call (any rep on the team)
- ✔️ Joins the Income Fund I waitlist
- ✔️ Replies to any email in the sequence
- ✔️ Tagged `investor-active` or `investor-committed` from another workflow
- ✔️ Marks email as spam or unsubscribes
- ✔️ Creates a Cashflow Portal account

Set up exit triggers in GHL Workflow → Trigger → Tag Added / Form Submitted / Email Replied.

---

## Tags Applied

| Tag | When |
|-----|------|
| `drip-investor-active` | On email 01 send |
| `drip-engaged` | If any email in sequence opened OR clicked |
| `drip-clicked-waitlist` | Click on Income Fund I waitlist link (emails 08, 10, 12) |
| `drip-clicked-call` | Click on booking link (emails 01, 06, 09, 11, 12) |
| `drip-clicked-podcast` | Click on Peak Profits link (email 05) |
| `drip-clicked-portal` | Click on Cashflow Portal link (email 11, 12) |
| `drip-investor-completed` | On email 12 send (regardless of engagement) |
| `drip-investor-cold` | Completed sequence, zero opens — segment for re-engagement |

---

## Required Setup In GHL

1. **Upload all 13 HTML files** as email templates (Email Marketing → Templates → New → HTML mode).
2. **Inline images** — currently the template references `https://sevenpeakcapital.com/Seven%20Peak%20Capital%20Logo-02%20(3).png`. Confirm this URL serves the gold wordmark in production. If not, re-upload the logo to a stable CDN path and find/replace.
3. **Booking link** is wired to `https://go.sevenpeakcapital.com/call-with-bryan`. Update if the calendar route changes.
4. **Podcast guest pitch link** in email 05 references `https://go.sevenpeakcapital.com/schedule-peak-profits-podcast`. Confirm live.
5. **Cashflow Portal link** in email 11 references `https://sevenpeakcapital.cashflowportal.com/app`. Confirm live.
6. **Income Fund I waitlist link** in emails 08, 10, 11, 12, and CRM blast references `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b`. This is the offering's waitlist URL inside the portal — confirm it routes correctly when the offering is closed.
6. **`{{unsubscribe_url}}`** merge tag — GHL native. Should resolve automatically. Test on first send.
7. **From name / from address** — recommend `Bryan Morris <bryan@sevenpeakcapital.com>`. Reply-to same.
8. **Plain-text fallback** — GHL auto-generates. Spot-check it on the first send and add manual line breaks if it reads as one wall of text.

---

## Pre-Send QA Checklist

- ✔️ Send a test of each email to your own inbox + one Outlook account + one Gmail account
- ✔️ Open on iPhone and Android — confirm 600px container collapses cleanly
- ✔️ Click every link — confirm UTM tags fire (recommend appending `?utm_source=drip&utm_medium=email&utm_campaign=investor-30d&utm_content=email-NN`)
- ✔️ Confirm logo loads (this is the most common failure point — image hosting)
- ✔️ Confirm `Lesson 0X / 12` counter is correct in each email
- ✔️ Confirm compliance footer is present on all 13
- ✔️ Confirm `{{unsubscribe_url}}` is replaced by a real URL in test send
- ✔️ Confirm Email 05 podcast topics match what's actually published on the site (currently generic placeholders)

---

## Voice Notes (locked)

- Direct. Confident. No hype. No exclamation points in body copy.
- White-space heavy. Short paragraphs.
- ✔️ checkmarks (not ✅)
- Sign-off: "— Bryan" in italic display, then "Founder & Managing Partner" in small caps mono
- Compliance line on every email: *"Accredited investors only. Not an offer to sell securities."*
- Assume the reader knows nothing. Define every term on first use (covered systemically in Email 02).

---

## Income Fund I — Locked Disclosure Language

The first vintage of Income Fund I is closed to new capital. The next vintage is expected to open in 2026. The drip campaign points all interested investors to the **waitlist** in the Cashflow Portal — waitlist members get first allocation at the next opening.

Use this exact language wherever the Fund is referenced (consistent across emails 08, 10, 11, 12, and CRM blast):

- **Status:** First vintage closed to new capital. Next vintage opening 2026.
- **Waitlist URL:** `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b`
- **Preferred return (prior vintage terms):** 10–12%
- **Profit split above pref:** 50/50
- **Target net annualized return to LPs:** 14–15%
- **Distribution frequency:** Quarterly
- **Minimum:** $50K
- **Structure:** Rule 506(c), Wyoming LLC
- **Accreditation:** Verified through Parallel Markets

**Important:** Terms shown above reflect the prior vintage. Always disclose that the next vintage's final terms will be confirmed at reopening. The drip language already includes this caveat.

---

## Design Tokens (matches sevenpeakcapital.com)

```
Background       #07090E
Card             #0F141D
Inset            #0A0D14
Gold             #C09A2B
Gold light       #D4B149
Cream            #E8DCC2
Text hero        #FFFFFF
Text primary     #EDEFF2
Text secondary   #9097A3
Border           rgba(255,255,255,0.07)

Display font     Instrument Serif
Body font        Outfit (300/400/500)
Label / mono     JetBrains Mono, 11px, 3px tracking, gold
```

Buttons: gold bg, navy text, 13px, uppercase, 1.5px tracking, 2px corner radius.

Gold hairline divider: 40px × 1px, used after every label.

---

## Open Items (your call)

1. **Calendar links per rep.** Currently all CTAs route to Bryan's calendar. If you want to round-robin between Bryan and Chris, swap to a GHL round-robin link or add Chris's path to alternating emails.
2. **Hero images.** Templates are intentionally lean (no hero photos in body). If you want Azur / Grand Riviera / Preserve photography in emails 07, 08, or 12, those assets are already on the site and easy to drop in.
3. **A/B test on email 01.** Subject line `You're in.` is the strong hook. Alternate to test: `What we send for the next 30 days.`
4. **Sequence trigger.** Recommend triggering the drip from the contact form on `/contact.html` AND from the Income Fund inquiry. Two separate entries in GHL.
5. **Podcast topics.** Email 05 currently lists generic episode topics as placeholders. Replace with actual published episode titles before send.

## Phase 2 Enhancements (Later)

These add real value but aren't required for tomorrow's launch:

1. **Granola → AI Personalized Recap layer.** The auto-sent post-call email is intentionally generic (resources + next steps, no recap). For high-priority leads where you want a personalized recap on top, send manually from your inbox using Granola's transcript. Phase 2 build: Granola → Claude API extracts 3–5 bullets → drafts a personalized follow-up that lands in your inbox for one-click send. This sits ON TOP of the auto-sent post-call, not replacing it.

2. **Re-engagement sequence for `drip-investor-cold` segment.** Anyone who finished the 12-email drip with zero opens or clicks gets the cold tag. Build a second 3-email sequence 60 days after they finish — different angle, different sender (maybe Chris instead of Bryan), one final ask before they go fully dark.

3. **LP-only newsletter.** Once you have committed investors in Income Fund I, build a separate monthly or quarterly newsletter for them. Different list, different content (deal updates, market commentary, K-1 reminders). Not a drip — broadcasts.

4. **Round-robin call routing.** When Chris is added as a second touchpoint, route booked calls between you two by territory, AUM size, or load balancing. GHL has native round-robin calendars.
