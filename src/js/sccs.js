import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";

/*
=====================================
SCHIMBAT PT ANGULAR
=====================================
*/

const gridScss = getElement('#grid-scss');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-scss');
const footer = getElement('#footer-year');
const pageTile = getElement('#page-title');


handleSidebar(btnNavbar, sidebar);
const scssProjects = projects.filter((item) => {
	console.log('item angular ', item)
	return item.tagJs === 'Angular';
});

//! REVERSE 
// scssProjects.reverse();
// console.log('projects ang', scssProjects)
filteredProjects(gridScss, scssProjects);

document.title = "Angular";
pageTile.innerHTML = "Angular";


footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
