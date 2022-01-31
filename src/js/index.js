console.time("timer");
import {projects} from "./Projects.js";

const getElement = (selection) => {
	const element = document.querySelector(selection);
	if (element) return element;
	throw new Error(`Please check "${selection}" selector, no such element exist`);
};

const projectsGrid = getElement('#grid-projects');

projectsGrid.innerHTML = projects.map((item) => {
	if (item.linkPage === ''){
		return `
		<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
                <div class="">
                    <div>
                        <img alt="picture"
                             src=${item?.img} class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300">
                    </div>
                    <div class=" border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72">
                        <article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
                            <h2 class="text-center font-bold p-1">${item?.title}</h2>
                            <ul class="text-justify">
                                <li class="leading-relaxed py-4 px-2">${item?.description}</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer">${item?.tools}</li>
                                <li class="py-2 px-2">
                                    <div>
                                        <p  class="inline-flex">
                                            Repo:
                                        </p>
                                        <a href=${item?.linkRepo} target="_blank" rel="noopener" class="inline-flex">Github</a>
                                    </div>
                                </li>
                                <li class="pt-2 pb-4 px-2 ">
                                    <a href='javascript:;'  rel="noopener" class="text-stone-700 animate-pulse">No website just a repo</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
		`
	}
	return `         
	        <div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
                <div class="">
                    <div>
                        <img alt="picture"
                             src=${item?.img} class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300">
                    </div>
                    <div class=" border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72">
                        <article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
                            <h2 class="text-center font-bold p-1">${item?.title}</h2>
                            <ul class="text-justify">
                                <li class="leading-relaxed py-4 px-2">${item?.description}</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer">${item?.tools}</li>
                                <li class="py-2 px-2">
                                    <div>
                                        <p  class="inline-flex">
                                            Repo:
                                        </p>
                                        <a href=${item?.linkRepo} target="_blank" rel="noopener" class="inline-flex">Github</a>
                                    </div>
                                </li>
                                <li class="pt-2 pb-4 px-2 ">
                                    <a href=${item?.linkPage} target="_blank" rel="noopener" class="text-stone-700 animate-pulse">Visit website</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
	 `;
}).join(' ');

// loading
const loading = getElement('.loading');

const hideLoading = () => {
	loading.classList.add('hide-loading');
};



// incarca
window.addEventListener("DOMContentLoaded", function () {
	setTimeout(hideLoading, 500);
});


const footer = getElement('#footer-year');
const d = new Date();
let year = d.getFullYear();
footer.innerHTML = `
    <p>&copy; ${year}</p>
    `;
console.timeEnd("timer");
