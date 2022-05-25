const Detail = () => {

    const apartment = {
        id: 1,
        name: "Penthouse",
        street: "12 rue de la craie Ducu",
        zipcode: "75005",
        city: "Paris",
    };

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
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt={"image-" + apartment.id} style={styles.imgSTyling} />
            <h2>{apartment.name}</h2>
            <p>{apartment.street}</p>
            <p>{apartment.zipcode} {apartment.city}</p>
        </div>
    )
}

export default Detail