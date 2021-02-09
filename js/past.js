import {testimonials} from "../js/module/testimonials.js";
import {photos} from "../js/module/photosWork.js";

let review = document.getElementById('testimonials');
let photosLink =document.getElementById("photoChanger")

console.log(photos)
window.addEventListener('DOMContentLoaded', () => {
    let displayPhotos = photos.map((item) => {
        const {id, foto, location, data, title} = item;
        return `
                <div class="col-lg-4 radius img-past">
                   <img src="${foto}" alt="${title}" data-location="${location}" datatype="${id}" data-browse="${data}">
                </div>
               `
    }).join('')
    photosLink.innerHTML = displayPhotos;
});


// ==================================================

// console.log(review)
window.addEventListener('DOMContentLoaded', () => {
    let displayTestimonials = testimonials.map((item) => {
        const {nume, text, data, title} = item;
        return `
                <div class="col-lg-4 radius active-testimonials">
                    <div class="card-header testimonials-title radius text-center title-color">${title}</div>
                    <div class="card-body main-color">
                        <h5 class="card-title text-center">${nume}</h5>
                        <p class="card-text font-size14">${text}</p>
                        <p class="card-text font-size14">${data}</p>
                    </div>
                </div>
               `
    }).join('')
    review.innerHTML = displayTestimonials;
});