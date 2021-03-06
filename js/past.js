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
    console.log(photos)
    let displayPhotos = photos.map((item) => {
        const {id, foto, location, dataTooltip, title} = item;

        return `
                <div class="columns img-carousel">
                   <img src="${foto}" alt="${title}" loading="lazy" data-location="${location}" datatype="${id}" 
                   data-tooltip="${dataTooltip}" style="z-index: 1">
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
                <div class="columns  active-testimonials">
                    <div class="testimonials-title radius text-center title-color">${title}</div>
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
