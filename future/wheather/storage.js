
class Storage {
    constructor() {
        this.city
        this.country
        // astea sunt default dc ceva nu merge
        this.defaultCity = 'Bucharest'
        this.defaultState = 'Ro'
    }

    getLocationData() {
        localStorage.getItem('city') === null
            ? (this.city = this.defaultCity)
            : (this.city = localStorage.getItem('city'))

        localStorage.getItem('country') === null
            ? (this.country = this.defaultState)
            : (this.country = localStorage.getItem('country'))

        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country) {
        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
    }
}
