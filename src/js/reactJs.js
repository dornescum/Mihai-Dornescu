import {projects} from "./Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridReact = getElement('#grid-react');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-react');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const reactProjects = projects.filter((item) => {
	return item.tagJs === 'React';
});


filteredProjects(gridReact, reactProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
