import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridNext = getElement('#grid-node');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-node');
const footer = getElement('#footer-year');

handleSidebar(btnNavbar, sidebar);

const nodeProjects =projects.filter((item)=>{
	return item.tagJs ==='Nodejs'
});

filteredProjects(gridNext, nodeProjects);


footer.innerHTML = `<p>&copy; ${YEAR}</p>`
