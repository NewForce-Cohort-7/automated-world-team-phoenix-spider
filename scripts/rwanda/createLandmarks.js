import { getLandmarks } from './rwandaDB.js'

// We need to export a function to main.js that returns an html string of our landmark elements
export const createLandmarks = () => {

    // Invoke the function that you imported from the database module
    const landmarks = getLandmarks()

    // Start building an HTML string with the section title and UL
    let htmlString = `<h2 class="landmark_title">Popular Landmarks</h2>
                        <ul class="landmark_list">`

    // Create HTML representations of each landmark here
    for (const landmark of landmarks) {

        htmlString += `<li class="landmark"> 
                            <a class="rwanda-link" href="${landmark.address}">${landmark.name} in ${landmark.location}</a> 
                        </li>`
    }

    // Add the closing tag for the UL
    htmlString += `</ul>`
    
    // return the string we've made
    return htmlString
}