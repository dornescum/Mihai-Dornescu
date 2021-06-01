class Project {
    constructor(title, image, desc, link, category) {
        this.link = link
        this.image = image
        this.category = category
        this.title = title
        this.desc = desc
    }
}

class ProjectsList {
    projects = [
        new Project(
            "Easy game",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "Vanilla JS",
            "https://github.com/dornescum/SimpleGame",
            "Vanilla Js"
        ),
        new Project(
            "Weather",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            " ES6 Classes",
            "https://reactjs.org/",
            "Vanilla Js"
        ),
        new Project(
            "Lorem Ipsum",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "Not Ready!",
            "https://www.javascript.com/",
            "Vanilla Js"
        ),
        new Project(
            "Search filter",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "Search in vanilla Js",
            "https://github.com/dornescum/SearchFilter-JS",
            "Vanilla Js"
        ),
        // 5
        new Project(
            "React bootstrap",
            "https://i.kym-cdn.com/photos/images/facebook/001/237/072/307.jpg",
            "react",
            "https://www.javascript.com/",
            "React Js"
        ),
        // 6
        new Project(
            "Colors",
            "img/colors.jpg",
            "Not Ready!",
            "https://github.com/dornescum/ColorsList",
            "Vanilla Js"
        ),
        // 7
        new Project(
            "simple js game",
            "https://i.kym-cdn.com/photos/images/facebook/001/237/072/307.jpg",
            "js3",
            "https://www.javascript.com/",
            "Vanilla Js"
        ),
        // 8
        new Project(
            "simple js game",
            "https://i.kym-cdn.com/photos/images/facebook/001/237/072/307.jpg",
            "js",
            "https://www.javascript.com/",
            "Vanilla Js"
        ),
        // 9
        new Project(
            "Shopping List",
            "https://images.unsplash.com/photo-1536546025187-bad5bfc86628?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "add remove items",
            "https://github.com/dornescum/shoppingList-Bitfumes",
            "Vue Js"
        ),
        // 10
        new Project(
            "Restaurant mobile first",
            "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "Bootstrap vue",
            "https://github.com/dornescum/RestaurantVue",
            "Vue Js"
        ),
        // 11
        new Project(
            "Random site",
            "img/random.png",
            "Bootstrap vue",
            "https://github.com/dornescum/constructionVue",
            "Vue Js"
        ),
        // 12
        new Project(
            "Handy men Vue",
            "https://i.kym-cdn.com/photos/images/facebook/001/237/072/307.jpg",
            "Not Ready!",
            "https://www.javascript.com/",
            "Vue Js"
        ),
    ]

    render() {
        const renderProjects = document.getElementById("future");
        const projectList = document.createElement("div");
        projectList.classList.add("row");
        projectList.classList.add("mb-2");
        for (const item of this.projects) {
            const projectItem = document.createElement("div");
            projectItem.className = "col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-2"
            projectItem.innerHTML = `
<!--               <div class="col-lg-3 col-md-4 col-sm-6">-->
                <article class="article">
                    <a href="${item.link}" target="_blank">
                        <img src="${item.image}" alt="menu item" class="main-photo"/>
                    </a>
                    <div class="item-info">
                        <h4 class="yellow-color">${item.category}</h4>

                        <header>
                            <h4 class="pt-1">${item.title}</h4>
                        </header>
                      
                    </div>

                </article>
            </div>
            `
            projectList.append(projectItem);
        }
        renderProjects.appendChild(projectList)
    }
}

// ProjectsList.render();
const productList = new ProjectsList();
productList.render();

// project
const projects = document.getElementById('projects');
console.log(projects)


window.addEventListener('DOMContentLoaded', () => {
    const projectsDone = [
        {
            name: 'Topo-Online',
            link: "http://misu.topo-online.ro/FirmeCadastruTemplate/index.html",
            desc: ' html, css, js',
            id: 1
        },
        {
            name: 'Vanzare Apartament',
            link: "https://apartament-1a2c9.web.app/",
            desc: ' react',
            id: 2
        },
        {
            name: 'Voluntar',
            link: "http://pi-frontend.cpco.ro/",
            desc: ' html, css, js',
            id: 3
        },
        {
            name: 'Mirage',
            link: "https://mirage-a2c18.web.app/",
            desc: ' react',
            id: 4
        },

    ]
    let work = projectsDone.map((el) => {
        const {id, link, desc, name} = el;
        return ` <div class="col-lg-4 col-sm-6 py-4">
        <div class="card hover" >
            <div class="card-body">
             <h5 class="card-title" style="margin-left: 1rem">${name}</h5>
                <p class="card-text" style="margin-left: 1rem">${desc}</p>
                <a href="${link}" class="btn btn-future" target="_blank">Viziteaza</a>
             </div>
            </div>
        </div>
`
    }).join('')
    projects.innerHTML = work;
})

