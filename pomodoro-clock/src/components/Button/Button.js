import React from "react";
import classes from "./Button.css";

const Button = (props) => {
    return (
        <button className={classes.in} id={props.id} onClick={props.clickHandler}>
            <i className={props.icon}/>
        </button>
    );
};

export default Button;
