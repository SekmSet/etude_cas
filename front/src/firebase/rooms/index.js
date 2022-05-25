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
                    appartement: doc.data().appartement,
                    lit : doc.data().lit,
                    personne : doc.data().personne,
                    prix : doc.data().prix,
                    taille : doc.data().taille,
                    theme: doc.data().theme,
                },
            ];
    });

    return rooms;
}

const getRoom = async (id) => {
    const rooms = await getRooms()
    const room = rooms.find((room) => room.uid === id);
    return room;
}

const getRoomsByAppartement = async (idHouse) => {
    const rooms = await getRooms()
    const r = rooms.filter((room) => room.appartement === idHouse);

    console.log("getRoomsByAppartement  ", r)
}

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
    return houses;
}

const getHouse = async (id) => {
    const houses = await getHouses()
    return houses.find((house) => house.uid === id);
}

const getHousesByCity = async (ville) => {
    const houses = await getHouses()
    const results = []

    for(let i = 0; i < houses.length; i++) {
        if(houses[i].adresse?.ville.toLowerCase() === ville.toLowerCase()) {
            results.push(houses[i])
        }
    }
    return results
}


export {
    getRooms,
    getRoom,
    getRoomsByAppartement,
    getHouses,
    getHouse,
    getHousesByCity
}
