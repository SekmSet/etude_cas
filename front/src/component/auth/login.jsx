import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import {loginFirebase} from "../../firebase/Auth/Login";
import UserContext from "../../context/context";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const auth = getAuth();
    const navigate = useNavigate();

    const {setAuth} = useContext(UserContext)

    const handleLogin = async (data) => {
        const isLogin = await loginFirebase(auth, data.email, data.password, setAuth);
        if (isLogin) {
            navigate("/");
        }
    };

    return (
        <div>
            <form className="form_login" onSubmit={handleSubmit(handleLogin)}>
                <div className="form_group">
                    <label>Mon adresse mail :</label>
                    <input {...register("email")} />
                </div>

                <div className="form_group">
                    <label>Mon mot de passe</label>
                    <input type="password" {...register("password")}  />
                </div>
                <input type="submit" className="button" value="Je me connecte" />
            </form>
        </div>
    )
}

export default Login