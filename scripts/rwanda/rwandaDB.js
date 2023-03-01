const database = {
cities: [
    {
        name: "Kigali",
        address: "https://www.kigalicity.gov.rw/"
    },

    {
        name: "Nyanza",
        address: "https://www.visitrwanda.com/destinations/nyanza/"
    },

    {
        name: "Kibuye",
        address: "https://www.tripadvisor.com/Attractions-g673815-Activities-Kibuye_Western_Province.html"
    },
],


landmarks: [
    {
        name: "King's Palace",
        address: "https://www.visitrwanda.com/interests/kings-palace/",
        location:"Nyanza" 
    },
    {
        name: "Kigali Genocide Memorial",
        address: "https://www.visitrwanda.com/interests/kigali-genocide-memorial/",
        location:"Kigali"
    },
    {
        name: "Lake Kivu",
        address: "https://www.visitrwanda.com/destinations/lake-kivu/",
        location:"between the Democratic Republic of the Congo and Rwanda"
    },
],


celebrities: [
    {
        name: "Paul Kagame",
        address: "https://www.britannica.com/biography/Paul-Kagame"
    },
    {
        name: "Sonia Rolland",
        address: "https://en.wikipedia.org/wiki/Sonia_Rolland"
    },
    {
        name: "Rose Kabuye",
        address: "https://en.wikipedia.org/wiki/Rose_Kabuye"
    },
]

}


// Export functions to make a copy of the array of objects that corresponds to each section

export const getCities = () => {
return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}

export const getLandmarks = () => {
return database.landmarks.map(copyOfSingleLandmark => ({...copyOfSingleLandmark}))
}

export const getCelebrities = () => {
return database.celebrities.map(copyOfSingleCelebrity => ({...copyOfSingleCelebrity}))
}