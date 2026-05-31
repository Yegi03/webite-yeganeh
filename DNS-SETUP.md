# Point theyeganeh.com to Vercel

Your site is deployed. DNS still points to Squarespace parking. Update these records:

## Where to edit

Open **one** of these (whichever manages your domain):

- [Squarespace Domains → theyeganeh.com → DNS](https://account.squarespace.com/domains)
- [Google Domains DNS](https://domains.google.com/registrar/theyeganeh.com/dns) (if nameservers are Google)

## Delete or disable (old Squarespace parking)

Remove any records like:

| Type | Host | Points to |
|------|------|-----------|
| A | `@` | `198.49.23.144` or other Squarespace IPs |
| A | `@` | `198.185.159.144` etc. |
| CNAME | `www` | `ext-sq.squarespace.com` |

## Add (Vercel — use values from your Vercel Domains dashboard)

| Type | Host / Name | Value |
|------|-------------|-------|
| **A** | `@` (or leave blank) | `216.198.79.1` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

(Vercel may show `76.76.21.21` in older docs; your dashboard shows `216.198.79.1` for Google Cloud DNS.)

Save. Wait 15–60 minutes, then visit https://theyeganeh.com

## Optional: Vercel nameservers (instead of A records)

At your registrar, change nameservers to:

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

Then Vercel manages DNS automatically. Only do this if you're comfortable removing Google/Squarespace DNS hosting.
