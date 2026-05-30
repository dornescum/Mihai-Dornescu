# Cookie Consent & Tracking — TODO

## Consent Logic

- [x] Move `trackVisitor()` call behind consent check — do not fire before user accepts
- [x] Replace single-button banner with three options: **Accept all**, **Only essentials**, **Refuse**
- [x] Store consent as `{ choice, timestamp }` in `localStorage` (key: `cookie_consent`)
- [x] Set consent TTL to **90 days** — re-show banner if missing or expired
- [x] On page load, validate consent: check existence, expiry, and choice before tracking

## Opt-out

- [x] "Refuse" and "Only essentials" choices must skip `trackVisitor()` entirely
- [x] Add a way for users to withdraw consent at any time (e.g. link in footer → clears `cookie_consent` and reloads)

## Cookie Policy Page

- [x] Create `cookie-policy.html` explaining: what is collected, why, storage duration, how to withdraw
- [x] Add learning/personal project disclaimer on the policy page
- [x] Link policy page from the cookie banner ("Learn more")
- [x] Add policy page to sidebar

## Expiration & Re-consent

- [x] Consent record must include a `timestamp` field
- [x] Check timestamp on every page load — expire after 90 days
- [x] After expiry, clear stale consent and show banner again
