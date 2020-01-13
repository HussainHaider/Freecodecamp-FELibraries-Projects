import React,{Component} from "react";
import classes from './clock.css';
import Timer from "../../components/Timer/timer";
import Controls from "../../components/Controls/controls";

export default class Clock extends Component{
    state = {
        session : 25,
        break: 5,
        stopInterval : true,
        timer: 1500,
        intervalID: '',
        timerType: 'Session',
        timerState: 'stopped'
    };

    breakDecrementTimeHandler = () => {
        this.lengthControl('break','-',this.state.break,'Break');
    };

    breakIncrementTimeHandler = () => {
        this.lengthControl('break','+',this.state.break,'Break');
    };

    sessionDecrementTimeHandler = () => {
        this.lengthControl('session','-',this.state.session,'Session');
    };

    sessionIncrementTimeHandler = () => {
        this.lengthControl('session','+',this.state.session,'Session');
    };


    lengthControl=(stateToChange, sign, currentLength, timerType)=>{
        console.log('timerState: '+this.state.timerState);
        if(this.state.timerState === 'running') return;
        console.log('Check----');
        if(this.state.timerType !== timerType) {
            if (sign === "-" && !(currentLength <= 1) ) {
                this.setState((prevState)=>{
                    return {
                        [stateToChange] : prevState[stateToChange]-1,
                    }
                })
            }
            else if (sign === "+" && !(currentLength >= 60)){
                this.setState((prevState)=>{
                    return {
                        [stateToChange] : prevState[stateToChange]+1,
                    }
                })
            }
        } else {
            if (sign === "-" && !(currentLength <= 1) ) {
                this.setState((prevState)=>{
                    return {
                        [stateToChange] : prevState[stateToChange]-1,
                        timer: currentLength*60 - 60
                    }
                })
            }
            else if (sign === "+" && !(currentLength >= 60)){
                this.setState((prevState)=>{
                    return {
                        [stateToChange] : prevState[stateToChange]+1,
                        timer: currentLength*60 + 60
                    }
                })
            }
        }
    };


    startHandler = () => {
        this.changeIntervalState();
        console.log('Check: ' + this.state.stopInterval);
        if(this.state.stopInterval) {
            this.state.intervalID =  setInterval(() => {
                this.decrementTimer();
                this.phaseControl(this.state.timer)

                }, 1000);
        } else {
            clearInterval(this.state.intervalID);
        }
    };

    decrementTimer() {
        this.setState((prevState)=>{
            return {timer: prevState.timer - 1};
        });
    }
    phaseControl(_timer) {
        this.buzzer(_timer);
        if(_timer < 0 ){
            this.switchTimer();
        }
    }
    buzzer(_timer) {
        console.log('Timer: ' + _timer);
        if (_timer === 0) {
            this.audio.play();
        }
    }

    switchTimer = () => {
        this.state.timerType==='Session' ? (
            this.setState({
                timerType : 'Break',
                timer: this.state.break * 60,
            })
        ):(
            this.setState({
                timerType : 'Session',
                timer: this.state.session * 60,
            })
        )
    };

    changeIntervalState = () => {
        const stateType= this.state.timerState === 'stopped'?'running':'stopped';
        this.setState((prevState)=>{
            return {
                stopInterval: !prevState.stopInterval,
                timerState: stateType
            }
        })
    };

    pauseHandler = () => {
        clearInterval(this.state.intervalID);
        this.changeIntervalState();
    };

    resetHandler = () => {
        this.changeIntervalState();
        this.stopAudio();
        clearInterval(this.state.intervalID);
        this.setState({
            session : 25,
            break: 5,
            stopInterval : true,
            timer: 1500,
            intervalID: '',
            timerType: 'Session',
            timerState: 'stopped'
        });
    };

    stopAudio = () => {
        this.audio.pause();
        this.audio.currentTime = 0;
    };

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    render() {

        let minutes = Math.floor(this.state.timer / 60);
        let seconds = this.state.timer - minutes * 60;

        let time = (minutes <= 9 ? "0"+minutes: minutes) + ":" + (seconds <= 9 ? "0"+seconds: seconds);


        return (
            <div>
                <h1>Pomodoro Clock</h1>
                <div className={classes.timers}>
                    <Timer
                        timerType = 'Break Length'
                        label_ID = 'break-label'
                        decrement_ID = 'break-decrement'
                        increment_ID = 'break-increment'
                        timer_ID = 'break-length'
                        time = {this.state.break}
                        decrementHandler = {this.breakDecrementTimeHandler}
                        incrementHandler = {this.breakIncrementTimeHandler}
                    />
                    <Timer
                        timerType = 'Session Length'
                        label_ID = 'session-label'
                        decrement_ID = 'session-decrement'
                        increment_ID = 'session-increment'
                        timer_ID = 'session-length'
                        time = {this.state.session}
                        decrementHandler = {this.sessionDecrementTimeHandler}
                        incrementHandler = {this.sessionIncrementTimeHandler}
                    />

                </div>
                <div className={classes.clock}>
                    <p className={classes.title} id="timer-label">{this.state.timerType}</p>
                    <p className={classes.time} id="time-left">{time}</p>
                </div>
                <Controls
                    startHandler = {this.startHandler}
                    pauseHandler = {this.pauseHandler}
                    resetHandler = {this.resetHandler}
                />
                <audio
                    id="beep"
                    preload="auto"
                    src='https://goo.gl/65cBl1'
                    ref={ref => this.audio = ref}/>

                <p className={classes.poweredBy} >Developed in React by <a href="#">Hussain Haider</a></p>
            </div>
        );
    }
}
