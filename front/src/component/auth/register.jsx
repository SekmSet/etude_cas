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
                navigate("/login");
            }
        }
    };

    return (
        <div>
            <form className="form_register" onSubmit={handleSubmit(handleRegister)}>
                <div className="form_group">
                    <label>Adresse mail :</label>
                    <input {...register("email")} />
                </div>

                <div className="form_group">
                    <label>Mot de passe</label>
                    <input type="password" {...register("password")}  />
                </div>

                <div className="form_group">
                    <label>Je confirme mon mot de passe</label>
                    <input type="password" {...register("confirmPassword")} />
                </div>

                <input type="submit" className="button" value="Valider" />
            </form>
        </div>
    )
}

export default Register