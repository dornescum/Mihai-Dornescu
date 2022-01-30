console.time("timer");


const getElement = (selection) => {
	const element = document.querySelector(selection);
	if (element) return element;
	throw new Error(`Please check "${selection}" selector, no such element exist`);
};


const projects = [{
	id: 1,
	title: "Mock Up Delivery Website",
	description: "An exercise in which I used Next js and Tailwind Css to create a website for an imaginary company that produces and processes food. Using ISR & SSR, hybrid.",
	tools: "Next js, Tailwind Css",
	linkRepo: "https://github.com/dornescum/tailwind-nextJs-setup",
	linkPage: "https://tailwind-next-js-menu.vercel.app/",
	img: "@../../src/img/projects/mockUpMenu.webp"
}, {
	id: 2,
	title: "Best Car Ever",
	description: "An exercise in which I used Next js and Scss to create a website where I sell a car.",
	tools: "Next js, Scss, Simple-react-lightbox, React Icons",
	linkRepo: "https://github.com/dornescum/tailwind-nextJs-setup",
	linkPage: "https://tailwind-next-js-menu.vercel.app/",
	img: "@../../src/img/projects/opelDan.webp"
},
	{
	id: 3,
	title: "Admin Panel",
	description: "An admin panel in which I tested Cypress together with React js.",
	tools: "React js, React-router, Styled-Components, Cypress, Context Api",
	linkRepo: "https://github.com/dornescum/adminPannel",
	linkPage: "https://dornescum.github.io/Mihai-Dornescu/",
	img: "@../../src/img/projects/github.webp"
	},
	{
		id: 4,
		title: "Cypress testing FirmeCadastru.ro",
		description: "An admin panel in which I tested Cypress together with React js.",
		tools: "React js, React-router, Styled-Components, Cypress, Context Api",
		linkRepo: "https://github.com/dornescum/FC",
		linkPage: "https://firmecadastru.ro/",
		img: "@../../src/img/projects/cypress.webp"
	},
];
const projectsGrid = getElement('#grid-projects');

projectsGrid.innerHTML = projects.map((item) => {
	return `         
	        <div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
                <div class="">
                    <div>
                        <img alt="picture"
                             src=${item?.img} class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300">
                    </div>
                    <div class=" border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72">
                        <article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
                            <h2 class="text-center font-bold p-1">${item?.title}</h2>
                            <ul class="text-justify">
                                <li class="leading-relaxed py-4 px-2">${item?.description}</li>
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer">${item?.tools}</li>
                                <li class="py-2 px-2">
                                    <div>
                                        <p  class="inline-flex">
                                            Repo:
                                        </p>
                                        <a href=${item?.linkRepo} target="_blank"  class="inline-flex">Github</a>
                                    </div>
                                </li>
                                <li class="pt-2 pb-4 px-2 ">
                                    <a href=${item?.linkPage} target="_blank" class="text-stone-700 animate-pulse">Visit website</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
	 `;
}).join(' ');

// loading
const loading = getElement('.loading');

const hideLoading = () => {
	loading.classList.add('hide-loading');
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
	setTimeout(hideLoading, 500);
});


const footer = getElement('#footer-year');
const d = new Date();
let year = d.getFullYear();
footer.innerHTML = `
    <p>&copy; ${year}</p>
    `;
console.timeEnd("timer");
