import React from "react";
import classes from './Toolbar.css';

const Toolbar = (props) => {
    return (
        <div className={classes.toolbar}>
            <i title="no-stack-dub-sack" className="fab fa-free-code-camp"/>
            {props.text}
        </div>
    )
};

export default Toolbar;
