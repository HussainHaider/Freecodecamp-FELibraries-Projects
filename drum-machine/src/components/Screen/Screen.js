import React from 'react'

import classes from './Screen.css';

const screen = ( props ) => {
    return (<div className={classes.display}>
        <p id="display">{props.value}</p>
    </div>);
};
export default screen;
