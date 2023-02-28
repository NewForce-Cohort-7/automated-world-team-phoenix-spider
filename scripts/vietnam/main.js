// import each function from each JS module that creates HTML
import { createCities } from './createCities.js'
import { createLandmarks } from './createLandmarks.js'
import { createCelebrities } from './createCelebrities.js'

// assign a parent element to put the HTML into for each section
const cityParent = document.querySelector("#vietnam-cities")
const landmarkParent = document.querySelector("#vietnam-landmarks")
const celebrityParent = document.querySelector("#vietnam-celebrities")

// invoke the functions we imported and insert the HTML it returns into the parent elements
cityParent.innerHTML = createCities()
landmarkParent.innerHTML = createLandmarks()
celebrityParent.innerHTML = createCelebrities()