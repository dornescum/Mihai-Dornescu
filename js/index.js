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
    setTimeout(hideLoading, 100);
})
// =====================================

// =====================================


const footer = document.getElementById("footer");
// console.log(footer)
// const footerUl = document.createElement("ul");
// footerUl.classList.add("social-icons");
// const footerLi = document.createElement("li");
footer.innerHTML = `
     <ul class="social-icons">
                <li>Linux Fan<a class="ubuntu" href="https://ubuntu.com/download/desktop" target="_blank">
                    <i class="fab fa-ubuntu"></i>
                </a></li>
                <li><a class="github" href="https://github.com/dornescum.html" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a class="linkedin" href="https://www.linkedin.com/feed/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            </ul>
    `
// console.log(footer)
// footerUl.append(footerLi)
// footer.append(footerUl)
