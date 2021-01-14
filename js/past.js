// import {testimonials} from "../img/utils/data";

let testimonials = [
    {
        id: 1,
        title: 'Worst chef ever',
        nume: "Akemi",
        data: '01.06.2425',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 2,
        nume: "Emiyo",
        title: 'Best food ever',
        data: '01.1.24254',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        id: 3,
        nume: "Risako",
        title: 'I had worst &#128540',
        data: '11.01.2425323',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
]
let review = document.getElementById('testimonials')
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