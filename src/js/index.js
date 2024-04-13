console.time("timer");
import {projects} from "./utils/Projects.js";
import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";

import {handleSidebar} from "./utils/handleSidebar.js";

const btnNavbar = getElement("#access-sidebar");
const sidebar = getElement("#sidebar");
const projectsGrid = getElement("#grid-projects");
const footer = getElement("#footer-year");
const form = document.getElementById('myForm');


handleSidebar(btnNavbar, sidebar);
// filteredProjects(projectsGrid, noTutorials);

// loading
const loading = getElement(".loading");

const hideLoading = () => {
    loading.classList.add("hide-loading");
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoading, 500);
});

footer.innerHTML = `<p>&copy; ${YEAR}</p>`;

//? pagination =================
const itemsPerPage = 9;
let currentPage = 1;
const totalPages = Math.ceil(projects.length / itemsPerPage);

function displayData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const projectsToDisplay = projects.slice(startIndex, endIndex).map((item) => {
        if (item.linkPage === "") {
            return `
		<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
		<div class="clip">
			<div class="bg-slate-50">
				<img alt=${item.title} loading="lazy"
					 src=${item?.img} title=${item?.desc ? item?.desc : ''} data-testid=${item?.id} id=${item?.id}
					 
					 class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
		shadow-sm hover:shadow-lg transition duration:300 cursor-not-allowed 
		brightness-50 hover:brightness-100 image
	   ">
			</div>
			<div class="bg-slate-50 border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
				<article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
					<h2 class="text-center font-bold p-1">${item?.title} </h2>
					 <p class="px-2 py-2 leading-relaxed">Description: ${item?.description}</p>
					 <p class="px-2 py-2 text-sm">${item?.tagTutorial === true ? "Tutorial" : ""}</p>
					<ul class="text-justify md:text-lg absolute bottom-0">
						<li class="py-2 px-2 hover:text-red-300 cursor-pointer">Tools: ${item?.tools}</li>
						<li class="py-2 px-2">
							<div>
								<p  class="inline-flex">
									Repository:
								</p>
								<a href=${item?.linkRepo} target="_blank" rel="noopener" class="inline-flex">Github</a>
							</div>
						</li>
						<li class="pt-2 px-2 pb-4">
							<a href='javascript:;'  rel="noopener" class="text-stone-700 animate-pulse">
							<span class="text-2xl font-bold text-black"> No </span>website just a repo</a>
						</li>
					</ul>
				</article>
        
				<div class="absolute bottom-0 right-0">
				 <button onclick="openModal(${item?.id}, event)" class="more-info-button p-1 bg-zinc-600 rounded-sm text-white">More Info</button>
                </div>
			</div>
		</div>
	</div>
		`;
        }
        return `         
	<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
		<div class="">
			<div>
			<a href=${item?.linkPage} target="_blank">
			<img alt=${item?.title} loading="lazy"
					 src=${item?.img} title=${item?.desc ? item?.desc : ''} data-testid=${item?.id} id=${item?.id}
					 class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
		shadow-sm hover:shadow-lg cursor-pointer transition duration:300
		brigthness-100  md:brightness-95 md:hover:brightness-100 image">
			</a>
				
			</div>
			<div class="border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
				<article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
					<h2 class="text-center font-bold p-1">${item?.title}</h2>
					<p class="px-2 py-2 leading-relaxed">Description: ${item?.description}</p>
					<p class="px-2 py-2 text-sm">${item?.tagTutorial === true ? "Tutorial" : ""}</p>

					<ul class="text-justify md:text-lg absolute bottom-0">
						<li class="py-2 px-2 hover:text-red-300 cursor-pointer">Tools: ${item?.tools}</li>
						<li class="py-2 px-2">
							<div>
								<p  class="inline-flex">
									Repository:
								</p>
								<a href=${item?.linkRepo} target="_blank" rel="noopener" class="inline-flex">Github</a>
							</div>
						</li>
						<li class="pt-2 px-2 pb-4">
							<a href=${item?.linkPage} target="_blank" rel="noopener" class="text-stone-700 animate-pulse">Link: Visit website</a>
						</li>
					</ul>
				</article>
				<div class="absolute bottom-0 right-0">
				 <button onclick="openModal(${item?.id}, event)" class="more-info-button p-1 bg-zinc-600 rounded-sm text-white "> <span class="animate-ping">More Info</span></button>
                </div>
				 
			</div>
		</div>
	</div>
`;
    });

    window.openModal = (projectId, event) => {
        // event.preventDefault();
        const modal = document.getElementById('myModal');
        const modalContent = document.getElementById('modalContent');
        const description = document.getElementById('modalDescription');

        if (!modal || !modalContent) {
            console.error('Modal or Modal Content not found');
            return;
        }

        const project = projects.find(item => item.id === projectId);

        description.innerHTML = `<h2>${project.title}</h2>
                            <br>
                           <p>${project.extra.split('.').join('.<br><br>')}</p>`;
        modal.style.display = 'block';
    };



    projectsGrid.innerHTML = "";

    projectsToDisplay.forEach((project) => {
        projectsGrid.insertAdjacentHTML("beforeend", project);
    });
}

// // Function to close the modal
window.closeModal = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
};



function updatePagination() {
    const paginationContainer = getElement("#pagination");
    paginationContainer.classList.add("px-4", "py-8");
    paginationContainer.innerHTML = "";

    // create previous button
    if (currentPage > 1) {
        const prevBtn = document.createElement("button");
        prevBtn.innerText = "Previous";
        prevBtn.classList.add("mr-4", "ml-4");
        prevBtn.addEventListener("click", () => {
            currentPage--;
            displayData();
            updatePagination();
        });
        paginationContainer.appendChild(prevBtn);
    }

    // create page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.innerText = i;
        // pageBtn.classList.add("mr-4");
        if (i === currentPage) {
            pageBtn.classList.add("bg-blue-500", "text-white", "hover:bg-gray-300", "px-4", "py-2");
        } else {
            pageBtn.classList.add("bg-gray-200", "text-gray-700", "hover:bg-gray-300", "px-4", "py-2");
            pageBtn.addEventListener("click", () => {
                currentPage = i;
                displayData();
                updatePagination();
            });
        }
        paginationContainer.appendChild(pageBtn);
    }

    // create next button
    if (currentPage < totalPages) {
        const nextBtn = document.createElement("button");
        nextBtn.innerText = "Next";
        nextBtn.classList.add("ml-4", "mr-4", "px-4");
        nextBtn.addEventListener("click", () => {
            currentPage++;
            displayData();
            updatePagination();
        });
        paginationContainer.appendChild(nextBtn);
    }
}

displayData();
updatePagination();


// formular


// window.onload = function() {
//     setTimeout(function() {
//         const element = document.getElementById('form-section');
//
//
//         const backdrop = document.querySelector('.backdrop');
//         const footer = document.getElementById('footer');
//         const pagination = document.getElementById('pagination');
//         const hero = document.getElementById('hero');
//
//         backdrop.classList.add('bg-gray-900', 'blur-lg', 'w-full', 'h-full', 'absolute');
//         projectsGrid.classList.add('hidden');
//         pagination.classList.add('hidden');
//         footer.classList.add('hidden');
//         hero.classList.add('hidden');
//         // element.classList.add('w-4/5');
//         element.classList.remove('hidden');
//         // element.classList.remove('hidden');
//
//
//         // Close button handler
//         document.querySelector('.close-button').addEventListener('click', function() {
//             element.classList.add('hidden');
//             backdrop.classList.remove('bg-gray-900', 'blur-lg', 'w-full', 'h-full', 'absolute');
//             projectsGrid.classList.remove('hidden');
//             pagination.classList.remove('hidden');
//             footer.classList.remove('hidden');
//             hero.classList.remove('hidden');
//         });
//
//         document.getElementById('myForm').addEventListener('submit', function(e) {
//             e.preventDefault();
//
//             // Do your form submission logic here
//             const name = document.getElementById('name').value;
//             const phone = document.getElementById('phone').value;
//             const email = document.getElementById('email').value;
//             const message = document.getElementById('message').value;
//
//             const date = new Date()
//             console.log('date : ',date)
//             console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}, Date: ${message}`);
//             // start validation
//             if (validateForm()) {
//             fetch('https://your-endpoint.com/create', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({name: name, phone: phone, email: email, message: message, date: date}),
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log('Success:', data);
//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                 });
//                 // close validation
//                 // Hide the form
//                 document.querySelector('.close-button').click();
//         }
//
//         });
//
//
//
//         document.querySelector('.show-form-button').addEventListener('click', function() {
//             element.classList.remove('hidden');
//             backdrop.classList.add('bg-gray-900', 'blur-lg', 'w-full', 'h-full', 'absolute');
//             projectsGrid.classList.add('hidden');
//             pagination.classList.add('hidden');
//             footer.classList.add('hidden');
//             hero.classList.add('hidden');
//         });
//     }, 1000);
// }
//
// function validateForm() {
//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//
//     // Name validation - should be min 3 characters
//     if (name.length < 3) {
//         alert('Name should be at least 3 characters long');
//         return false;
//     }
//
//     // Phone validation - should be numbers only
//     const phoneRegexp = /^[0-9]*$/;
//     if (!phoneRegexp.test(phone)) {
//         alert('Invalid phone number - it should contain numbers only');
//         return false;
//     }
//
//     // Email validation
//     const emailRegexp = /\S+@\S+\.\S+/;
//     if (!emailRegexp.test(email)) {
//         alert('Invalid email format');
//         return false;
//     }
//
//     // Message validation - should be min 3 and max 200 characters
//     if (message.length < 3 || message.length > 200) {
//         alert('Message length should be from 3 to 200 characters');
//         return false;
//     }
//
//     // All validations passed
//     // alert('Validation passed');
//     return true;
// }
// form.onsubmit = function(e) {
//     e.preventDefault();

    // get form fields
    // const name = document.getElementById('name').value;
    // const phone = document.getElementById('phone').value;
    // const email = document.getElementById('email').value;
    // const date = document.getElementById('date').value;

    // console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}, Date: ${date}`);

    // You can now make your POST request to your create endpoint with the form values

    // Example:
    /*
    fetch('https://your-endpoint.com/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name, phone: phone, email: email, date: date}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data); <- your response from the server will be logged here
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    */
// }

console.timeEnd("timer");
