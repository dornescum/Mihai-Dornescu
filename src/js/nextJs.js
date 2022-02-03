import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridNext = getElement('#grid-next');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-next');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);

const nextProjects =projects.filter((item)=>{
	return item.tagJs ==='Next'
});

filteredProjects(gridNext, nextProjects);


footer.innerHTML = `<p>&copy; ${YEAR}</p>`
