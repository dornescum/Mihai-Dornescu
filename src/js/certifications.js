import { certifications } from "./utils/Certifications.js";
import { getElement } from "./utils/getElement.js";

const list = getElement("#cert-list");
const filtersContainer = getElement("#issuer-filters");

let activeIssuer = null;

const sorted = [...certifications].sort((a, b) => new Date(b.date) - new Date(a.date));

function formatDate(date) {
    if (/^\d{4}$/.test(date)) return date;
    return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function getFiltered() {
    if (!activeIssuer) return sorted;
    return sorted.filter(c => c.issuer === activeIssuer);
}

function renderFilters() {
    const issuers = [...new Set(sorted.map(c => c.issuer))];

    const btns = ["All", ...issuers].map(issuer => {
        const val = issuer === "All" ? "" : issuer;
        const active = issuer === "All" ? !activeIssuer : activeIssuer === issuer;
        return `<button class="issuer-filter-btn btn btn-sm ${active ? "btn-dark" : "btn-outline-secondary"}" data-issuer="${val}">${issuer}</button>`;
    }).join("");

    filtersContainer.innerHTML = btns;
    filtersContainer.querySelectorAll(".issuer-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            activeIssuer = btn.dataset.issuer || null;
            renderFilters();
            renderList();
        });
    });
}

function renderList() {
    const items = getFiltered();
    list.innerHTML = "";

    if (!items.length) {
        list.innerHTML = '<li class="px-3 py-4 text-muted small">No certifications match this filter.</li>';
        return;
    }

    items.forEach((cert, idx) => {
        const tagBadges = (cert.tags || []).map(t =>
            `<span class="badge bg-light text-secondary border" style="font-size:.7rem">${t}</span>`
        ).join("");

        const links = [];
        if (cert.file) links.push(`<a href="${cert.file}" target="_blank" rel="noopener" class="link-warning small">view certificate</a>`);
        if (cert.verifyUrl) links.push(`<a href="${cert.verifyUrl}" target="_blank" rel="noopener" class="link-secondary small">verify</a>`);
        const linksHtml = links.join('<span class="text-muted mx-1">|</span>');

        list.insertAdjacentHTML("beforeend", `
            <li class="cert-row d-flex align-items-start gap-2 px-3 py-2 border-bottom" data-testid="${cert.id}">
                <span class="text-muted text-end mt-1 flex-shrink-0" style="min-width:1.75rem;">${idx + 1}.</span>
                <div class="flex-grow-1 overflow-hidden">
                    <div class="d-flex flex-wrap align-items-center gap-1">
                        <span class="fw-semibold text-dark">${cert.title}</span>
                        <span class="badge" style="background:${cert.issuerColor || "#6c757d"};font-size:.7rem;">${cert.issuer}</span>
                        ${tagBadges}
                    </div>
                    <p class="text-muted small mt-1 mb-0">
                        ${formatDate(cert.date)}${cert.length ? ` · ${cert.length}` : ""}${cert.provider ? ` · via ${cert.provider}` : ""}
                        ${cert.credentialId ? ` · ID ${cert.credentialId}` : ""}
                    </p>
                    ${cert.desc ? `<p class="text-muted small mt-1 mb-0">${cert.desc}</p>` : ""}
                    ${linksHtml ? `<p class="mt-1 mb-0">${linksHtml}</p>` : ""}
                </div>
            </li>
        `);
    });
}

renderFilters();
renderList();
