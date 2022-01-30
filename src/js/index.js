console.time("timer");
const getElement = (selection) => {
	const element = document.querySelector(selection);
	if (element) return element;
	throw new Error(`Please check "${selection}" selector, no such element exist`);
};

const projects = [{id: 1, title: 'title1'}, {id: 2, title: 'title2'}, {id: 3, title: 'title3'},];
const projectsGrid = getElement('#grid-projects');
console.log(projects);

projectsGrid.innerHTML = projects.map((item) => {
	return `            <div class="flex flex-col md:flex-row  mx-12" data-testid=${item?.id}>
                <div class=" basis-1/2 odd:order-last">
                    <img alt=${item?.title} src="/src/img/projects/pastaAmatriciana.jpg" class="h-96 w-full object-cover rounded-tr-md rounded-br-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300">
                </div>
                <div class=" border p-1 basis-1/2 relative rounded-tl-md rounded-bl-md odd:order-first">
                    <article class="">
                        <h2 class="text-center font-bold p-1">${item?.title}</h2>
                        <ul class="text-justify">
                            <li class="leading-relaxed py-4 px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                                atque commodi corporis minima
                                odio perspiciatis quidem quos rem sapiente suscipit.</li>
                            <li class="pt-8 px-2">tools: Next js</li>
                            <li class="pt-2 px-2">
                                <div>
                                    <p  class="inline-flex">
                                        Github repo:
                                    </p>
                                    <a href="#"  class="inline-flex">link github</a>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <div class="">
                        <a href="#" class="absolute bottom-4 left-4">link to</a>
                    </div>
                </div>
            </div>
`;
}).join(' ');

// `

// navbar
// const toggleNav = getElement('.toggle-nav');
// const sidebarOverlay = getElement('.sidebar-overlay');
// const closeBtn = getElement('.sidebar-close');

// toggleNav.addEventListener('click', () => {
//     sidebarOverlay.classList.add('show')
// })
// closeBtn.addEventListener('click', () => {
//     sidebarOverlay.classList.remove('show')
// })

// loading
const loading = getElement('.loading');

const hideLoading = () => {
	loading.classList.add('hide-loading');
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
	setTimeout(hideLoading, 500);
});
// =====================================

// =====================================


// const footer = document.getElementById("footer");
// const d = new Date();
// let year =d.getFullYear();
// console.log(year);
//
// footer.innerHTML = `
//     <p>${year}</p>
//     `
console.timeEnd("timer");
