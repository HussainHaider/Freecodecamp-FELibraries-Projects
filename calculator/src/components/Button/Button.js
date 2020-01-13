import React from 'react'

import classes from './Button.css'

const button = ( props ) => {
    // let style = {};
    // if (props.value==='=') {
    //     style['color'] = '#0CB999';
    // }

    return (<input type="button"
                   id={props.id}
                   value={props.value}
                   onClick={props.clicked} className={classes[props.class]} />);
};
export default button;
