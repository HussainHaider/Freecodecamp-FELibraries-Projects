import React,{Component} from 'react'

import classes from './Button.css'

class button extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress = (e) => {
        if (e.keyCode === this.props.keyCode) {
            this.handleClick();
        }
    };

    handleClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;

        this.props.handleDisplay(this.props.id);
    };

    render() {
        return (<div className={ classes.btn }
                     id={this.props.id}
                     onClick={this.handleClick}
            >
                <audio
                    className="clip"
                    id={this.props.value}
                    src={this.props.src}
                    ref={ref => this.audio = ref}/>
                {this.props.value}
            </div>
        );
    }

};
export default button;
