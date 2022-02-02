import {projects} from "./Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridJs = getElement('#grid-js');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-js');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const jsProjects = projects.filter((item) => {
	return item.tagJs === 'Javascript';
});


filteredProjects(gridJs, jsProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
