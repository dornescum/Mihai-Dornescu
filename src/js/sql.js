import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";
// import {img} from '../img/projects/angular.webp'

let gridVue = getElement('#grid-vue');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-vue');
const footer = getElement('#footer-year');

let dataProjects = [];
handleSidebar(btnNavbar, sidebar);


fetch('https://courses-node-api.onrender.com/')
	.then(response => response.json())
	.then(data => {

		console.log(data);
		populateList(data);
	});

function populateList(arg) {
	const value = [];
	arg.map(item => {
		return value.push(item);
	});
	console.log(value);
	gridVue.innerHTML = value.map(item => {
		return `
	<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
                <div class="clip">
                    <div class="bg-slate-50">
                        <img alt="picture" loading="lazy"
                             src='../../src/img/projects/sql.svg' class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300 cursor-not-allowed 
                brightness-50 hover:brightness-100
               ">
<!--                contrast-50 grayscale hover:contrast-100 hover:grayscale-0-->
                    </div>
                    <div class="bg-slate-50 border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
                        <article class="text-stone-500" data-testid=${item?.name}>
                            <h2 class="text-center font-bold p-1 capitalize">${item?.name} </h2>
                            <h4 class="text-center font-bold p-1 capitalize">${item?.instructor} </h4>
<!--                             <p class="px-2 py-2 leading-relaxed">Rating: ${item?.rating}</p>-->
                            <ul class="text-justify md:text-lg absolute bottom-0 mt-2 w-full">
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer ">Rating: ${item?.rating}</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer capitalize">Language: 
${item?.language === "html" ? "Hyper Text MarkUp Language" : item?.language && item?.language === "css" ? "Cascade Style Sheet" : item?.language}</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer">Use case for  : ${item?.useCase === 'client' ? "FrontEnd" : "<span class='text-2xl text-green-500'>Backend</span>"}</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer ">
                                <div class="flex justify-between">
                                <span> Framework: ${item?.framework === 'no' ? "NO" : item?.framework}</span>
                               <span class="mr-2">    Date: ${item?.learningDate}</span>
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
            </div>

`;
	}).join(' ');
}


footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
