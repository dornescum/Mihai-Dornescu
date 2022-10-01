import { projects } from "./utils/Projects.js";
import { getElement } from "./utils/getElement.js";
import { YEAR } from "./utils/footerYear.js";
import { handleSidebar } from "./utils/handleSidebar.js";
import { filteredProjects } from "./utils/filteredProjects.js";
// import {img} from '../img/projects/accordion.webp'

let gridVue = getElement("#grid-vue");
const btnNavbar = getElement("#access-sidebar");
const sidebar = getElement("#sidebar-vue");
const footer = getElement("#footer-year");
const modal = getElement("#modalSql");
const closeModal = getElement("#closeModal");
const formBtn = getElement("#formBtn");

// let title;
let dataProjects = [];
handleSidebar(btnNavbar, sidebar);

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let courses = document.getElementById("courses").value;

//   let url = `http://localhost:3001/?`;
  let url = `https://courses-node-api.onrender.com/?`;

  if (courses.length > 0) {
    url += `courses=${courses}`;
	console.log(url)
  }
  console.log(courses);
  // fetch('https://courses-node-api.onrender.com/')
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
        populateList(data);
    });
});

function populateList(el) {
  const value = [];
  const someValue = el.queryFilter;
 someValue.map((item) => {
    return value.push(item);
  });
  gridVue.innerHTML = value
    .map((item) => {
      return `
	<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
                    <div class="bg-slate-50 border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
                        <article class="text-stone-500" data-testid=${
                          item?.name
                        }>
                            <h2 class="text-center font-bold p-1 capitalize">${
                              item?.name
                            } </h2>
                            <h4 class="text-center font-bold p-1 capitalize">${
                              item?.instructor
                            } </h4>
                            <ul class="text-justify md:text-lg absolute bottom-0 mt-2 w-full">
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer ">Rating: ${
                                  item?.rating
                                }</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer capitalize">Language: 
${
  item?.language === "html"
    ? "Hyper Text MarkUp Language"
    : item?.language && item?.language === "css"
    ? "Cascade Style Sheet"
    : item?.language
}</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer">Use case for  : ${
                                  item?.useCase === "client"
                                    ? "FrontEnd"
                                    : "<span class='text-2xl text-green-500'>Backend</span>"
                                }</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer ">
                                <div class="flex justify-between">
                                <span class="capitalize"> Framework: ${
                                  item?.framework === "no"
                                    ? "NO"
                                    : item?.framework
                                }</span>
                               <span class="mr-2">    Date: ${
                                 item?.learningDate
                               }</span>
                                </div>
                                </li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer capitalize">
                                   <div class="flex justify-between">
                                <span>  Date: ${item?.platform}</span>
                               <span class="mr-2">    Id: ${item?.id}</span>
                                </div>
                               </li>
                            </ul>
                        </article>
                </div>
            </div>
`;
    })
    .join(" ");
}

closeModal.addEventListener("click", () => {
  // console.log('click');
  if (modal.classList.contains("modal")) {
    modal.classList.remove("modal");
    modal.classList.add("no-modal");
    // modal.classList.toggle('no-modal')
  }
});

footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
