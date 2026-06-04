# GHL Workflow Build Guide
## Seven Peak Capital — Investor Drip Campaign

How to wire the 12-email drip into GoHighLevel so it triggers automatically. ~30 minutes to build the first time.

---

## TL;DR

Build **two** workflows in GHL — not one. People who book a call should not receive the same sequence as cold form fills. Different intent, different treatment.

| Workflow | Audience | Length | Trigger |
|----------|----------|--------|---------|
| **W1 — Cold Lead Drip** | Form fills, manual adds, cold inbound | 12 emails / 30 days | Tag added or form submitted |
| **W2 — Booked Call Sequence** | Anyone who books any call | 4 emails (pre + post) | Calendar booking event |

Both workflows share an exit-condition system so the same person never gets double-emailed.

---

## Tags to Create First

Build these 9 tags in GHL → Settings → Tags **before** you wire any workflow. Trying to build the workflow without the tags in place will cause errors.

```
drip-investor-active        ← in the cold drip right now
drip-engaged                ← opened or clicked any drip email
drip-clicked-waitlist       ← clicked the Income Fund waitlist link
drip-clicked-call           ← clicked any booking link
drip-clicked-podcast        ← clicked the Peak Profits link
drip-clicked-portal         ← clicked the Cashflow Portal link
drip-investor-completed     ← finished the 12-email drip
booked-call                 ← booked any call (Bryan, Chris, podcast)
investor-committed          ← wired capital / on portal as accredited
```

---

## Workflow 1 — Cold Lead Drip

### Triggers (any of these enrolls the contact)

1. **Form Submitted** → choose your `/contact.html` form
2. **Tag Added** → `drip-investor-active`
3. **Tag Added** → `manual-add-cold` (for LinkedIn / event captures you enter manually)

### Entry Conditions (filter — must pass to enter)

- ✔️ Does **NOT** have tag `booked-call`
- ✔️ Does **NOT** have tag `investor-committed`
- ✔️ Does **NOT** have tag `drip-investor-active` *(prevents re-entry mid-flight)*

If any condition fails, the contact is silently skipped — no error, no double email.

### Workflow Steps

| Step | Action | Detail |
|------|--------|--------|
| 1 | Add Tag | `drip-investor-active` |
| 2 | Send Email | Email 01 — Welcome (immediate) |
| 3 | Wait | 2 days |
| 4 | Send Email | Email 02 — Plain English |
| 5 | Wait | 3 days |
| 6 | Send Email | Email 03 — Why we built 7P |
| 7 | Wait | 3 days |
| 8 | Send Email | Email 04 — Two ways to make money |
| 9 | Wait | 3 days |
| 10 | Send Email | Email 05 — Peak Profits Podcast |
| 11 | Wait | 3 days |
| 12 | Send Email | Email 06 — Deal is the sponsor |
| 13 | Wait | 3 days |
| 14 | Send Email | Email 07 — Read a deal in 10 minutes |
| 15 | Wait | 3 days |
| 16 | Send Email | Email 08 — Be the bank |
| 17 | Wait | 3 days |
| 18 | Send Email | Email 09 — Operator vs. allocator |
| 19 | Wait | 3 days |
| 20 | Send Email | Email 10 — Only number that matters |
| 21 | Wait | 2 days |
| 22 | Send Email | Email 11 — Investor portal |
| 23 | Wait | 2 days |
| 24 | Send Email | Email 12 — Honest fit check |
| 25 | Add Tag | `drip-investor-completed` |
| 26 | Remove Tag | `drip-investor-active` |
| 27 | End |  |

### Exit Conditions (kills the drip immediately)

In GHL → Workflow Settings → "Drop Off Goal" — set these so the workflow exits the moment any of them fires:

- ✔️ Tag added: `booked-call`
- ✔️ Tag added: `investor-committed`
- ✔️ Form submitted: any waitlist or memorandum form
- ✔️ Email reply received
- ✔️ Unsubscribe

When any of these fires, the contact stops receiving any further drip emails. Their tags update automatically in their contact record.

---

## Workflow 2 — Booked Call Sequence

**Design note:** The post-call email is now **auto-sendable** — the recap-bullets section was removed so it's a clean evergreen "thanks, here are the resources" email that lands well for every call without manual edits. If you want to send a personalized recap on top of the auto-send, do that separately from your inbox using your Granola notes.

### Trigger

- **Appointment Booked** → choose all three calendars (Bryan, Chris, Peak Profits)

### Workflow Steps

| Step | Action | Detail |
|------|--------|--------|
| 1 | Add Tag | `booked-call` |
| 2 | Remove from Workflow | W1 (Cold Lead Drip) — instant exit |
| 3 | Wait until | 24 hours before appointment |
| 4 | Send Email | **Pre-Call**: `SPC-Call-PreCall` template (confirmation + the one question) |
| 5 | Wait until | 4 hours after appointment |
| 6 | Send Email | **Post-Call**: `SPC-Call-PostCall` template (resources + next steps) |
| 7 | Wait | 7 days |
| 8 | If/Else | Has tag `investor-committed` OR `drip-clicked-waitlist`? |
| 9 | If YES | End workflow |
| 10 | If NO | Add Tag `drip-investor-active` (re-enrolls them in W1 starting at email 01 — they get the full education sequence) |
| 11 | End |  |

### Pre-Call Email — Quick Template

Subject: *Confirmed — call with Bryan tomorrow*

```
Looking forward to our conversation tomorrow.

Before we hop on, one question worth thinking about:
What does your investment portfolio look like today,
and what's missing?

Most calls go better when both sides have a starting point.

— Bryan
```

### Phase 2 (Later) — Granola → Auto Post-Call

When you're ready to automate the personalized recap, the architecture is:

1. **Granola records the call** and produces a transcript
2. **Webhook or Zapier** picks up the transcript when the meeting ends
3. **AI summarizer** (Claude API, or a GHL native AI block if available) extracts 3–5 bullet points
4. **Inject the bullets** into `SPC-Call-PostCall` template via GHL custom fields
5. **Auto-send** 4 hours after the appointment

That's a build for a later sprint. For tomorrow, manual is the right call.

---

## Manual Entry — 3 Ways

You'll capture emails outside the website all the time — LinkedIn DMs, conference badges, podcast guests, referrals. Three options:

### Option A — Tag-driven (cleanest)

1. Open the contact in GHL
2. Add tag `manual-add-cold`
3. Drip starts automatically (W1 trigger fires on tag added)

### Option B — Bulk import

1. Build a CSV with columns: `email, first_name, last_name, source`
2. GHL → Contacts → Import → upload CSV
3. During import, apply tag `manual-add-cold` to all rows
4. All contacts enroll in W1 simultaneously

### Option C — Form-driven (for events)

Build a single GHL form titled "Manual Capture" with fields for email + source. Use it on your phone at events. Form submission auto-tags `manual-add-cold` and triggers W1.

---

## What Happens If Someone Re-Triggers?

The entry conditions on W1 prevent re-enrollment automatically. Concrete scenarios:

| Scenario | What happens |
|----------|--------------|
| Someone fills the contact form, then books a call 3 days later | W1 starts → call booking fires `booked-call` tag → W1 exits via Drop Off Goal → W2 starts |
| Someone finishes the 30-day drip (`drip-investor-completed`) and fills the form again | W1 trigger fires, but entry condition blocks them (already has `drip-investor-active` history). No re-send. |
| Someone books a call, no-shows, and re-fills the contact form | W2 ended due to no follow-up → `drip-investor-active` was added → if they fill form again, no duplicate enrollment |

**The rule:** A contact only enters W1 once in their lifetime. If you want to re-engage someone who finished, that's what the CRM Re-engagement Blast is for — send it manually as a one-off broadcast.

---

## Pre-Launch Checklist

Before flipping the workflows ON in production:

✔️ All 12 email templates uploaded as GHL templates and named clearly (`SPC-Drip-01-Welcome` through `SPC-Drip-12-FitCheck`)

✔️ All 9 tags created in GHL → Settings → Tags

✔️ Both workflows built, but set to **Draft** (not Published)

✔️ Test enrollment 1: enroll yourself via the contact form. Confirm Email 01 arrives within 5 minutes. Manually advance through the wait steps to confirm each email renders correctly.

✔️ Test enrollment 2: book a call on your own calendar from a different email. Confirm pre/post-call emails fire on schedule.

✔️ Test exit: while in W1 from test 1, manually add tag `booked-call`. Confirm the workflow exits immediately and no further emails send.

✔️ UTM tags appended to every CTA link: `?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-NN`

✔️ From address verified: `bryan@sevenpeakcapital.com`

✔️ Reply-to address: `bryan@sevenpeakcapital.com` (so replies hit your real inbox, not GHL's no-reply)

✔️ Unsubscribe link tested — clicks should remove `drip-investor-active` and add `unsubscribed`

✔️ Domain authentication: SPF, DKIM, DMARC all green in GHL → Settings → Email Services

---

## What Each Click Should Tag

These are the four clicks that matter for downstream segmentation. Wire them as Workflow Triggers → "Email Link Clicked":

| Link clicked | Tag to apply | What it tells you |
|--------------|--------------|-------------------|
| Income Fund waitlist URL | `drip-clicked-waitlist` | Hot lead — manually reach out within 24 hours |
| Booking calendar link | `drip-clicked-call` | Intent to talk — if they don't book, send a manual follow-up in 3 days |
| Peak Profits podcast | `drip-clicked-podcast` | Content engagement — softer signal but worth tracking |
| Cashflow Portal | `drip-clicked-portal` | Operational curiosity — likely close to deciding |

After ~30 days of data, you'll see which emails drive which clicks. That's where the optimization conversation starts.

---

## Common Gotchas

**1. The drip fires before your domain is warmed.** If `bryan@sevenpeakcapital.com` is a brand-new sending address, GHL/Mailgun will throttle deliverability. Send 5–10 manual emails from the address first, then start the drip on a small test list (50 contacts) before scaling.

**2. The booking calendar isn't connected to GHL.** If your `go.sevenpeakcapital.com` calendar is GHL-native, the appointment trigger works automatically. If it routes to Calendly, you need a Zapier or webhook bridge to fire the trigger. Confirm before going live.

**3. Tag-add triggers fire on import.** When you bulk-import a list with `manual-add-cold` already applied in the CSV, GHL fires the trigger for every row at once. If your list is 500 people, that's 500 emails in 5 minutes — flagged as spam by inbox providers. Either import without the tag and apply it in batches, or upload during off-hours and watch deliverability.

**4. Reply-detection is noisy.** GHL counts auto-replies and out-of-office messages as "email reply received." Test the exit goal carefully so vacation responders don't get pulled out of the drip permanently.

---

## When You're Ready to Optimize (After 30 Days)

Pull these metrics from GHL → Reporting:

- Open rate per email (target: 40%+ for a clean accredited list)
- Click rate per email (target: 4%+)
- Drip → call conversion (target: 8–12% over the 30-day window)
- Unsubscribe rate per email (alarm: anything above 0.5% on a single send)

The two emails most likely to need re-writing are **02 (Plain English)** because it's long and **08 (Be the bank)** because it's the first time the fund is mentioned. Track them closely.
