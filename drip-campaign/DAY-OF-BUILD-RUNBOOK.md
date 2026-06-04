# Tomorrow's Build — Hour-by-Hour Runbook
## Seven Peak Capital Investor Drip in GoHighLevel

End-to-end build from cold start to first live test. ~2.5 hours of focused work. Execute in order.

---

## Before You Sit Down

Have these tabs open:

✔️ GHL admin: `app.gohighlevel.com`
✔️ This drip-campaign folder open in Finder
✔️ A test email account that's NOT `bryan@sevenpeakcapital.com` (use a personal Gmail or a colleague's)
✔️ Phone with the same Gmail account loaded — for mobile QA

---

## PHASE 1 — Domain & Sender Setup
**Time: 15 minutes**

The drip won't deliver if your sending domain isn't authenticated. Do this first.

### Steps in GHL

1. **Settings → Email Services → Dedicated Domain**
2. Confirm `sevenpeakcapital.com` is connected. If not, add it.
3. Verify all three records show green:
   ✔️ SPF
   ✔️ DKIM
   ✔️ DMARC
4. **Settings → Business Profile** → set the From name to `Bryan Morris` and From email to `bryan@sevenpeakcapital.com`
5. Reply-to address: same as From
6. **Email warmup check** — if `bryan@sevenpeakcapital.com` is brand-new in GHL, send 5 plain manual emails from inside GHL to friends/family today. Don't run the drip on a fresh sending address against a 500-person list — you'll get throttled or spam-flagged.

### If anything is red

Don't proceed. Domain auth has to be 100% green or every email lands in spam. Pause the build, fix DNS records at your registrar (Squarespace, Cloudflare, wherever), wait 30 minutes for propagation, retry.

---

## PHASE 2 — Create All Tags
**Time: 5 minutes**

### Steps in GHL

**Settings → Tags → New Tag** — create each of these:

```
drip-investor-active
drip-engaged
drip-clicked-waitlist
drip-clicked-call
drip-clicked-podcast
drip-clicked-portal
drip-investor-completed
drip-investor-cold
booked-call
investor-committed
manual-add-cold
unsubscribed
```

12 tags total. Takes 5 minutes. Don't skip.

---

## PHASE 3 — Upload Email Templates
**Time: 45 minutes**

### Steps in GHL

For each of the 14 email files in `/drip-campaign/`:

1. **Email Marketing → Templates → New Template → Custom HTML / Code**
2. Name the template using this exact format:
3. Open the corresponding `.html` file from this folder, copy the **entire contents** (Cmd+A, Cmd+C)
4. Paste into the GHL HTML editor
5. Save

### Template Naming Convention

Use this exact pattern so Workflow 1 setup goes faster:

| File | GHL Template Name |
|------|-------------------|
| `email-01-welcome.html` | `SPC-Drip-01-Welcome` |
| `email-02-plain-english.html` | `SPC-Drip-02-PlainEnglish` |
| `email-03-why-we-built.html` | `SPC-Drip-03-WhyWeBuiltSPC` |
| `email-04-two-ways.html` | `SPC-Drip-04-TwoWays` |
| `email-05-podcast.html` | `SPC-Drip-05-Podcast` |
| `email-06-deal-is-sponsor.html` | `SPC-Drip-06-DealIsSponsor` |
| `email-07-read-a-deal.html` | `SPC-Drip-07-ReadADeal` |
| `email-08-be-the-bank.html` | `SPC-Drip-08-BeTheBank` |
| `email-09-operator-vs-allocator.html` | `SPC-Drip-09-OperatorVsAllocator` |
| `email-10-only-number.html` | `SPC-Drip-10-OnlyNumber` |
| `email-11-investor-portal.html` | `SPC-Drip-11-InvestorPortal` |
| `email-12-fit-check.html` | `SPC-Drip-12-FitCheck` |
| `email-pre-call.html` | `SPC-Call-PreCall` |
| `email-post-call.html` | `SPC-Call-PostCall` |
| `crm-reengagement-blast.html` | `SPC-Reengagement-Blast` |

### Subject Lines & Preview Text

Set these inside each template's send settings, **not** in the HTML:

| Template | Subject | Preview |
|----------|---------|---------|
| 01 | `You're in.` | `11 lessons. About 30 days. Then you decide.` |
| 02 | `Plain English: how private real estate actually works` | `Syndication, LPs, sponsors — translated.` |
| 03 | `Why we built Seven Peak Capital` | `It started in 2016 with a Lowe's credit card.` |
| 04 | `There are only two ways to make money in real estate` | `Pick one and you're already losing.` |
| 05 | `If you'd rather listen than read` | `Peak Profits — conversations with the people moving capital.` |
| 06 | `The deal is the sponsor` | `Five questions that filter out 95% of operators.` |
| 07 | `How to read a deal in 10 minutes` | `Skip the pitch deck. Go to four numbers.` |
| 08 | `The boring trade most investors miss` | `Why being the bank beats owning the building.` |
| 09 | `Active real estate is a job` | `The shift from operator to allocator.` |
| 10 | `The only number that matters` | `Net worth is a vanity metric.` |
| 11 | `Inside the investor portal` | `Where investing happens. A short tour.` |
| 12 | `The honest fit check` | `Three options. Pick one.` |
| Pre-call | `Confirmed — call {{appointment.start_date_time}}` | `One question worth thinking about before we hop on.` |
| Post-call | `Notes from our call` | `Recap, resources, and what's next.` |
| Reengagement | `It's been a minute.` | `Income Fund I waitlist is open for the 2026 vintage.` |

### Quick Test Each Upload

After saving each template, click **Preview** in GHL. Confirm:
- ✔️ Logo loads at the top (most common failure point)
- ✔️ All gold accents render
- ✔️ Body text isn't mangled
- ✔️ CTA button is gold with dark text

If logo doesn't load: confirm `https://sevenpeakcapital.com/Seven%20Peak%20Capital%20Logo-02%20(3).png` resolves in a browser. If it doesn't, host the logo on a clean URL (e.g., `https://sevenpeakcapital.com/img/logo.png`) and find/replace inside each template.

---

## PHASE 4 — Build Workflow 1: Cold Lead Drip
**Time: 30 minutes**

### Steps in GHL

1. **Automation → Workflows → New Workflow → Start from Scratch**
2. Name: `SPC — Cold Lead Drip (W1)`
3. **Add Trigger** (you'll add three triggers, all on the same workflow):

   **Trigger 1 — Form Submitted**
   - Form: select your `/contact.html` form (or whichever GHL form receives contact submissions)
   - Filter: none

   **Trigger 2 — Tag Added**
   - Tag: `drip-investor-active`

   **Trigger 3 — Tag Added**
   - Tag: `manual-add-cold`

4. **Workflow Settings → Re-enrollment** → set to "Allow re-entry: NO" (prevents duplicates)
5. **Workflow Settings → Drop Off Goal** → set goals so the workflow exits when any of these fires:
   - Tag added: `booked-call`
   - Tag added: `investor-committed`
   - Tag added: `unsubscribed`
   - Email reply received

6. **Build the action sequence** (use the Add Action button repeatedly):

| Step | Action Type | Configuration |
|------|-------------|---------------|
| 1 | Add Tag | `drip-investor-active` |
| 2 | Send Email | Template: `SPC-Drip-01-Welcome` |
| 3 | Wait | 2 days |
| 4 | Send Email | `SPC-Drip-02-PlainEnglish` |
| 5 | Wait | 3 days |
| 6 | Send Email | `SPC-Drip-03-WhyWeBuiltSPC` |
| 7 | Wait | 3 days |
| 8 | Send Email | `SPC-Drip-04-TwoWays` |
| 9 | Wait | 3 days |
| 10 | Send Email | `SPC-Drip-05-Podcast` |
| 11 | Wait | 3 days |
| 12 | Send Email | `SPC-Drip-06-DealIsSponsor` |
| 13 | Wait | 3 days |
| 14 | Send Email | `SPC-Drip-07-ReadADeal` |
| 15 | Wait | 3 days |
| 16 | Send Email | `SPC-Drip-08-BeTheBank` |
| 17 | Wait | 3 days |
| 18 | Send Email | `SPC-Drip-09-OperatorVsAllocator` |
| 19 | Wait | 3 days |
| 20 | Send Email | `SPC-Drip-10-OnlyNumber` |
| 21 | Wait | 2 days |
| 22 | Send Email | `SPC-Drip-11-InvestorPortal` |
| 23 | Wait | 2 days |
| 24 | Send Email | `SPC-Drip-12-FitCheck` |
| 25 | Add Tag | `drip-investor-completed` |
| 26 | Remove Tag | `drip-investor-active` |

7. **Save as Draft** (do NOT publish yet)

---

## PHASE 5 — Build Workflow 2: Booked Call Sequence
**Time: 15 minutes**

Both pre-call and post-call emails auto-send. The post-call template was rewritten to remove the manual-fill recap section — it's now a clean evergreen "thanks for the call, here are the resources" email that's safe to send to every booked call without customization. If you want to send a personalized recap on top of the auto-send, do that separately from your own inbox using your Granola notes.

### Steps in GHL

1. **Automation → Workflows → New Workflow → Start from Scratch**
2. Name: `SPC — Booked Call (W2)`
3. **Add Trigger — Appointment Booked**
   - Calendar: select all three (Bryan, Chris, Peak Profits)

4. **Workflow Settings → Re-enrollment** → "Allow re-entry: YES" (someone might book a follow-up call later)

5. **Build the action sequence:**

| Step | Action Type | Configuration |
|------|-------------|---------------|
| 1 | Add Tag | `booked-call` |
| 2 | Remove from Workflow | `SPC — Cold Lead Drip (W1)` (removes them from the cold drip immediately) |
| 3 | Wait until | 24 hours before appointment |
| 4 | Send Email | Template: `SPC-Call-PreCall` |
| 5 | Wait until | 4 hours after appointment |
| 6 | Send Email | Template: `SPC-Call-PostCall` |
| 7 | Wait | 7 days |
| 8 | If/Else Condition | Has tag `investor-committed` OR has tag `drip-clicked-waitlist`? |
| 9 | If YES | End Workflow |
| 10 | If NO | Add Tag `drip-investor-active` (re-enrolls them in W1 from email 01 — they get the full education sequence) |

6. **Save as Draft**

---

## PHASE 6 — Build Click Tracking
**Time: 10 minutes**

These track which CTAs each contact engages with. Wire them as separate small workflows or as triggers on the main workflows — either works.

Create 4 mini-workflows under **Automation → Workflows**:

### Click Tracker A — Waitlist Clicks
- Trigger: Email Link Clicked → URL contains `cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b`
- Action: Add Tag `drip-clicked-waitlist`
- Action: Send Internal Notification → email yourself: "Hot lead — {{contact.name}} clicked the waitlist"

### Click Tracker B — Booking Clicks
- Trigger: Email Link Clicked → URL contains `go.sevenpeakcapital.com/call-with-bryan`
- Action: Add Tag `drip-clicked-call`

### Click Tracker C — Podcast Clicks
- Trigger: Email Link Clicked → URL contains `sevenpeakcapital.com/podcast.html`
- Action: Add Tag `drip-clicked-podcast`

### Click Tracker D — Portal Clicks
- Trigger: Email Link Clicked → URL contains `cashflowportal.com/app`
- Action: Add Tag `drip-clicked-portal`

---

## PHASE 7 — Test Enrollment (CRITICAL)
**Time: 30 minutes**

Do NOT skip this. Test before flipping to production.

### Test 1 — Cold Drip (Form Submission)

1. Open `/contact.html` in incognito mode
2. Fill out the form using your test Gmail
3. Submit
4. Check your test Gmail inbox within 5 minutes
5. ✔️ Email 01 should arrive
6. Open it on **desktop** (Gmail web)
   - Logo loads
   - All gold accents render
   - Buttons are clickable and route correctly
7. Open it on **mobile** (Gmail iOS/Android app)
   - 600px container collapses cleanly
   - Text is readable, not microscopic

### Test 2 — Manually Advance the Drip

In GHL:
1. Find your test contact in **Contacts**
2. Click the contact → **Workflow Tab**
3. You should see them mid-flight in W1 (Step 3 — Wait 2 days)
4. Right-click the wait step → **Skip Wait** (this advances them to Email 02)
5. Email 02 should arrive within minutes
6. Repeat the skip-wait → email-arrives cycle through all 12 emails
7. Confirm email 12 sends, then `drip-investor-completed` tag is applied, `drip-investor-active` is removed

### Test 3 — Booked Call Workflow

1. From your test Gmail, book a test call on `go.sevenpeakcapital.com/call-with-bryan` for 2 days from now
2. Confirm the test contact gets tagged `booked-call` in GHL
3. Confirm the test contact is removed from W1 (if they were in it)
4. Check inbox — pre-call email should arrive 24 hours before the booked time
5. Use GHL skip-wait to fast-forward past the appointment time, confirm post-call email sends 4 hours after

### Test 4 — Exit Conditions

1. Find your test contact (now mid-flight in W1)
2. Manually add the `booked-call` tag
3. Confirm the workflow exits — they should drop out within 5 minutes
4. Confirm they are NOT in W1 anymore (check the workflow tab on the contact)

### Test 5 — Click Tracking

1. From your test inbox, click the waitlist link in any email
2. Wait 2-3 minutes
3. Confirm the contact now has the `drip-clicked-waitlist` tag
4. Confirm you received the internal notification email

If any test fails, fix the workflow, repeat the test. **Do not flip to production with a failing test.**

---

## PHASE 8 — Activation
**Time: 5 minutes**

When all 5 tests pass:

1. **Workflow 1** → click **Publish**
2. **Workflow 2** → click **Publish**
3. **All 4 Click Tracker workflows** → click **Publish**
4. Remove the test contact from your contacts list (or tag them `internal-test` so you don't re-enroll yourself by accident)

---

## PHASE 9 — Day 1, 7, and 30 Monitoring
**Time: 5 minutes per check**

### Day 1 (tomorrow afternoon, after first real opt-in)
- ✔️ Email 01 sent to first real contact
- ✔️ No spam complaints in GHL → Reporting → Email
- ✔️ Open rate on Email 01: target 50%+

### Day 7
- ✔️ Sequence has flowed through Emails 02–04 for early opt-ins
- ✔️ Open rates trending: 40%+ on lessons 02–04
- ✔️ At least one click on the booking or waitlist link
- ✔️ Unsubscribe rate < 0.5% per send

### Day 30
- ✔️ First cohort completes Email 12
- ✔️ Conversion target: 8–12% of starters book a call OR join waitlist
- ✔️ If conversion is below 5%, run a one-on-one review of which emails drove the dropoff
- ✔️ Tag `drip-investor-cold` on anyone who completed but never engaged — segment for the re-engagement blast in 30 more days

---

## Important Caveats to Discuss with Your Team

**1. The contact form on `/contact.html`.** I haven't verified whether it currently submits to GHL or somewhere else (Formspree, Netlify Forms, etc.). Before activating Workflow 1, confirm form submissions actually land in GHL as new contacts. If not, the GHL form needs to be embedded into your contact page, or the existing form needs a webhook to GHL.

**2. The booking link.** `go.sevenpeakcapital.com/call-with-bryan` — confirm this is a GHL-native calendar (not Calendly). If it's Calendly, the "Appointment Booked" trigger won't fire. You'll need either:
   - Replace the Calendly with a GHL calendar (recommended)
   - Bridge Calendly → GHL via Zapier (adds latency and a failure point)

**3. Compliance review.** This is private fund marketing. Before activating, have your securities counsel review the email language, especially Email 08 (fund stats card) and Email 12 (Path 01 waitlist). The "10–12% pref / 14–15% target net" disclosure is structured as prior-vintage language with a 2026 caveat, but your attorney should sign off.

**4. The 30-day cadence.** I built ~3-day gaps between most emails. If your data shows higher unsubscribes, stretch to 4-day gaps. If engagement is high, you can tighten to 2-day gaps. Don't change cadence mid-cohort — wait until a full cohort completes, then adjust for the next.

---

## Quick Reference — Files in This Folder

| File | Purpose |
|------|---------|
| `email-01-welcome.html` through `email-12-fit-check.html` | The 12 drip emails |
| `email-pre-call.html` | Pre-call confirmation (24h before) |
| `email-post-call.html` | Post-call follow-up (4h after) |
| `crm-reengagement-blast.html` | One-time blast for dormant lists |
| `SETUP-README.md` | Full design system and disclosure language |
| `WORKFLOW-GUIDE.md` | Architecture overview (this doc's parent) |
| `DAY-OF-BUILD-RUNBOOK.md` | This file — the step-by-step |
| `UTM-LINK-MAP.md` | Pre-built UTM-tagged URLs for every link |
| `TAGS.txt` | Plain-text tag list for copy-paste into GHL |

---

## If Something Breaks

The three things most likely to fail on Day 1:

1. **Logo doesn't load** → 99% chance the URL `https://sevenpeakcapital.com/Seven%20Peak%20Capital%20Logo-02%20(3).png` is returning 404 or being blocked. Re-host the logo at a clean URL and find/replace across all 15 templates.

2. **Email lands in spam** → Domain auth not green, or sending from a cold domain at scale. Stop the workflow, fix DNS, warm the domain by sending 5–10 manual emails per day for 3 days, then resume.

3. **Workflow doesn't trigger** → Form isn't actually wired to GHL, or the trigger is set to a different form. Check **Form Submissions** in GHL Reporting — if your test submission shows up there, the trigger should fire. If it doesn't show up, the form isn't in GHL.

If you hit something not in this list, screenshot the error and document it. Most GHL issues come from not having tags created, templates named differently than the workflow expects, or incorrect trigger filters.

---

## Estimated Total Time

| Phase | Time |
|-------|------|
| Domain & Sender Setup | 15 min |
| Tags | 5 min |
| Templates (15 files) | 45 min |
| Workflow 1 | 30 min |
| Workflow 2 | 15 min |
| Click Trackers | 10 min |
| Testing | 30 min |
| Activation | 5 min |
| **Total** | **~2.5 hours** |

If you start at 9 AM, you're live by noon.
