import {projects} from "./Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridCypress = getElement('#grid-cypress');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-cypress');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const cypressProjects = projects.filter((item) => {
	return item.tagJs === 'Cypress';
});


filteredProjects(gridCypress, cypressProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
