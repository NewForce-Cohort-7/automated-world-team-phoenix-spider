// import each function from each JS module that creates HTML
import { createCities } from './createCities.js'
import { createLandmarks } from './createLandmarks.js'
import { createCelebrities } from './createCelebrities.js'

// assign a parent element to put the HTML into for each section
const cityParent = document.querySelector("#rwanda-cities")
const landmarkParent = document.querySelector("#rwanda-landmarks")
const celebrityParent = document.querySelector("#rwanda-celebrities")

// invoke the functions we imported and insert the HTML it returns into the parent elements
cityParent.innerHTML = createCities()
landmarkParent.innerHTML = createLandmarks()
celebrityParent.innerHTML = createCelebrities()