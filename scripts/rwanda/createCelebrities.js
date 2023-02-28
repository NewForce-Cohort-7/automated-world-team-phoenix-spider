import { getCelebrities } from './rwandaDB.js'

// We need to export a function to main.js that returns an html string of our celebrity elements
export const createCelebrities = () => {

    // Invoke the function that you imported from the database module
    const celebrities = getCelebrities()

    // Start building an HTML string with the section title and UL
    let htmlString = `<h2 class="celebrity_title">Famous Rwandans</h2>
                        <ul class="celebrity_list">`

    // Create HTML representations of each celebrity here
    for (const celebrity of celebrities) {

        htmlString += `<li class="celebrity"> 
                            <a class="rwanda-link" href="${celebrity.address}">${celebrity.name}</a> 
                        </li>`
    }

    // Add the closing tag for the UL
    htmlString += `</ul>`

    // return the string we've made
    return htmlString
}