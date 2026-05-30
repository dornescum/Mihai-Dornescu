console.time("timer");
import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";

const btnNavbar = getElement("#access-sidebar");
const sidebar = getElement("#sidebar");
const projectsGrid = getElement("#grid-projects");
const footer = getElement("#footer-year");

handleSidebar(btnNavbar, sidebar);

const loading = getElement(".loading");
const hideLoading = () => loading.classList.add("hide-loading");
window.addEventListener("DOMContentLoaded", () => setTimeout(hideLoading, 500));

footer.innerHTML = `<p>&copy; ${YEAR}</p>`;

const itemsPerPage = 12;
let currentPage = 1;
let activeTag = null;

function getProjectTags(item) {
    const tags = [];
    if (item.tagJs) tags.push(item.tagJs);
    if (item.tagCss && item.tagCss.trim()) tags.push(item.tagCss.trim());
    if (item.tagTs && item.tagTs.trim()) tags.push(item.tagTs.trim());
    if (item.tagDB) tags.push(item.tagDB);
    if (item.tagNode) tags.push('Node.js');
    if (item.tagPy) tags.push('Python');
    return [...new Set(tags)];
}

function getFiltered() {
    if (!activeTag) return projects;
    return projects.filter(p => getProjectTags(p).includes(activeTag));
}

function renderFilters() {
    const container = getElement('#tag-filters');
    const allTags = [...new Set(projects.flatMap(p => getProjectTags(p)))].sort();

    const btns = ['All', ...allTags].map(tag => {
        const val = tag === 'All' ? '' : tag;
        const active = tag === 'All' ? !activeTag : activeTag === tag;
        return `<button class="tag-filter-btn btn btn-sm ${active ? 'btn-dark' : 'btn-outline-secondary'}" data-tag="${val}">${tag}</button>`;
    }).join('');

    container.innerHTML = btns;
    container.querySelectorAll('.tag-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeTag = btn.dataset.tag || null;
            currentPage = 1;
            renderFilters();
            displayData();
            updatePagination();
        });
    });
}

function displayData() {
    const filtered = getFiltered();
    const start = (currentPage - 1) * itemsPerPage;
    const pageItems = filtered.slice(start, start + itemsPerPage);

    projectsGrid.innerHTML = '';

    if (pageItems.length === 0) {
        projectsGrid.innerHTML = '<li class="px-3 py-4 text-muted small">No projects match this filter.</li>';
        return;
    }

    pageItems.forEach((item, idx) => {
        const projectIndex = projects.indexOf(item);
        const num = start + idx + 1;
        const tags = getProjectTags(item);

        const tagBadges = tags.map(t =>
            `<button class="tag-badge btn btn-sm btn-outline-secondary py-0 px-2 lh-base" style="font-size:0.7rem;" data-tag="${t}">${t}</button>`
        ).join('');

        const links = [];
        if (item.linkPage) links.push(`<a href="${item.linkPage}" target="_blank" rel="noopener" class="link-warning small">live</a>`);
        if (item.linkRepo) links.push(`<a href="${item.linkRepo}" target="_blank" rel="noopener" class="link-secondary small">repo</a>`);
        const linksHtml = links.join('<span class="text-muted mx-1">|</span>');

        projectsGrid.insertAdjacentHTML('beforeend', `
            <li class="project-row d-flex align-items-start gap-2 px-3 py-2 border-bottom" data-testid="${item.id}">
                <span class="text-muted small text-end mt-1 flex-shrink-0" style="min-width:1.75rem;">${num}.</span>
                <div class="flex-grow-1 overflow-hidden">
                    <div class="d-flex flex-wrap align-items-center gap-1">
                        <span class="fw-semibold small text-dark">${item.title.trim()}</span>
                        ${tagBadges}
                        ${linksHtml ? `<span class="text-muted mx-1">·</span>${linksHtml}` : ''}
                    </div>
                    <p class="small text-muted mt-1 mb-0">${item.description}</p>
                </div>
                ${item.extra ? `<button onclick="openModal(${projectIndex}, event)" class="info-btn btn btn-sm btn-link text-muted text-nowrap mt-1 flex-shrink-0 p-0">info</button>` : ''}
            </li>
        `);
    });

    projectsGrid.querySelectorAll('.tag-badge').forEach(badge => {
        badge.addEventListener('click', () => {
            activeTag = badge.dataset.tag;
            currentPage = 1;
            renderFilters();
            displayData();
            updatePagination();
        });
    });
}

window.openModal = (projectIndex, event) => {
    const modal = document.getElementById('myModal');
    const description = document.getElementById('modalDescription');
    if (!modal) return;
    const project = projects[projectIndex];
    if (!project) return;
    description.innerHTML = `
        <h5 class="fw-bold mb-1">${project.title.trim()}</h5>
        <p class="small text-muted mb-3">${project.tools}</p>
        <div class="small lh-base">${project.extra}</div>`;
    modal.style.display = 'block';
};

window.closeModal = () => {
    document.getElementById('myModal').style.display = 'none';
};

function updatePagination() {
    const filtered = getFiltered();
    const total = Math.ceil(filtered.length / itemsPerPage);
    const container = getElement('#pagination');
    container.innerHTML = '';

    if (total <= 1) return;

    const mkBtn = (label, page, active = false) => {
        const btn = document.createElement('button');
        btn.innerText = label;
        btn.className = active ? 'btn btn-sm btn-dark' : 'btn btn-sm btn-outline-secondary';
        if (!active) {
            btn.addEventListener('click', () => { currentPage = page; displayData(); updatePagination(); });
        }
        return btn;
    };

    if (currentPage > 1) container.appendChild(mkBtn('← prev', currentPage - 1));
    for (let i = 1; i <= total; i++) container.appendChild(mkBtn(String(i), i, i === currentPage));
    if (currentPage < total) container.appendChild(mkBtn('next →', currentPage + 1));
}

renderFilters();
displayData();
updatePagination();

let data = [];
async function fetchData() {
    const URL = 'https://news.93-115-17-160.nip.io/v1/feed';
    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        data = await response.json();
        return data;
    } catch (err) {
        console.error('fetchData failed:', err.message);
        return [];
    }
}
data = await fetchData();

console.timeEnd("timer");
