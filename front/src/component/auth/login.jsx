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

    const registerButton = {
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
            <h2 style={formTitle}>Se connecter</h2>
            <form className="form_login" onSubmit={handleSubmit(handleLogin)}>
                <div className="form_group">
                    <label>Mon adresse mail :</label>
                    <input {...register("email")} style={textInput} required/>
                </div>

                <div className="form_group">
                    <label>Mon mot de passe :</label>
                    <input type="password" {...register("password")} style={textInput} required/>
                </div>
                <input type="submit" className="button" value="Je me connecte" style={registerButton}/>
            </form>
        </div>
    )
}

export default Login