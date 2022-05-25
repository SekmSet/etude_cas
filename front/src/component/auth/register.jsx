import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import {registerForm} from "../../firebase/Auth/Registre";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const auth = getAuth();

    const handleRegister = async (data) => {
        const { email, password, confirmPassword } = data;

        if (password === confirmPassword) {
            const isRegister = await registerForm(auth, email, password);
            if (isRegister) {
                navigate("/");
            }
        }
    };

    const formContainer = {
        width: "380px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(248,249,250,.3)",
        padding: "20px 50px 40px",
        boxShadow: "1px 4px 10px 1px #aaa",
        borderRadius: "10px",
    }

    const formTitle = {
        textAlign: "center",
        marginBottom: "30px",
    }

    const textInput = {
        display: "block",
        height: "32px",
        padding: "6px 16px",
        marginBottom: "30px",
        width: "100%",
        border: "none",
        backgroundColor: "#f3f3f3",
        borderRadius: "5px",
    }

    const confirmButton = {
        display: "block",
        margin: "20px auto 0",
        width: "150px",
        height: "40px",
        borderRadius: "25px",
        border: "none",
        color: "#fff",
        fontWeight: "500",
        boxShadow: "1px 4px 10px 1px #aaa",
        backgroundColor: "#0d6efd",
    }

    return (
        <div style={formContainer}>
            <h2 style={formTitle}>S'enregistrer</h2>
            <form className="form_register" onSubmit={handleSubmit(handleRegister)}>
                <div className="form_group">
                    <label>Adresse mail :</label>
                    <input {...register("email")} style={textInput} />
                </div>

                <div className="form_group">
                    <label>Mot de passe</label>
                    <input type="password" {...register("password")} style={textInput} required/>
                </div>

                <div className="form_group">
                    <label>Je confirme mon mot de passe</label>
                    <input type="password" {...register("confirmPassword")} style={textInput} required/>
                </div>

                <input type="submit" className="button" value="Valider" style={confirmButton} required/>
            </form>
        </div>
    )
}

export default Register