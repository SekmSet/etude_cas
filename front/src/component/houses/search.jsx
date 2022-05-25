import { Link } from "react-router-dom";

const Search = () => {
    const apartments = [
        {
            id: 1,
            name: "Penthouse",
            street: "12 rue de la craie Ducu",
            zipcode: "75005",
            city: "Paris",
        },
        {
            id: 2,
            name: "Bouiboui",
            street: "69 rue l'étroit mousquetaire",
            zipcode: "69003",
            city: "Lyon",
        },
        {
            id: 3,
            name: "Maison de ville",
            street: "567 avenue de la peau lisse",
            zipcode: "69002",
            city: "Lyon",
        },
        {
            id: 4,
            name: "Appartement",
            street: "45 rue de priscillabitch",
            zipcode: "75010",
            city: "Paris",
        },
        {
            id: 5,
            name: "Appartement",
            street: "12 rue Lord Mokka",
            zipcode: "13002",
            city: "Marseille",
        },
    ];

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
        <Link to={`/detail/${card.id}`} style={styles.linkStyling}>
            <div style={styles.cardStyling} key={index} className="box">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt={"image-" + card.id} style={styles.imgSTyling} />
                <div style={styles.bodyStyling}>
                    <h2>{card.name}</h2>
                    <p>{card.street}</p>
                    <p>{card.zipcode} {card.city}</p>
                </div>
            </div>
        </Link>
      );
    };
  
    return (
        <div style={styles.cardContainer}>
            {apartments.map(renderCard)}
        </div>
    )
  };

export default Search