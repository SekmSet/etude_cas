import Search from "../houses/search";

const styles = {
    mainContainer : {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    titleStyling : {
        color: "rgb(220, 220, 220)"
    },
    searchStyling: {
        marginTop: "50px",
    }
}

const Home = () => {
    return (
        <div style={styles.mainContainer}>
            <h1 style={styles.titleStyling}>Une envie, un voyage ...</h1>
            <h2 style={styles.titleStyling}>Trouvez un logement partout en France pour vous accompagner !</h2>
            <h2 style={styles.titleStyling}>Où que vous alliez nous sommes là, avec vous.</h2>
            <div style={styles.searchStyling}>
                <Search />
            </div>
        </div>
    )
}

export default Home