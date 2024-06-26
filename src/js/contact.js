console.time("timer");
import {getElement} from "./utils/getElement.js";

import {handleSidebar} from "./utils/handleSidebar.js";

const btnNavbar = getElement("#access-sidebar");
const sidebar = getElement("#sidebar-contact");
const footer = getElement("#footer-year");
const form = document.getElementById('myForm');

handleSidebar(btnNavbar, sidebar);

window.onload = function () {

    console.log("%c Don't worry I will validate all inputs on the server  :) and I will limit the request per hour", 'color: red; font-size:20px');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Do your form submission logic here
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;


        if (validateForm()) {
            fetch('https://api.mp.dornescu.ro/api/v1/agency/form', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({name: name, phone: phone, email: email, message: message}),
            })

                .then(response => {
                    if(response.status === 200) {
                        return response.json();
                    } else if(response.status === 429) {
                        // alert('Too many requests. Please try again later.');
                        document.getElementById('denyRequest').classList.remove('hidden');
                        throw new Error('Too many requests.');
                    } else {
                        throw new Error(`Request failed with status code ${response.status}`);
                    }
                })
                .then(data => {
                    // console.log('Success:', data);
                    document.getElementById('succes').classList.remove('hidden');
                    setTimeout(()=>{
                        window.location.href = "index.html";
                    }, 2000)

                })
                .catch((error) => {
                    document.getElementById('denyRequest').classList.remove('hidden');
                    setTimeout(()=>{
                        location.reload();
                    }, 1000);
                    console.error('Error:', error);
                });
        }
    });
}



function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.length < 3) {
        alert('Name should be at least 3 characters long');
        return false;
    }

    const phoneRegexp = /^[0-9]*$/;
    if (!phoneRegexp.test(phone)) {
        alert('Invalid phone number - it should contain numbers only');
        return false;
    }

    const emailRegexp = /\S+@\S+\.\S+/;
    if (!emailRegexp.test(email)) {
        alert('Invalid email format');
        return false;
    }

    if (message.length < 3 || message.length > 200) {
        alert('Message length should be from 3 to 200 characters');
        return false;
    }

    return true;
}