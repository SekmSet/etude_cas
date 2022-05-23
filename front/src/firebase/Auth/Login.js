import {signInWithEmailAndPassword} from "firebase/auth";

const loginFirebase = (
    auth,
    email,
    password,
    setAuth
) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            if (user.emailVerified && user.stsTokenManager) {
                const stsTokenManager = JSON.stringify(user.stsTokenManager);
                console.log("stsTokenManager : ", stsTokenManager)
                setAuth({
                    id: stsTokenManager.id,
                })
            } else {
                console.log("error")
            }
        })
        .catch((error) => {
            console.error("Impossible d'effectuer la connexion", error);
        });
};

export {loginFirebase};