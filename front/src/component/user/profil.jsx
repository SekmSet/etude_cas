const user = {
    firstname: "John",
    lastname: "Doe",
    phone: "0602358965",
    mail: "johndoe@gmail.com",
    address: "12 rue de la république Lyon",
    birthdate: "16/05/1992",
    nationality: "Français",
}

const styles = {
    mainCOntainer : {
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    profileStyling : {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "rgba(248,249,250,.3)",
        padding: "30px",
        boxShadow: "1px 4px 10px 1px #aaa",
        borderRadius: "10px",
    },
    tableDivStyling : {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        alignItems: "flex-start",
        backgroundColor: "rgba(248,249,250,.3)",
        padding: "30px",
        boxShadow: "1px 4px 10px 1px #aaa",
        borderRadius: "10px",
    },
    title : {
        marginBottom: "30px"
    },
    userProfileEntries : {
        paddingBottom: "10px",
    },
    tableStyling : {
        borderCollapse: "collapse",
        width: "100%",
    },
    tableHead : {
        border: "1px solid #808080",
        padding: "8px",
        backgroundColor: "rgb(100 100 100)",
        color: "white",
    },
    tableCells : {
        border: "1px solid #808080",
        padding: "8px",
        backgroundColor: "rgb(220, 220, 220)",
    },
}

const Profil = () => {
    return (
        <div style={styles.mainCOntainer}>
            <div style={styles.profileStyling}>
                <h2 style={styles.title}>{user.firstname} {user.lastname}</h2>
                <p style={styles.userProfileEntries}>Tél : {user.phone}</p>
                <p style={styles.userProfileEntries}>Email : {user.mail}</p>
                <p style={styles.userProfileEntries}>Adresse : {user.address}</p>
                <p style={styles.userProfileEntries}>Date de naissance : {user.birthdate}</p>
                <p style={styles.userProfileEntries}>Nationalité : {user.nationality}</p>
            </div>
            <div style={styles.tableDivStyling}>
                <h2 style={styles.title}>Mes réservations</h2>
                <table style={styles.tableStyling}>
                    <thead>
                        <tr>
                            <th style={styles.tableHead}>Ville</th>
                            <th style={styles.tableHead}>Du</th>
                            <th style={styles.tableHead}>Au</th>
                            <th style={styles.tableHead}>Payé</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.tableCells}>Paris</td>
                            <td style={styles.tableCells}>05/08/2022</td>
                            <td style={styles.tableCells}>25/08/2022</td>
                            <td style={styles.tableCells}>Oui</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profil