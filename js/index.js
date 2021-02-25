
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
// vue js
const app = Vue.createApp({
template: `
        <div class="container mb-4">
            <div class="row display-flex m-3">
             <p class="text-capitalize title-task">{{title}}</p>
             <button  :style="{background : btnText.color}"
             class="btn hero-btn-display">{{btnText.text}}</button>
              </div>
<!--              ====================================-->
              <form @submit="onSubmit" class="add-form">
                 <div class="form-control">
                     <label class="text-center">Task</label>
                     <input type="text" v-model="text" name="text" placeholder="Add Task" />
                </div>
                <input type="submit" value="Save Task" class="btn btn-block" @click="addTask" />
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
    data(){
        return{
            title : "learning vue",
            btnText : {
                text: "new Chapter",
                color: "#f4r5t3",
            },
            text: '  ',
            tasks:[],
        }
    },
    created(){
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
            id:9 ,
            text: "How to create a component in Vue js",
            data: "today"
        },


    ]
    },
    methods:{
        // onClick(){
        // console.log("test")
        //  },
        deleteTask(id){
        if (confirm('are you sure?')){
            this.tasks = this.tasks.filter((task)=> task.id !== id )
           }
           console.log(this.tasks, id)
        },
        onSubmit(e){
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
        addTask(item){
            this.tasks = this.tasks.push(item)
        }
    },
})
app.mount("#vue")

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
