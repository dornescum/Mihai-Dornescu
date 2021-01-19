// const projects = [
//     {
//         id: 1,
//         name: "Mihai Dornescu",
//         source: "Udemy",
//         img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//         text: '            Lorem ipsum dolor sit ame' +
//             't, consectetur adipisicing elit. Accusantium, adip' +
//             'isci, assumenda deleniti deserunt dolore dolorum eos hic' +
//             ' laudantium minima mollitia odit praesentium, quidem ' +
//             'repellat repellendus saepe tempore ut vel velit.'
//     },
//     {
//         id: 2,
//         name: "Mihai Dornescu",
//         source: "Youtube",
//         img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
//         text: '   “Lorem ipsum” dummy text is used by many web-developers to test ' +
//             'how their HTML templates will look with real data. Often, developers use ' +
//             'third-party services to generate “Lorem ipsum” text, but now you can do that ' +
//             'right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:'
//     },
//     {
//         id: 3,
//         name: "Mihai Dornescu",
//         source: "GitHub",
//         img: 'https://images.unsplash.com/photo-1593720217529-01f0a5d09aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80',
//         text: '           Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//             'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo' +
//             ' reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ' +
//             'ducimus voluptates voluptas?'
//     },
//     {
//         id: 4,
//         name: "Mihai Dornescu",
//         source: "Udemy",
//         img: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//         text: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
//             'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
//             'when an unknown printer took a galley of type and scrambled it to make a type ' +
//             'specimen book. It has survived not only five centuries, but also the leap into ' +
//             'electronic typesetting, remaining essentially unchanged. It was popularised in the ' +
//             '1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more '
//
//     },
// ]
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
    if (message.length === 0){
        invitationMessage.style.display = "block"
    } else {
        invitationMessage.style.display = "none"
    }
}

const updateMessages =(title, message)=>{
    const noInfo ="This is just an exercise &#128540"
    const newMessage = document.createElement("li");
    newMessage.className ="message-li";
    newMessage.innerHTML =`
            <div class="message__info">
            <h6>${title.toUpperCase()}</h6>
             <p class="message-text">${message.toLowerCase()}</p>
             <p class="align-start">${noInfo}</p>
            </div>
    `

    listMessage.append(newMessage)
    console.log(newMessage)
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
    console.log(titleValue)
    if (titleValue.trim() === '' || messageValue.trim() === "") {
        alert("is there something wrong?")
        return;
    }
    const newMessage = {
        title: titleValue,
        message: messageValue
    };
    message.push(newMessage);
    // console.log(userName, userMessage)
    console.log(message)
    updateMessages(newMessage.title, newMessage.message);
    clearInput();
    openModal();
    updatePage();
}
const clearInput = () => {
    userMessage.value = ""
    userName.value = ""
}

invitation.addEventListener("click", openModal);
backdrop.addEventListener("click", closeBackdrop);
cancelMessage.addEventListener("click", cancelAddMessage);
addMessage.addEventListener("click", addMessageBtn)