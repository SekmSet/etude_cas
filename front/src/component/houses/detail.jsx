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
            flexWrap: "wrap",
            padding: "50px",
        },
        cardStyling : {
            border: "1px solid black",
            backgroundColor: "rgb(220,220,220)",
            margin: "0 15px 15px 0",
            width: "250px",
            height: "350px",
            minWidth: "250px",
            minHeight: "350px",
            cursor: "pointer",
        },
        imgSTyling: {
            width: "600px",
        },
        bodyStyling: {
            marginTop: "20px",
        },
        linkStyling: {
            color: "black",
            textDecoration: "none",
        },
    };

    return (
        <div>
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt={"image-" + house?.uid} style={styles.imgSTyling} />
            <h2>{house?.name}</h2>
            <p>{house?.adresse?.rue}</p>
            <p>{house?.adresse?.CP} {house?.adresse?.ville}</p>

        </div>
    )
}

export default Detail