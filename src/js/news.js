// const API   = 'https://news.93-115-17-160.nip.io';
const API   = 'https://stiri.digital';
const LIMIT = 20;

let currentPage    = 1;
let totalPages     = 1;
let activeCategory = null;
const articleCache = new Map(); // id → item, avoids re-fetch for modal

// ── fetch ──────────────────────────────────────────────────────

async function fetchFeed() {
    const params = new URLSearchParams({ limit: LIMIT, offset: (currentPage - 1) * LIMIT });
    if (activeCategory) params.set('category', activeCategory);
    const res = await fetch(`${API}/v1/feed?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

// ── helpers ────────────────────────────────────────────────────

function el(id) { return document.getElementById(id); }

function formatDate(iso) {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function imgUrl(path) {
    if (!path) return null;
    return path.startsWith('http') ? path : `${API}${path}`;
}

function parseMarkdown(str) {
    if (!str) return '';
    if (typeof marked === 'undefined') return `<pre class="small lh-base">${str}</pre>`;
    return typeof marked.parse === 'function' ? marked.parse(str) : marked(str);
}

// ── render list ────────────────────────────────────────────────

function renderList(items) {
    const list = el('news-list');
    list.innerHTML = '';

    if (!items.length) {
        list.innerHTML = '<li class="px-3 py-4 text-muted small">No articles found.</li>';
        return;
    }

    const offset = (currentPage - 1) * LIMIT;

    items.forEach((item, idx) => {
        articleCache.set(item.id, item);

        const thumb = imgUrl(item.image_url);
        const date  = formatDate(item.publish_date);

        list.insertAdjacentHTML('beforeend', `
            <li class="news-row d-flex align-items-start gap-2 px-3 py-2 border-bottom">
                <span class="text-muted small text-end mt-1 flex-shrink-0" style="min-width:1.75rem">${offset + idx + 1}.</span>
                ${thumb ? `<img src="${thumb}" alt="" class="flex-shrink-0 rounded" style="width:48px;height:36px;object-fit:cover;margin-top:2px" onerror="this.style.display='none'">` : ''}
                <div class="flex-grow-1 overflow-hidden">
                    <div class="d-flex flex-wrap align-items-center gap-1">
                        <button class="article-btn btn btn-link p-0 text-start fw-semibold small lh-sm text-dark text-decoration-none"
                                data-id="${item.id}">${item.title}</button>
                        ${item.category ? `<span class="badge bg-light text-secondary border" style="font-size:.65rem">${item.category}</span>` : ''}
                        ${item.language_code ? `<span class="badge bg-light text-muted border" style="font-size:.65rem">${item.language_code}</span>` : ''}
                    </div>
                    <p class="small text-muted mb-0 mt-1">
                        ${item.author ? `by <strong>${item.author}</strong>` : ''}
                        ${date ? ` · ${date}` : ''}
                    </p>
                </div>
            </li>
        `);
    });

    list.querySelectorAll('.article-btn').forEach(btn => {
        btn.addEventListener('click', () => openArticle(+btn.dataset.id));
    });
}

// ── category filters ───────────────────────────────────────────

function renderFilters() {
    const container = el('cat-filters');
    const categories = [...new Set([...articleCache.values()].map(a => a.category).filter(Boolean))].sort();

    container.innerHTML = ['All', ...categories].map(cat => {
        const val    = cat === 'All' ? '' : cat;
        const active = cat === 'All' ? !activeCategory : activeCategory === cat;
        return `<button class="cat-btn btn btn-sm ${active ? 'btn-dark' : 'btn-outline-secondary'}" data-cat="${val}">${cat}</button>`;
    }).join('');

    container.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.cat || null;
            currentPage = 1;
            load();
        });
    });
}

// ── pagination ─────────────────────────────────────────────────

function renderPagination() {
    const container = el('pagination');
    container.innerHTML = '';
    if (totalPages <= 1) return;

    const mk = (label, page, active) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.className   = `btn btn-sm ${active ? 'btn-dark' : 'btn-outline-secondary'}`;
        if (!active) btn.addEventListener('click', () => { currentPage = page; load(); });
        return btn;
    };

    if (currentPage > 1)          container.appendChild(mk('← prev', currentPage - 1, false));
    for (let i = 1; i <= totalPages; i++) container.appendChild(mk(String(i), i, i === currentPage));
    if (currentPage < totalPages) container.appendChild(mk('next →', currentPage + 1, false));
}

// ── article modal ──────────────────────────────────────────────

function openArticle(id) {
    const modal   = el('articleModal');
    const content = el('articleContent');
    const item    = articleCache.get(id);
    if (!item) return;

    const thumb = imgUrl(item.image_url);

    content.innerHTML = `
        <h5 class="fw-bold mb-1">${item.title}</h5>
        <p class="small text-muted mb-2">
            ${item.category ? `<span class="badge bg-secondary me-1">${item.category}</span>` : ''}
            ${item.author   ? `by <strong>${item.author}</strong> · ` : ''}
            ${formatDate(item.publish_date)}
        </p>
        ${thumb ? `<img src="${thumb}" alt="${item.title}" class="img-fluid rounded mb-3" style="max-height:260px;object-fit:cover;width:100%" onerror="this.style.display='none'">` : ''}
        <hr class="my-2">
        <div class="article-body small lh-base">${parseMarkdown(item.content)}</div>
    `;

    modal.style.display = 'block';
}

window.closeArticleModal = () => { el('articleModal').style.display = 'none'; };

el('articleModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeArticleModal();
});

// ── main load ──────────────────────────────────────────────────

async function load() {
    const list = el('news-list');
    list.innerHTML = '<li class="px-3 py-3 text-muted small">Loading…</li>';

    try {
        const json = await fetchFeed();
        const items = json.data || [];
        totalPages  = json.total_pages || 1;

        renderList(items);
        renderFilters();
        renderPagination();
    } catch (err) {
        list.innerHTML = `<li class="px-3 py-4 text-danger small">Could not load feed: ${err.message}</li>`;
    }
}

load();
