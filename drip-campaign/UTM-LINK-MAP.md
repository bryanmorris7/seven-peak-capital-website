# UTM Link Map
## Every link in every email — pre-built with UTM tags

Use this for find/replace inside each template before activating the workflow. UTMs let you trace conversions back to specific emails in Google Analytics, GHL, or whatever attribution layer you use downstream.

---

## UTM Schema

```
?utm_source=ghl
&utm_medium=email
&utm_campaign=investor-drip
&utm_content=email-NN
```

`utm_source` = always `ghl` (the platform sending)
`utm_medium` = always `email`
`utm_campaign` = `investor-drip` for the 12-email sequence; `booked-call` for pre/post; `reengagement` for the blast
`utm_content` = identifies which email the click came from

---

## Find / Replace Operations

For each email, find the bare URL on the left and replace with the UTM-tagged version on the right.

### Email 01 — Welcome

| Bare URL | Replace with |
|----------|--------------|
| `https://go.sevenpeakcapital.com/call-with-bryan` | `https://go.sevenpeakcapital.com/call-with-bryan?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-01-welcome` |
| `https://sevenpeakcapital.com` | `https://sevenpeakcapital.com?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-01-welcome` |

### Email 02 — Plain English

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.com/strategy.html` | `https://sevenpeakcapital.com/strategy.html?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-02-plain-english` |

### Email 03 — Why We Built 7P

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.com/about.html` | `https://sevenpeakcapital.com/about.html?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-03-why-we-built` |

### Email 04 — Two Ways

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.com/strategy.html` | `https://sevenpeakcapital.com/strategy.html?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-04-two-ways` |

### Email 05 — Podcast

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.com/podcast.html` | `https://sevenpeakcapital.com/podcast.html?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-05-podcast` |
| `https://go.sevenpeakcapital.com/schedule-peak-profits-podcast` | `https://go.sevenpeakcapital.com/schedule-peak-profits-podcast?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-05-podcast` |

### Email 06 — Deal Is the Sponsor

| Bare URL | Replace with |
|----------|--------------|
| `https://go.sevenpeakcapital.com/call-with-bryan` | `https://go.sevenpeakcapital.com/call-with-bryan?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-06-deal-is-sponsor` |

### Email 07 — Read a Deal

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.com/portfolio.html` | `https://sevenpeakcapital.com/portfolio.html?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-07-read-a-deal` |

### Email 08 — Be the Bank

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b` | `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-08-be-the-bank` |

### Email 09 — Operator vs. Allocator

| Bare URL | Replace with |
|----------|--------------|
| `https://go.sevenpeakcapital.com/call-with-bryan` | `https://go.sevenpeakcapital.com/call-with-bryan?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-09-operator-vs-allocator` |

### Email 10 — Only Number That Matters

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b` | `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-10-only-number` |

### Email 11 — Investor Portal

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.cashflowportal.com/app` | `https://sevenpeakcapital.cashflowportal.com/app?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-11-investor-portal` |
| `https://go.sevenpeakcapital.com/call-with-bryan` | `https://go.sevenpeakcapital.com/call-with-bryan?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-11-investor-portal` |

### Email 12 — Fit Check

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b` | `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-12-fit-check` |
| `https://go.sevenpeakcapital.com/call-with-bryan` | `https://go.sevenpeakcapital.com/call-with-bryan?utm_source=ghl&utm_medium=email&utm_campaign=investor-drip&utm_content=email-12-fit-check` |

### Pre-Call Email

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.com` | `https://sevenpeakcapital.com?utm_source=ghl&utm_medium=email&utm_campaign=booked-call&utm_content=pre-call` |

(The `{{appointment.cancellation_link}}` merge tag does NOT need a UTM — GHL handles tracking natively.)

### Post-Call Email

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b` | `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b?utm_source=ghl&utm_medium=email&utm_campaign=booked-call&utm_content=post-call` |
| `https://sevenpeakcapital.com/portfolio.html` | `https://sevenpeakcapital.com/portfolio.html?utm_source=ghl&utm_medium=email&utm_campaign=booked-call&utm_content=post-call` |
| `https://sevenpeakcapital.com/podcast.html` | `https://sevenpeakcapital.com/podcast.html?utm_source=ghl&utm_medium=email&utm_campaign=booked-call&utm_content=post-call` |
| `https://sevenpeakcapital.cashflowportal.com/app` | `https://sevenpeakcapital.cashflowportal.com/app?utm_source=ghl&utm_medium=email&utm_campaign=booked-call&utm_content=post-call` |
| `https://go.sevenpeakcapital.com/call-with-bryan` | `https://go.sevenpeakcapital.com/call-with-bryan?utm_source=ghl&utm_medium=email&utm_campaign=booked-call&utm_content=post-call` |

### CRM Re-engagement Blast

| Bare URL | Replace with |
|----------|--------------|
| `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b` | `https://sevenpeakcapital.cashflowportal.com/offering/94cceeaa7c5b435e9b2acb601989cd0b?utm_source=ghl&utm_medium=email&utm_campaign=reengagement&utm_content=blast-01` |
| `https://go.sevenpeakcapital.com/call-with-bryan` | `https://go.sevenpeakcapital.com/call-with-bryan?utm_source=ghl&utm_medium=email&utm_campaign=reengagement&utm_content=blast-01` |
| `https://sevenpeakcapital.com/podcast.html` | `https://sevenpeakcapital.com/podcast.html?utm_source=ghl&utm_medium=email&utm_campaign=reengagement&utm_content=blast-01` |

---

## Recommended Workflow

Easiest way to apply all of these:

1. Open each email file in VS Code (or any editor with multi-cursor find/replace)
2. Use Cmd+F (find) → toggle "Replace" → paste the bare URL → paste the UTM version
3. Click "Replace All"
4. Save the file
5. Re-upload to GHL as the template

This takes ~2 minutes per email. You'll knock all 15 out in under 30 minutes total.

**Alternative:** Skip UTMs and rely on GHL's built-in click tracking. GHL automatically logs every link click against the contact and the email. The UTMs only matter if you also use Google Analytics or Plausible to track downstream conversions on the website itself. If you're only operating inside GHL, you can skip this whole step.

---

## Footer Links — Don't UTM These

These appear in every footer and don't need UTMs (would clutter without value):

- `sevenpeakcapital.com` (main domain link in footer)
- `{{unsubscribe_url}}` (GHL handles this)

---

## Validating UTMs After Activation

After 24 hours of live traffic, check:

1. **Google Analytics → Acquisition → Source/Medium** — should see `ghl / email` showing up
2. **Google Analytics → Acquisition → Campaigns** — should see `investor-drip`, `booked-call`, `reengagement`
3. **GHL → Reporting → Email** — should see click data per email

If GA shows zero `ghl / email` traffic 24 hours after a real send, your GA tag isn't installed on the destination pages. That's a separate fix outside the email scope.
