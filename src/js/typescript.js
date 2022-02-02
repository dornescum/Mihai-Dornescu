import {projects} from "./Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridTypescript = getElement('#grid-typescript');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-typescript');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const typescriptProjects = projects.filter((item) => {
	return item.tagTs === 'Typescript';
});


filteredProjects(gridTypescript, typescriptProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
