class Project {
    constructor(title, image, desc, link, category) {
        this.link = link
        this.image = image
        this.category = category
        this.title = title
        this.desc = desc
    }
}

// console.log(new Project())

class ProjectsList {
    projects = [
        new Project(
            "Easy game",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "A simple game with some basic JS",
            "https://github.com/dornescum/SimpleGame",
            "Vanilla Js"
        ),
        new Project(
            "Weather",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "A weather web app, ES6 Classes",
            "https://reactjs.org/",
            "Vanilla Js"
        ),
        new Project(
            "Lorem Ipsum",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "Generating paragraphs from an array",
            "https://www.javascript.com/",
            "Vanilla Js"

        ),
        new Project(
            "Search filter",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "Simple search in vanilla javascript",
            "https://github.com/dornescum/SearchFilter-JS",
            "Vanilla Js"
        ),
        // 5
        new Project(
            "React bootstrap",
            "https://i.kym-cdn.com/photos/images/facebook/001/237/072/307.jpg",
            "react with bootstrap navbar",
            "https://www.javascript.com/",
            "React Js"
        ),
        // 6
        new Project(
            "Colors",
            "https://i.kym-cdn.com/photos/images/facebook/001/237/072/307.jpg",
            "colors id #",
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
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "add remove items",
            "https://github.com/dornescum/shoppingList-Bitfumes",
            "Vue Js"
        ),
        // 10
        new Project(
            "Restaurant mobile first",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "Basic components, bootstrap vue, mobile first",
            "http://vuejs-restaurant.s3-website.eu-west-3.amazonaws.com/",
            "Vue Js"
        ),
        // 11
        new Project(
            "Random site",
            "https://s3.hulkshare.com/song_images/original/9/e/9/9e983f57483bce33d02502c27cba56d2.jpg?dd=1423715114",
            "Basic components, slots, bootstrap vue",
            "https://github.com/dornescum/constructionVue",
            "Vue Js"
        ),
        // 12
        new Project(
            "Handy men Vue",
            "https://i.kym-cdn.com/photos/images/facebook/001/237/072/307.jpg",
            "",
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
            projectItem.className="col-lg-3 col-md-4 col-sm-6 mb-2"
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
                        <p class="item-text">
                            ${item.desc}
                        </p>
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
// console.log(ProjectsList);
