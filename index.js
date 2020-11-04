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
const projects = [
    {
        id: 1,
        name: "Mihai Dornescu",
        source: "Udemy",
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        text: '            Lorem ipsum dolor sit ame' +
            't, consectetur adipisicing elit. Accusantium, adip' +
            'isci, assumenda deleniti deserunt dolore dolorum eos hic' +
            ' laudantium minima mollitia odit praesentium, quidem ' +
            'repellat repellendus saepe tempore ut vel velit.'
    },
    {
        id: 2,
        name: "Mihai Dornescu",
        source: "Youtube",
        img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        text: '   “Lorem ipsum” dummy text is used by many web-developers to test ' +
            'how their HTML templates will look with real data. Often, developers use ' +
            'third-party services to generate “Lorem ipsum” text, but now you can do that ' +
            'right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:'
    },
    {
        id: 3,
        name: "Mihai Dornescu",
        source: "GitHub",
        img: 'https://images.unsplash.com/photo-1593720217529-01f0a5d09aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80',
        text: '           Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo' +
            ' reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ' +
            'ducimus voluptates voluptas?'
    },
    {
        id: 4,
        name: "Mihai Dornescu",
        source: "Udemy",
        img: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        text: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make a type ' +
            'specimen book. It has survived not only five centuries, but also the leap into ' +
            'electronic typesetting, remaining essentially unchanged. It was popularised in the ' +
            '1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more '

    },
]
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const source = document.getElementById('source');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let workedProjects = 0;
// incarca
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoading, 1500);
    showProjects()
})
function showProjects() {
    const item = projects[workedProjects];
    img.src = item.img;
    author.textContent = item.name;
    source.textContent = item.source;
    info.textContent = item.text;
}
// btn
nextBtn.addEventListener('click', function () {
    workedProjects++;
    if (workedProjects > projects.length -1){
        workedProjects = 0;
    }
    showProjects(workedProjects);
})
prevBtn.addEventListener('click', function () {
    workedProjects--;
    if (workedProjects < 0){
        workedProjects = projects.length -1;
    }
    showProjects(workedProjects);
})
