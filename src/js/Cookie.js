const ANALYTICS_ENDPOINT = 'https://news.93-115-17-160.nip.io/v1/visitors';
const CONSENT_KEY        = 'cookie_consent';
const CONSENT_TTL_DAYS   = 90;
const TRACKED_KEY        = 'visitor_tracked';

// ── consent helpers ────────────────────────────────────────────
function getConsent() {
    try {
        const raw = localStorage.getItem(CONSENT_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function setConsent(choice) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
        choice,
        timestamp: new Date().toISOString(),
    }));
}

function isExpired(consent) {
    if (!consent?.timestamp) return true;
    const ageDays = (Date.now() - new Date(consent.timestamp).getTime()) / 86_400_000;
    return ageDays > CONSENT_TTL_DAYS;
}

function needsBanner() {
    const consent = getConsent();
    return !consent || isExpired(consent);
}

// ── banner ─────────────────────────────────────────────────────
const banner = document.querySelector('.cookie-container');

function hideBanner() {
    banner.classList.add('d-none');
}

document.querySelector('.cookie-btn-accept').addEventListener('click', () => {
    setConsent('accepted');
    hideBanner();
    trackVisitor();
});

document.querySelector('.cookie-btn-essential').addEventListener('click', () => {
    setConsent('essential_only');
    hideBanner();
});

document.querySelector('.cookie-btn-refuse').addEventListener('click', () => {
    setConsent('refused');
    hideBanner();
});

setTimeout(() => {
    if (needsBanner()) banner.classList.remove('d-none');
}, 1000);

// ── visitor analytics ──────────────────────────────────────────
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

// ── withdraw consent ───────────────────────────────────────────
document.getElementById('withdraw-consent')?.addEventListener('click', () => {
    localStorage.removeItem(CONSENT_KEY);
    location.reload();
});

// track only if consent is valid and accepted
const consent = getConsent();
if (consent && !isExpired(consent) && consent.choice === 'accepted') {
    trackVisitor();
}
