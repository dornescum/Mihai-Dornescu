import {testimonials} from "../js/module/testimonials.js";
import {photos} from "../js/module/photosWork.js";

let review = document.getElementById('testimonials');
let photosLink = document.getElementById("photoChanger")


window.addEventListener('DOMContentLoaded', () => {


    // let shuffled = photos
    //     .map((a) => ({sort: Math.random(), value: a}))
    //     .sort((a, b) => a.sort - b.sort)
    //     .map((a) => a.value)
    //
    // console.log(shuffled)

    let displayPhotos = photos.map((item) => {
        const {id, foto, location, dataTooltip, title} = item;
        return `
                <div class="col-lg-4 radius img-carousel">
                   <img src="${foto}" alt="${title}" data-location="${location}" datatype="${id}" 
                   data-tooltip="${dataTooltip}">
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