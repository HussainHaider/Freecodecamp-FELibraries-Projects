import React from "react";
import classes from "./timer.css";
import Button from "../Button/Button";

const Timer = (props) => {
    return (
        <div className="break">
            <p id={props.label_ID}>{props.timerType}</p>
            <div>
                <Button id={props.decrement_ID} icon="fas fa-minus" clickHandler = {props.decrementHandler} />
                <p className={classes.text} id={props.timer_ID}>{props.time}</p>
                <Button id={props.increment_ID} icon="fas fa-plus" clickHandler = {props.incrementHandler} />
            </div>
        </div>
    );
};

export default Timer;
