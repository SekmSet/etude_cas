import React from "react";
import { useForm } from "react-hook-form";

const Search = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const styles = {
        mainContainer : {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(220, 220, 220, 0.7)",
            width: "800px",
        },
        inputStyling : {
            width: "300px",
            margin: "20px",
            padding: "5px",
            borderRadius: "10px",
        },
        buttonStyling : {
            width: "300px",
            margin: "20px",
            padding: "5px",
            borderRadius: "10px",
            backgroundColor: "rgb(55 136 255)",
            color: "white",
        },
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={styles.mainContainer}>
            <label htmlFor="where">Je pars où ?</label>
            <input id="where" {...register('where', { required: true, maxLength: 30 })} style={styles.inputStyling} />
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
            <label htmlFor="date">Je pars quand ?</label>
            <input type="date" id="date" {...register('date', { required: true })} style={styles.inputStyling} />
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
            <input type="submit" style={styles.buttonStyling} />
        </form>
    )
  };

export default Search