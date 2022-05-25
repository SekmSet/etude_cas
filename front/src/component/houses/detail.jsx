import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getHouse, getRoomsByAppartement} from "../../firebase/rooms";

const Detail = () => {
   const { id } = useParams()

    const [house, setHouse] = useState(undefined)
    const [rooms, setRooms] = useState(undefined)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHouse(id)
            const rooms = await getRoomsByAppartement(id)
            setHouse(result)
            setRooms(rooms)
        }

        fetchData()
            .catch(console.error);

    }, [])

    const styles = {
        cardContainer : {
            display: "flex",
            marginTop: "50px",
            justifyContent: "space-around",
            alignItems: "center",
        },
        cardStyling : {
            border: "1px solid black",
            backgroundColor: "rgb(220,220,220)",
            width: "350px",
            height: "400px",
            minWidth: "350px",
            minHeight: "400px",
        },
        imgSTyling: {
            width: "600px",
        },
    };

    return (
        <div style={styles.cardContainer}>
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt={"image-" + house?.uid} style={styles.imgSTyling} />
            <div style={styles.cardStyling}>
                <h2>{house?.name}</h2>
                <p>{house?.adresse?.rue}</p>
                <p>{house?.adresse?.CP} {house?.adresse?.ville}</p>
                <p>Taille : {house?.taille}</p>
                <p>Balcon : {house?.balcon}</p>
                <p>Chambres : {house?.chambres}</p>
                <p>Fumeur : {house?.fumeur ? 'oui' : 'non'}</p>
                <p>Jardin : {house?.jardin ? 'oui' : 'non'}</p>
                <p>Parking : {house?.parking ? 'oui' : 'non'}</p>
            </div>
        </div>
    )
}

export default Detail