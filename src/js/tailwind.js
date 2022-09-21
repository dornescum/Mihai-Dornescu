import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";


const gridTailwind = getElement('#grid-tailwind');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-tailwind');
const footer = getElement('#footer-year');
const sidebarMenu = getElement('.sidebar');
// console.log(sidebarMenu)

handleSidebar(btnNavbar, sidebar);
const tailwindProjects = projects.filter((item) => {
	return item.tagCss === 'Tailwind';
});


filteredProjects(gridTailwind, tailwindProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;

// sidebarMenu.innerHTML = `
//  <ul class="w-48 rounded-br-md h-full md:h-[700px] bg-stone-50 pt-8">
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="index.html" class="py-2 md:py-4">
//                         Home
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="reactJs.html" class="py-2 md:py-4">
//                         React js
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="nextJs.html" class="py-2 md:py-4">
//                         Next js
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="javascript.html" class="py-2 md:py-4">
//                         Javascript
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="typescript.html" class="py-2 md:py-4">
//                         Typescript
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="vue.html" class="py-2 md:py-4">
//                         Vue js
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="css.html" class="py-2 md:py-4">
//                         Css
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="scss.html" class="py-2 md:py-4">
//                         Scss
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="javascript:;" class="py-4 hover:text-stone-50">
//                         Bootstrap
//                     </a>
//                 </li>
//                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="tailwind.html" class="py-2 md:py-4">
//                         Tailwind
//                     </a>
//                 </li>
//                 <li class="block py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="cypress.html" class="py-4">
//                         Cypress
//                     </a>
//                 </li>
//                 <li class="block py-4 pl-4 md:pl-8  lg:pl-12">
//                     <a href="tutorials.html" class="py-4">
//                         Tutorials
//                     </a>
//                 </li>
//             </ul>
// `
