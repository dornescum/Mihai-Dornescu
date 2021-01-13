
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
// container proiecte

// let workedProjects = 0;
// incarca
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoading, 100);
    // showProjects()
})



// const divAboutMe = document.createElement("div")
// divAboutMe.classList.add("text-center")
//
// const btnAboutMe = document.createElement("button")
// btnAboutMe.classList.add("hero-btn-display")
// btnAboutMe.innerHTML ="push"
//
// btnAboutMe.append(divAboutMe)
//  btnAboutMe.style.backgroundColor ="red"
// console.log(btnAboutMe)
// sectionHero.appendChild(divAboutMe)
//
// btnAboutMe.addEventListener("click", ()=>{
//     container.classList.toggle("invisible")
//     // progress.classList.toggle("visible")
// })


// const btnUp = document.createElement("button")
// btnUp.classList.add("btn-up")
// btnUp.innerText= " Up"
//
// btnUp.addEventListener("click", scrollToTop)
// main.appendChild(btnUp)
//
// let rootElement = document.documentElement
// function scrollToTop() {
//     // Scroll to top logic
//     rootElement.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// }


