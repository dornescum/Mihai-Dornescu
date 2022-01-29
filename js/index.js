console.time("timer")
const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(
        `Please check "${selection}" selector, no such element exist`
    );
};
// navbar
const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
    sidebarOverlay.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show')
})

// loading
const loading = getElement('.loading');
const hideLoading = () => {
    loading.classList.add('hide-loading')
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoading, 500);
})
// =====================================

// =====================================


const footer = document.getElementById("footer");
const d = new Date();
let year =d.getFullYear();
console.log(year);

footer.innerHTML = `
    <p>${year}</p>
    `
console.timeEnd("timer")
