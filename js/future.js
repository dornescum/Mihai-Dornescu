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
            "img/colors.jpg",
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
            "https://images.unsplash.com/photo-1536546025187-bad5bfc86628?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "add remove items",
            "https://github.com/dornescum/shoppingList-Bitfumes",
            "Vue Js"
        ),
        // 10
        new Project(
            "Restaurant mobile first",
            "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "Basic components, bootstrap vue, mobile first",
            "https://github.com/dornescum/RestaurantVue",
            "Vue Js"
        ),
        // 11
        new Project(
            "Random site",
            "img/random.png",
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


// vue
// vue js
 const appVue = Vue.createApp({
    template: `
        <div class="container mb-4">
            <div class="row display-flex m-3">
             <p class="text-capitalize title-task">{{title}}</p>
<!--             <button  :style="{background : btnText.color}"-->
<!--             class="btn hero-btn-display">{{btnText.text}}</button>-->

<!--before vue-->
<div class="text-center">

    <progress></progress>
</div>

              </div>
<!--              ====================================-->
              <form @submit="onSubmit" class="add-form">
                 <div class="form-control">
                     <label class="text-center">Chapters</label>
                     <input type="text" v-model.lazy="text" name="text" placeholder="Add Task" />
                </div>
                <input type="submit" value="add chapter" class="btn btn-block" @click="addTask" />
               </form>
<!--              ===========================================-->
              <div  v-for="task in tasks" :key="task.id" class="row display-flex task m-1">
                    <div class="col-lg-11 col-md-8">
                    
                        <p class="p-1 text-capitalize">{{task.text}}</p>
                       
                    </div>
                    <div class="col-lg-1 col-md-4 border-lesson">
                     <i @click="deleteTask(task.id)" class="fas fa-times  color-red"></i>
                     </div>
               </div>
        </div>
`,
    data() {
        return {
            title: "learning vue",
            btnText: {
                text: "new Chapter",
                color: "#f4r5t3",
            },
            text: '  ',
            tasks: [],
        }
    },
    created() {
        this.tasks = [
            {
                id: 1,
                text: "How to import js file in Vue component ?",
                data: "yesterday",
                learned: true
            },
            {
                id: 2,
                text: "How to call rest API from Vue js?",
                data: "today",
                learned: false

            },
            {
                id: 3,
                text: "List some features of Vue js",
                data: "today"
            },
            {
                id: 4,
                text: "Explain Lyfe cycle if Vue instance",
                data: "today"
            },
            {
                id: 5,
                text: "How to create an instance of Vue js?",
                data: "today"
            },
            {
                id: 6,
                text: "How to create  two way binding",
                data: "today"
            },
            {
                id: 7,
                text: "What are Components Vue js",
                data: "today"
            },
            {
                id: 8,
                text: "Directives in Vue js",
                data: "today"
            },
            {
                id: 9,
                text: "How to create a component in Vue js",
                data: "today"
            },


        ]
    },
    methods: {
        // onClick(){
        // console.log("test")
        //  },
        deleteTask(id) {
            if (confirm('are you sure?')) {
                this.tasks = this.tasks.filter((task) => task.id !== id)
            }
            // console.log(this.tasks, id)
        },
        onSubmit(e) {
            e.preventDefault()
            if (!this.text) {
                alert('Please add a task')
                return
            }
            const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
            }
            this.text = ''
        },
        addTask(item) {
            this.tasks = this.tasks.push(item)
        }
    },
})
appVue.mount("#vue")