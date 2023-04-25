console.time("timer");
import {projects} from "./utils/Projects.js";
import {getElement} from './utils/getElement.js'
import {YEAR} from "./utils/footerYear.js";

import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";


const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar');
const projectsGrid = getElement('#grid-projects');
const footer = getElement('#footer-year');

const pagination = getElement('#pagination');
const prev = pagination.firstElementChild;
const next = pagination.lastElementChild.lastElementChild;
const list = pagination.children;



const noTutorials = projects.filter(item =>!item.tagTutorial)
// console.log(noTutorials);

handleSidebar(btnNavbar, sidebar);
// filteredProjects(projectsGrid, noTutorials);

// loading
const loading = getElement('.loading');

const hideLoading = () => {
	loading.classList.add('hide-loading');
};


// incarca
window.addEventListener("DOMContentLoaded", function () {
	setTimeout(hideLoading, 500);
});


footer.innerHTML = `<p>&copy; ${YEAR}</p>`

//? =================
const pageSize = 9; // set the number of items per page
let currentPage = 1; // initialize the current page number

function displayData() {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = noTutorials.slice(startIndex, endIndex);
//   debugger;
  const list = document.getElementById("grid-projects");
//   console.log(list)
// debugger;
  list.innerHTML = currentPageData.map(item => {
	return `
	<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
	<div class="clip">
		<div class="bg-slate-50">
			<img alt="picture" loading="lazy"
				 src=${item?.img} class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
	shadow-sm hover:shadow-lg cursor-pointer transition duration:300 cursor-not-allowed 
	brightness-50 hover:brightness-100
   ">
		</div>
		<div class="bg-slate-50 border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
			<article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
				<h2 class="text-center font-bold p-1">${item?.title} </h2>
				 <p class="px-2 py-2 leading-relaxed">Description: ${item?.description}</p>
				 <p class="px-2 py-2 text-sm">${item?.tagTutorial === true ? "Tutorial" : ""}</p>
				<ul class="text-justify md:text-lg absolute bottom-0">
					<li class="py-2 px-2 hover:text-red-300 cursor-pointer">Tools: ${item?.tools}</li>
					<li class="py-2 px-2">
						<div>
							<p  class="inline-flex">
								Repository:
							</p>
							<a href=${item?.linkRepo} target="_blank" rel="noopener" class="inline-flex">Github</a>
						</div>
					</li>
					<li class="pt-2 px-2 pb-4">
						<a href='javascript:;'  rel="noopener" class="text-stone-700 animate-pulse">
						<span class="text-2xl font-bold text-black"> No </span>website just a repo</a>
					</li>
				</ul>
			</article>
		</div>
	</div>
</div>
	`
  }).join(' ');

//   currentPageData.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item.name;
//     list.appendChild(li);
//   });
}

displayData(); // display initial data
console.log(prev.firstElementChild)
const first = prev.firstElementChild; 
	console.log('FIRST : ',first)
	if(currentPage > 1){
		first.classList.add('MyClass'); 
	}
prev.addEventListener("click", () => {
  if (currentPage > 1) {
	const first = prev.firstElementChild; 
	console.log(first)
	// prev.firstElementChild.classList.add('MyClass'); 
    currentPage--;
	// if(currentPage > 1){
	// 	prev.style.backgroundColor = 'red'; 

	// }
    displayData();
  }
});

next.addEventListener("click", () => {
  if (currentPage < Math.ceil(projects.length / pageSize)) {
    currentPage++;
    displayData();
  }
});

console.timeEnd("timer");
