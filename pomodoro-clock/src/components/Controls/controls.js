import React from "react";
import Button from "../Button/Button";

const Controls = (props) => {
    return (<div>
        <Button id='start_stop' icon='fas fa-play' clickHandler={props.startHandler} />
        <Button id='pause' icon='fas fa-pause' clickHandler={props.pauseHandler} />
        <Button id='reset' icon='fas fa-undo-alt' clickHandler={props.resetHandler} />
    </div>);
};

export default Controls;
