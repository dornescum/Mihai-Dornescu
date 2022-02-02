import {projects} from "./Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridCss = getElement('#grid-css');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-css');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const cssProjects = projects.filter((item) => {
	return item.tagCss==="Css";
});


filteredProjects(gridCss, cssProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
