import {signInWithEmailAndPassword} from "firebase/auth";
import {toast} from "react-toastify";

const loginFirebase = (
    auth,
    email,
    password,
    setAuth
) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            if (user.emailVerified && user.stsTokenManager) {
                const stsTokenManager = JSON.stringify(user.stsTokenManager);
                console.log("stsTokenManager : ", stsTokenManager)
                setAuth({
                    id: stsTokenManager.id,
                })
                toast("Connexion réussi")
                return true
            } else {
                toast("Error lors de la connexion")
                return false
            }
        })
        .catch((error) => {
            console.error("Impossible d'effectuer la connexion", error);
            toast("Impossible d'effectuer la connexion")
        });
};

export {loginFirebase};