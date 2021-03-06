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
footer.innerHTML = `
     <ul class="social-icons">
                <li>Linux Fan<a class="ubuntu" href="https://ubuntu.com/download/desktop" target="_blank">
                    <i class="fab fa-ubuntu"></i>
                </a></li>
                <li><a class="github" href="https://github.com/dornescum.html" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a class="linkedin" href="https://www.linkedin.com/feed/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            </ul>
    `

console.timeEnd("timer")