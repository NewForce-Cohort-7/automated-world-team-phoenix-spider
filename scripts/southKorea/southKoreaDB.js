const database = {

    cities: [
        {
            name: "Seoul",
            address: "https://en.wikipedia.org/wiki/Seoul"
        },
        {
            name: "Busan",
            address: "https://en.wikipedia.org/wiki/Busan"
        },
        {
            name: "Gwangju",
            address: "https://en.wikipedia.org/wiki/Gwangju"
        },
    ],


    landmarks: [
        {
            name: "Gyeongbok Palace",
            address: "https://en.wikipedia.org/wiki/Gyeongbokgung",
            location: "Northern Seoul"
        },
        {
            name: "Bulguksa Temple complex",
            address: "https://en.wikipedia.org/wiki/Bulguksa",
            location: "Gyeongju city"
        },
        {
            name: "Korean Demilitarized Zone",
            address: "https://en.wikipedia.org/wiki/Korean_Demilitarized_Zone",
            location: "Panmunjom is the most-visited section"
        },
    ],


    celebrities: [
        {
            name: "Jennie Kim",
            address: "https://en.wikipedia.org/wiki/Jennie_(singer)"
        },
        {
            name: "BTS",
            address: "https://en.wikipedia.org/wiki/BTS"
        },
        {
            name: "Ryu Hyun-jin",
            address: "https://en.wikipedia.org/wiki/Hyun-jin_Ryu"
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