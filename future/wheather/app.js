// init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
let weather = new Weather(weatherLocation.city, weatherLocation.country)

// weather.changeLocation('London', 'Uk')

// init UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value

    //change location
    weather.changeLocation(city, country)

    //set location in local storage
    // storage.setLocationData(city, country)

    //get and display weather
    getWeather()

    //close modal
    $('#locModal').modal('hide')
})

function getWeather(){
    weather.getWeather()
        .then(results => {
            // console.log(results)
            ui.paint(results);
        })
        .catch(err => console.log(err))
}
