import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";


const gridPhp = getElement('#grid-tailwind');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-tailwind');
const footer = getElement('#footer-year');
const sidebarMenu = getElement('.sidebar');
// console.log(sidebarMenu)

handleSidebar(btnNavbar, sidebar);
const phpProjects = projects.filter((item) => {
	return item.tagJs === 'PHP';
});


filteredProjects(gridPhp, phpProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;

