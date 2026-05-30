// ── config ────────────────────────────────────────────────────
// TODO: confirm final path when Go endpoint is live
const ANALYTICS_ENDPOINT = 'https://news.93-115-17-160.nip.io/v1/visitors';
const TRACKED_KEY = 'visitor_tracked'; // sessionStorage — once per tab session

// ── cookie banner ──────────────────────────────────────────────
const cookieContainer = document.querySelector('.cookie-container');
const cookieButton    = document.querySelector('.cookie-btn');

cookieButton.addEventListener('click', () => {
    cookieContainer.classList.add('d-none');
    localStorage.setItem('cookieBannerDisplayed', 'true');
});

// show banner after 4 s if not already dismissed
setTimeout(() => {
    if (!localStorage.getItem('cookieBannerDisplayed')) {
        cookieContainer.classList.remove('d-none');
    }
}, 1000);

// ── visitor analytics v1 (REST POST) ──────────────────────────
// No IP available client-side. Payload: timestamp, agent, referrer,
// page, language, timezone, screen, viewport.
// v2 will replace fetch() with a gRPC-web call.
async function trackVisitor() {
    if (sessionStorage.getItem(TRACKED_KEY)) return;

    const payload = {
        website_name: 'portfolio',
        timestamp:    new Date().toISOString(),
        user_agent:   navigator.userAgent,
        referrer:     document.referrer || 'direct',
        page:         window.location.pathname,
        language:     navigator.language,
        timezone:     Intl.DateTimeFormat().resolvedOptions().timeZone,
        screen:       `${screen.width}x${screen.height}`,
        viewport:     `${window.innerWidth}x${window.innerHeight}`,
    };

    try {
        await fetch(ANALYTICS_ENDPOINT, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(payload),
        });
        sessionStorage.setItem(TRACKED_KEY, '1');
    } catch (_) {
        // fire-and-forget — analytics failure must never affect the page
    }
}

trackVisitor();
