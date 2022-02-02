console.time("timer");
import {projects} from "./Projects.js";
import {getElement} from './utils/getElement.js'
import {YEAR} from "./utils/footerYear.js";

import {handleSidebar} from "./utils/handleSidebar.js";
import {filteredProjects} from "./utils/filteredProjects.js";


const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar');
const projectsGrid = getElement('#grid-projects');
const footer = getElement('#footer-year');

console.log(sidebar);

handleSidebar(btnNavbar, sidebar);
filteredProjects(projectsGrid, projects);

// loading
const loading = getElement('.loading');

const hideLoading = () => {
	loading.classList.add('hide-loading');
};


// incarca
window.addEventListener("DOMContentLoaded", function () {
	setTimeout(hideLoading, 500);
});


footer.innerHTML = `<p>&copy; ${YEAR}</p>`

console.timeEnd("timer");
