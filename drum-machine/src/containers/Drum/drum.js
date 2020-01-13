import React,{ Component } from 'react'

import Screen from '../../components/Screen/Screen'
import classes from './drum.css';
import DrumPad from "../DrumPad/drumPad";

class Drum extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'Click or Press a Key'
        }
    }

    handleDisplay = display => {
        this.setState({display});
        console.log('Change state!!!');
    };

    render() {
       return (
           <>
               <h1>Drum Machine</h1>
               <div id="drum-machine" className={classes.container}>
                   <Screen value={this.state.display} />
                   <DrumPad handleDisplay={this.handleDisplay}/>
               </div>
               <p className={classes.poweredBy}>Developed in React by <a href="#">Hussain Haider</a></p>
           </>
       );
    }
}

export default Drum;
