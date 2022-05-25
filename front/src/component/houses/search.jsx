const styles = {
    mainContainer : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(220, 220, 220, 0.7)",
        width: "500px",
    },
    inputStyling : {
        width: "300px",
        margin: "20px",
        padding: "5px",
        borderRadius: "10px",
    },
}

const Search = () => {
    return (
        <div style={styles.mainContainer}>
            <input type="text" style={styles.inputStyling} name="where" id="where" placeholder="Je pars où ?"/>
            <label htmlFor="date">Je pars quand ?</label>
            <input type="date" style={styles.inputStyling} name="date" id="date" />
        </div>
    )
}

export default Search