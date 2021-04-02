import {projects} from "./module/projects.js";

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const source = document.getElementById('source');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const main = document.querySelector("main");
const btnUp = document.createElement("button");
let rootElement = document.documentElement;

// show buttons
const progress = document.getElementById("progress")
const skillsBtn = document.getElementById("skills")
const containerDisplay = document.getElementById("containerDisplay")
const container = document.getElementById("container")
let workedProjects = 0;

// modal
const comment = document.getElementById("add-comment");
const invitation = document.getElementById("invitation");
const backdrop = document.getElementById("backdrop");
const cancelMessage = document.querySelector(".btn--passive");
const addMessage = cancelMessage.nextElementSibling;
// const  userInput = comment.querySelectorAll("input")
const userName = document.getElementById("title");
const userMessage = document.getElementById("message");
const invitationMessage = document.getElementById("entry-text");
const listMessage = document.getElementById("input-list")

// incarca
window.addEventListener("DOMContentLoaded", function () {
    showProjects()
})

function showProjects() {
    const item = projects[workedProjects];
    img.src = item.img;
    author.textContent = item.name;
    source.textContent = item.source;
    info.textContent = item.text;
}

// btn projects
nextBtn.addEventListener('click', function () {
    workedProjects++;
    if (workedProjects > projects.length - 1) {
        workedProjects = 0;
    }
    showProjects(workedProjects);
})
prevBtn.addEventListener('click', function () {
    workedProjects--;
    if (workedProjects < 0) {
        workedProjects = projects.length - 1;
    }
    showProjects(workedProjects);
})
// btn sus
btnUp.classList.add("btn-up")
btnUp.innerText = " Up "
btnUp.addEventListener("click", scrollToTop)
main.appendChild(btnUp)

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// show | hide on index.html
skillsBtn.addEventListener("click", () => {
    progress.classList.toggle("invisible")
})
containerDisplay.addEventListener("click", () => {
    container.classList.toggle("invisible")
})
// =================================================
// modal
const message = [];
const updatePage = () => {
    if (message.length === 0) {
        invitationMessage.style.display = "block"
    } else {
        invitationMessage.style.display = "none"
    }
}

const updateMessages = (title, message) => {
    const noInfo = "This is just an exercise &#128540";
    const date = new Date();
    const hour = date.toLocaleTimeString();
    const newMessage = document.createElement("li");
    newMessage.className = "message-li";
    newMessage.innerHTML = `
            <div class="message__info">
            <h6>${title.toUpperCase()}</h6>
             <p class="message-text">${message.toLowerCase()}</p>
             <p class="align-start">${noInfo}</p>
             <p class="align-start">${hour}</p>
            </div>
    `

    listMessage.append(newMessage)
    // console.log(newMessage)
}
const toggleBackdrop = () => {
    backdrop.classList.toggle("visible")
}

const openModal = () => {
    comment.classList.toggle("visible");
    toggleBackdrop();
}
const closeBackdrop = () => {
    openModal();
}
const cancelAddMessage = () => {
    openModal();
    clearInput();
}
const addMessageBtn = () => {
    const titleValue = userName.value;
    const messageValue = userMessage.value;
    console.log(titleValue);
    console.log(messageValue);
    if (titleValue.trim() === '' || messageValue.trim() === "") {
        alert("is there something wrong?")
        return;
    }
    const newMessage = {
        title: titleValue,
        message: messageValue
    };
    message.push(newMessage);
    console.log(userName, userMessage)
    console.log(message.length)
    updateMessages(newMessage.title, newMessage.message);
    clearInput();
    openModal();
    updatePage();
    localStorage.setItem("mesaj", JSON.stringify(message));
}
const clearInput = () => {
    userMessage.value = ""
    userName.value = ""
}


invitation.addEventListener("click", openModal);
backdrop.addEventListener("click", closeBackdrop);
cancelMessage.addEventListener("click", cancelAddMessage);
addMessage.addEventListener("click", addMessageBtn);


// =======cookie====
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 100);