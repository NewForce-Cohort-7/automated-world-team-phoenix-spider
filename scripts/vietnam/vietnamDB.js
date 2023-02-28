const database = {

    cities: [
        {
            name: "Hanoi",
            address: "https://en.wikipedia.org/wiki/Hanoi"
        },
        {
            name: "Ho Chi Minh City",
            address: "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City"
        },
        {
            name: "Haiphong",
            address: "https://en.wikipedia.org/wiki/Haiphong"
        },
    ],


    landmarks: [
        {
            name: "Old Quarter",
            address: "https://en.wikipedia.org/wiki/Old_Quarter,_Hanoi",
            location: "Hanoi"
        },
        {
            name: "Củ Chi tunnels",
            address: "https://en.wikipedia.org/wiki/C%E1%BB%A7_Chi_tunnels",
            location: "Saigon"
        },
        {
            name: "Hội An",
            address: "https://en.wikipedia.org/wiki/H%E1%BB%99i_An",
            location: "Quảng Nam Province"
        },
    ],


    celebrities: [
        {
            name: "Ho Chi Minh",
            address: "https://en.wikipedia.org/wiki/Ho_Chi_Minh"
        },
        {
            name: "Thích Quảng Đức",
            address: "https://en.wikipedia.org/wiki/Th%C3%ADch_Qu%E1%BA%A3ng_%C4%90%E1%BB%A9c"
        },
        {
            name: "Võ Nguyên Giáp",
            address: "https://en.wikipedia.org/wiki/V%C3%B5_Nguy%C3%AAn_Gi%C3%A1p"
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