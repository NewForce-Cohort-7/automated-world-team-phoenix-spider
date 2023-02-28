import { getCities } from './vietnamDB.js'

// We need to export a function to main.js that returns an html string of our city elements
export const createCities = () => {

    // Invoke the function that you imported from the database module
    const cities = getCities()

    // Start building an HTML string with the section title and UL
    let htmlString = `<h2 class="city_title">Top Cities</h2>
                        <ul class="city_list">`

    // Create HTML representations of each city here
    for (const city of cities) {

        htmlString += `<li class="city"> 
                            <a class="vietnam-link" href="${city.address}">${city.name}</a> 
                        </li>`
    }

    // Add the closing tag for the UL
    htmlString += `</ul>`

    // return the string we've made
    return htmlString
}