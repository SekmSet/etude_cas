import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";

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
            });
        }

        return true;
    })
    .catch((error) => {
        console.error("Problème de connexion", error);
        return false;
    });

export { registerForm };