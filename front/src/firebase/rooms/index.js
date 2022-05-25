import db from "../index";
import { collection, getDocs } from "firebase/firestore";

const getRooms = async () => {
    let rooms = [];

    const querySnapshot = await getDocs(collection(db, "chambres"));
    querySnapshot.forEach((doc) => {
        rooms = [
                ...rooms,
                {
                    uid: doc.id,
                    appartment: doc.data().appartement,
                    lit : doc.data().lit,
                    personne : doc.data().personne,
                    prix : doc.data().prix,
                    taille : doc.data().taille,
                    theme: doc.data().theme,
                },
            ];
    });
    console.log(rooms)
    return rooms;
}

const getRoom = async (id) => {
    const rooms = await getRooms()
    const room = rooms.find((room) => room.uid === id);
    return room;
}

// const getRoomsByCity = async (city) => {
//     const rooms = await getRooms()
//     return rooms.find((room) => room.adresse.ville === city);
// }

const getHouses = async () => {
    let houses = [];

    const querySnapshot = await getDocs(collection(db, "appartements"));
    querySnapshot.forEach((doc) => {
        houses = [
            ...houses,
            {
                uid: doc.id,
                adresse: doc.data().adresse,
                animaux : doc.data().animaux,
                balcon : doc.data().balcon,
                chambres : doc.data().chambres,
                fumeur : doc.data().fumeur,
                jardin: doc.data().jardin,
                name: doc.data().name,
                parking: doc.data().parking,
                taille: doc.data().taille,
            },
        ];
    });
    console.log(houses)
    return houses;
}

const getHouse = async (id) => {
    const houses = await getHouses()
    return houses.find((house) => house.uid === id);
}

const getHousesByCity = async (ville) => {
    const houses = await getHouses()
    const results = []
    const r = houses.filter((house) => {
        const city = house.adresse.ville

        console.log(city.toLowerCase(), ville.toLowerCase())

        if(city.toLowerCase() === ville.toLowerCase) {
            console.log(true)
            results.push(house)
            return house
        } else {
            return null
        }
    });
    console.log("r - ", r)
    console.log("results - ", results)
}


export {
    getRooms,
    getRoom,
    getHouses,
    getHouse,
    getHousesByCity
}
