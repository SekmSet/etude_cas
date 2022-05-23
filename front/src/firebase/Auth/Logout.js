import {toast} from "react-toastify";
import {auth} from "../index";

const logoutFirebase = () => {
    return auth.signOut()
        .then(() => {
            toast("Déconnexion réussi")
            return true

        })
};

export {logoutFirebase};