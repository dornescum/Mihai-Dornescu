// const main = document.querySelector("main");
// let rootElement = document.documentElement;


// =======cookie====
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
setTimeout(()=>{
	cookieContainer.classList.add('block')
	cookieContainer.classList.remove("hidden");

},10000)

cookieButton.addEventListener("click", () => {
    // cookieContainer.classList.remove("active");
    cookieContainer.classList.add("hidden");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 100);
