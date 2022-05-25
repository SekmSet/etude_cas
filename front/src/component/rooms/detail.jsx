import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getHouse, getRoomsByAppartement} from "../../firebase/rooms";

const DetailRoom = () => {
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
            flexDirection: "column",
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
        divFlex: {
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginBottom: "50px",
        },
        roomImgSTyling: {
            width: "300px",
        },
        linkStyling: {
            color: "black",
            textDecoration: "none",
            backgroundColor: "rgb(220,220,220)",
        },
    };

    const renderRooms = (card, index) => {
        return (
            <Link to={`/chambres/${card?.uid}`} key={index} style={styles.linkStyling} >
                <div className="box">
                    <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af" alt={"image-" + card?.uid} style={styles.roomImgSTyling} />
                    <div>
                        <p>{card?.taille}m², lit {card?.lit}</p>
                        <p>Pour {card?.personne}</p>
                        <p>{card?.prix}€</p>
                    </div>
                </div>
            </Link>
        );
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

            <div style={styles.divFlex}>
                {rooms?.map(renderRooms)}
            </div>
        </div>
    )
}

export default DetailRoom