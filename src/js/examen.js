import {getElement} from "./utils/getElement.js";
import {YEAR} from "./utils/footerYear.js";
import {handleSidebar} from "./utils/handleSidebar.js";

const btnNavbar = getElement('#access-sidebar');
const sidebar = getElement('#sidebar-examen');
const footer = getElement('#footer-year');
handleSidebar(btnNavbar, sidebar);


import {slides} from "./utils/slides.js";
const form = $('form');
let formBudget = $("#budget");
formBudget.prop("disabled", "disabled");


const twForm = $('#form-tailwind');
// const twDestinations = $("#grid-destination option:selected");
const chosenDestination = $("#grid-destination");
const twFirstName = $("#grid-first-name");
const twLastName = $("#grid-last-name");
const twPassword = $("#grid-password");
const twEmail = $("#grid-email");
const twPhone = $("#grid-phone");
const twBudget = $("#grid-budget");
twBudget.prop("disabled", "disabled");

$(document).ready(function () {
	const carousel = $('#carousel');
	const imgCarousel = document.getElementById('carousel-image');

	imgCarousel.innerHTML = slides.map(item => {
		const {background: {backgroundImage, backgroundColor}, title, description, id} = item;
		if (title === "" || description === "" || backgroundImage === "") {
			return `        	<div class="item" style=${backgroundColor}>
                				<img src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                   				  alt=${title} datatype=${id}>
                   				  <article>
                   				  	   <h1>404</h1>
                   				   <p>Houston we have a problem</p>
                   				     <button class="btn-carousel">
                    				 	<i class="icon-star" aria-hidden="true"></i>
                         				<span>Detalii</span>
                         			</button>
								</article>
                   		</div>
`;
		}
		return `        	<div class="item">
                				<img src=${backgroundImage}
                   				  alt=${title} datatype=${id}>
                   				  <article>
                   				  	   <h1>${title}</h1>
                   				   <p>${description}</p>
                   				     <button class="btn-carousel">
                    				 	<i class="icon-star" aria-hidden="true"></i>
                         				<span>Detalii</span>
                         			</button>
								</article>
                   		</div>
`;
	}).join('');


	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			}
		},
	});



	// ===== form tailwind
	$('#grid-destination').change(function(e){
		if ($(this).val() === "Select") {
			twBudget.removeClass('bg-red-300')
		}
		else {
			twBudget.removeClass('bg-red-300')
			twBudget.removeAttr("disabled");
		}
	});
	twForm.on('submit',(e)=>{
			e.preventDefault();
				if (twFirstName.val().length <3 || twLastName.val().length<=5){
					return alert('check length')
				}

				if (twPassword.val().length <3 || twPassword.val().length >10){
					return alert("min > 4 & max < 10")
				}
				if (twEmail.val().indexOf("@")=== -1){
					return alert('must have @')
				}
				let filter ="^[0-9]*$";
				if (!twPhone.val().match(filter)) {
					return alert('error')
				}


		const clientInfo = $("#clientInfo");
			clientInfo.html(`
			<div class="inner-client">
				<h1>The client : ${twFirstName.val()} ${twLastName.val()}</h1>
				<p> Wants to go to ${chosenDestination.val()} and has a budget of
				 <span class=${twBudget.val() === "100$" || twBudget.val() === "500$" ? `sarac` : " "}>
				${twBudget.val() === "100$" || twBudget.val() === "500$" ? "De Sarac !" : twBudget.val() }</span> </p>
	 		
 				<p>We may contact him at <span class="email-validate">${twEmail.val()} or ${twPhone.val()}</span></p>
			</div>
	`)
		clientInfo.addClass('clientInfo')


	})

});



footer.innerHTML = `<p>&copy; ${YEAR}</p>`;
