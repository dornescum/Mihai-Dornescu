console.time("timer");
import { projects } from "./utils/Projects.js";
import { getElement } from "./utils/getElement.js";
import { YEAR } from "./utils/footerYear.js";

import { handleSidebar } from "./utils/handleSidebar.js";

const btnNavbar = getElement("#access-sidebar");
const sidebar = getElement("#sidebar");
const projectsGrid = getElement("#grid-projects");
const footer = getElement("#footer-year");

handleSidebar(btnNavbar, sidebar);
// filteredProjects(projectsGrid, noTutorials);

// loading
const loading = getElement(".loading");

const hideLoading = () => {
  loading.classList.add("hide-loading");
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(hideLoading, 500);
});

footer.innerHTML = `<p>&copy; ${YEAR}</p>`;

//? pagination =================
const itemsPerPage = 9;
let currentPage = 1;
const totalPages = Math.ceil(projects.length / itemsPerPage);

function displayData() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const projectsToDisplay = projects.slice(startIndex, endIndex).map((item) => {
    if (item.linkPage === "") {
      return `
		<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
		<div class="clip">
			<div class="bg-slate-50">
				<img alt="picture" loading="lazy"
					 src=${
             item?.img
           } class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
		shadow-sm hover:shadow-lg cursor-pointer transition duration:300 cursor-not-allowed 
		brightness-50 hover:brightness-100
	   ">
			</div>
			<div class="bg-slate-50 border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
				<article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
					<h2 class="text-center font-bold p-1">${item?.title} </h2>
					 <p class="px-2 py-2 leading-relaxed">Description: ${item?.description}</p>
					 <p class="px-2 py-2 text-sm">${
             item?.tagTutorial === true ? "Tutorial" : ""
           }</p>
					<ul class="text-justify md:text-lg absolute bottom-0">
						<li class="py-2 px-2 hover:text-red-300 cursor-pointer">Tools: ${
              item?.tools
            }</li>
						<li class="py-2 px-2">
							<div>
								<p  class="inline-flex">
									Repository:
								</p>
								<a href=${
                  item?.linkRepo
                } target="_blank" rel="noopener" class="inline-flex">Github</a>
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
		`;
    }
    return `         
	<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
		<div class="">
			<div>
			<a href=${item?.linkPage} target="_blank">
			<img alt="picture" loading="lazy"
					 src=${
             item?.img
           } class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
		shadow-sm hover:shadow-lg cursor-pointer transition duration:300
		brigthness-100  md:brightness-95 md:hover:brightness-100 ">
			</a>
				
			</div>
			<div class="border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
				<article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
					<h2 class="text-center font-bold p-1">${item?.title}</h2>
					<p class="px-2 py-2 leading-relaxed">Description: ${item?.description}</p>
					<p class="px-2 py-2 text-sm">${item?.tagTutorial === true ? "Tutorial" : ""}</p>

					<ul class="text-justify md:text-lg absolute bottom-0">
						<li class="py-2 px-2 hover:text-red-300 cursor-pointer">Tools: ${
              item?.tools
            }</li>
						<li class="py-2 px-2">
							<div>
								<p  class="inline-flex">
									Repository:
								</p>
								<a href=${
                  item?.linkRepo
                } target="_blank" rel="noopener" class="inline-flex">Github</a>
							</div>
						</li>
						<li class="pt-2 px-2 pb-4">
							<a href=${
                item?.linkPage
              } target="_blank" rel="noopener" class="text-stone-700 animate-pulse">Link: Visit website</a>
						</li>
					</ul>
				</article>
			</div>
		</div>
	</div>
`;
  });

  projectsGrid.innerHTML = "";

  projectsToDisplay.forEach((project) => {
    projectsGrid.insertAdjacentHTML("beforeend", project);
  });
}

function updatePagination() {
  const paginationContainer = getElement("#pagination");
  paginationContainer.classList.add("px-4", "py-8");
  paginationContainer.innerHTML = "";

  // create previous button
  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "Previous";
    prevBtn.classList.add("mr-4", "ml-4");
    prevBtn.addEventListener("click", () => {
      currentPage--;
      displayData();
      updatePagination();
    });
    paginationContainer.appendChild(prevBtn);
  }

  // create page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.innerText = i;
    // pageBtn.classList.add("mr-4");
    if (i === currentPage) {
      pageBtn.classList.add(
        "bg-blue-500",
        "text-white",
        "hover:bg-gray-300",
        "px-4",
        "py-2"
      );
    } else {
      pageBtn.classList.add(
        "bg-gray-200",
        "text-gray-700",
        "hover:bg-gray-300",
        "px-4",
        "py-2"
      );
      pageBtn.addEventListener("click", () => {
        currentPage = i;
        displayData();
        updatePagination();
      });
    }
    paginationContainer.appendChild(pageBtn);
  }

  // create next button
  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.classList.add("ml-4", "mr-4", "px-4");
    nextBtn.addEventListener("click", () => {
      currentPage++;
      displayData();
      updatePagination();
    });
    paginationContainer.appendChild(nextBtn);
  }
}

displayData();
updatePagination();

console.timeEnd("timer");
