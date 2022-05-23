import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import {toast} from "react-toastify";

const registerForm = async (
    auth,
    email,
    password
) =>
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            if (user.stsTokenManager) {
                sendEmailVerification(auth.currentUser).then(() => {
                    console.log("send email verification")
                    toast("Un email de validation vous a été envoyé")
                });
            }

            return true;
        })
        .catch((error) => {
            console.error("Problème lors de l'inscription", error);
            toast("Problème lors de l'inscription")

            return false;
        });

export {registerForm};