import React, {useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/context";
import {Link, useNavigate} from "react-router-dom";
import {getHouses, getHousesByCity} from "../../firebase/rooms";

const SearchRooms = () => {
    const {city, date} = useContext(UserContext)
    const [allHouses, setHouses] = useState(undefined)

    useEffect(() => {
        const fetchData = async () => {
            const resultsHouseByCity = await getHousesByCity(city)
            await setHouses(resultsHouseByCity)
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
            width: "100%",
        },
        bodyStyling: {
            marginTop: "20px",
        },
        linkStyling: {
            color: "black",
            textDecoration: "none",
        },
    };

    const renderCard = (card, index) => {
        return (
            <Link to={`/chambre/detail/${card.uid}`} style={styles.linkStyling} key={index} >
                <div style={styles.cardStyling} className="box">
                    <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt={"image-" + card.uid} style={styles.imgSTyling} />
                    <div style={styles.bodyStyling}>
                        <p>Chambre {card.theme} ({card.taille} m²)</p>
                        <p>Tarif : {card.prix} € / nuit</p>
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div style={styles.cardContainer}>
            {allRooms?.map(renderCard)}
        </div>
    )
  };

export default SearchRooms