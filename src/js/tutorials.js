import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";


const gridTutorials = getElement('#grid-tutorials');
const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-tutorials');
const footer = getElement('#footer-year');


handleSidebar(btnNavbar, sidebar);

const tutorialsProjects = projects.filter((item) => {
	// console.log(item);
	if (item.tagTutorial === true){
		return item
	}

});


filteredProjects(gridTutorials, tutorialsProjects);



// footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
