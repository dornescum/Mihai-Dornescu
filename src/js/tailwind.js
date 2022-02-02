import {projects} from "./Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridTailwind = getElement('#grid-tailwind');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-tailwind');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const tailwindProjects = projects.filter((item) => {
	return item.tagCss === 'Tailwind';
});


filteredProjects(gridTailwind, tailwindProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
