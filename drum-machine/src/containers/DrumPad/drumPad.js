import React,{ Component } from 'react'

import classes from './drumPad.css';
import Button from '../../components/Button/Button'


class DrumPad extends Component {
    state = {
        data : [
            { id: 'snare', letter: 'Q', keyCode: 81, src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
            { id: 'bass 1', letter: 'W',keyCode: 87, src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
            { id: 'bongo', letter: 'E', keyCode: 69, src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
            { id: 'tom tom', letter: 'A',keyCode: 65, src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
            { id: 'bass 3', letter: 'S',keyCode: 83, src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
            { id: 'shotgun', letter: 'D',keyCode: 68, src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
            { id: 'high hat', letter: 'Z',keyCode: 90, src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
            { id: 'drum hit', letter: 'X',keyCode: 88, src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
            { id: 'laser', letter: 'C',keyCode: 67, src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
        ],

    };

    render() {
        const list = this.state.data.map((obj) => (
            <Button
                id={obj.id}
                key={obj.id}
                value={obj.letter}
                src={obj.src}
                keyCode={obj.keyCode}
                handleDisplay={this.props.handleDisplay}
            />
        ));

        return (
            <div className={classes.buttons}>
                {list}
            </div>
        );
    }
}

export default DrumPad;
