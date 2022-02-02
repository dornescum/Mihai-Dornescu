import {projects} from "./Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridVue = getElement('#grid-vue');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-vue');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const vueProjects = projects.filter((item) => {
	return item.tagJs === 'Vue Js';
});


filteredProjects(gridVue, vueProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
