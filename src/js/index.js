console.time("timer");
const getElement = (selection) => {
	const element = document.querySelector(selection);
	if (element) return element;
	throw new Error(`Please check "${selection}" selector, no such element exist`);
};


const projects = [
	{
	id: 1,
	title: "title1",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet dolores, ducimus ex fugiat illo laborum\n" +
			"        minus molestiae nesciunt nihil provident ullam vitae voluptates! Accusantium aliquam asperiores aspernatur\n" +
			"        assumenda, atque blanditiis consequatur consequuntur dolore ipsa iste itaque iusto natus, nesciunt numquam\n" +
			"        officia pariatur reiciendis repudiandae sunt ut veritatis voluptates voluptatibus!",
		tools:"Next js, Tailwind css",
		linkRepo:"",
		linkPage:"",
		img:"@../../src/img/projects/mockUpMenu.jpg"
	},
	{
	id: 2,
	title: "title2",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet dolores, ducimus ex fugiat illo laborum\n" +
			"        minus molestiae nesciunt nihil provident ullam vitae voluptates! Accusantium aliquam asperiores aspernatur\n" +
			"        assumenda, atque blanditiis consequatur consequuntur dolore ipsa iste itaque iusto natus, nesciunt numquam\n" +
			"        officia pariatur reiciendis repudiandae sunt ut veritatis voluptates voluptatibus!",
		tools:"Next js, Tailwind css",
		linkRepo:"",
		linkPage:"",
		img:"@../../src/img/projects/mockUpMenu.jpg"
	},
	{
	id: 3,
	title: "title3",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet dolores, ducimus ex fugiat illo laborum\n" +
			"        minus molestiae nesciunt nihil provident ullam vitae voluptates! Accusantium aliquam asperiores aspernatur\n" +
			"        assumenda, atque blanditiis consequatur consequuntur dolore ipsa iste itaque iusto natus, nesciunt numquam\n" +
			"        officia pariatur reiciendis repudiandae sunt ut veritatis voluptates voluptatibus!",
		tools:"Next js, Tailwind css",
		linkRepo:"",
		linkPage:"",
		img:"@../../src/img/projects/mockUpMenu.jpg"
	},

	];
const projectsGrid = getElement('#grid-projects');

projectsGrid.innerHTML = projects.map((item) => {
	return `         
	        <div class="flex flex-col mx-4 md:mx-6 lg:mx-12 relative" data-testid={item?.id}>
                <div class="">
                    <div>
                        <img alt="picture"
                             src=${item?.img} class="h-48 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300">
                    </div>
                    <div class=" border p-1 rounded-br-md rounded-bl-md">
                        <article class="">
                            <h2 class="text-center font-bold p-1">${item?.title}</h2>
                            <ul class="text-justify">
                                <li class="leading-relaxed py-4 px-2">${item?.description}</li>
                                <li class="py-2 px-2 hover:text-red-300">${item?.tools}</li>
                                <li class="py-2 px-2">
                                    <div>
                                        <p  class="inline-flex">
                                            Github repo:
                                        </p>
                                        <a href="#"  class="inline-flex">link Github</a>
                                    </div>
                                </li>
                                <li class="pt-2 pb-4 px-2 ">
                                    <a href="#" class="">Visit website</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
	 `;
}).join(' ');


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
