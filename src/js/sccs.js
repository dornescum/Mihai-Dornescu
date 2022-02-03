import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

const gridScss = getElement('#grid-scss');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-scss');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);
const scssProjects = projects.filter((item) => {
	return item.tagCss==="Scss";
});


filteredProjects(gridScss, scssProjects);



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
