const database = {

    cities: [
        {
            name: "Berlin",
            address: "https://www.visitberlin.de/en"

        },
        {
            name: "Hamburg",
            address: "https://www.hamburg.com/"
        },
        {
            name: "Munich",
            address: "https://www.muenchen.de/en/home"
        },
    ],


    landmarks: [
        {
            name: "Bradenburg Gate",
            address: "https://www.visitberlin.de/en/brandenburg-gate",
            location: "Berlin"
        },
        {
            name: "Bastei Bridge",
            address: "https://www.earthtrekkers.com/day-trip-bastei-bridge-saxon-switzerland/",
            location: "Switzerland"
        },
        {
            name: "Neuschwanstein Castle",
            address: "https://www.neuschwanstein.de/englisch/tourist/",
            location: "Bavaria"
        },
    ],


    celebrities: [
        {
            name: "Albert Einstein",
            address: "https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/"
        },
        {
            name: "Johann Bach",
            address: "https://www.britannica.com/biography/Johann-Sebastian-Bach"
        },
        {
            name: "Ludwig Beethoven",
            address: "https://www.britannica.com/biography/Ludwig-van-Beethoven"
        },
    ]

}


// Export functions to make a copy of the array of objects that corresponds to each section

export const getCities = () => {
    return database.cities.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

export const getCelebrities = () => {
    return database.celebrities.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}