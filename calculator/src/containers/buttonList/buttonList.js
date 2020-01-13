import React,{ Component } from 'react'

import classes from './buttonList.css';
import Button from '../../components/Button/Button'
import {connect} from 'react-redux'

import * as actionTypes from '../../store/action'

class ButtonList extends Component {
    state = {
      buttonList : [
          {
              id:'clear',
              value:'AC',
              class:'blue',
              action:actionTypes.ALL_CLEAR
          },
          {
              id:'power',
              value:'^',
              class:'',
              action:actionTypes.POWER
          },
          {
              id:'percentage',
              value:'%',
              class:'',
              action:actionTypes.PERCENTAGE
          },
          {
              id:'divide',
              value:'/',
              class:'yellow',
              action:actionTypes.DIVIDE
          },
          {
              id:'seven',
              value:'7',
              class:'',
              action:actionTypes.SEVEN
          },
          {
              id:'eight',
              value:'8',
              class:'',
              action:actionTypes.EIGHT
          },
          {
              id:'nine',
              value:'9',
              class:'',
              action:actionTypes.NINE
          },
          {
              id:'add',
              value:'+',
              class:'yellow',
              action:actionTypes.ADD
          },
          {
              id:'four',
              value:'4',
              class:'',
              action:actionTypes.FOUR
          },
          {
              id:'five',
              value:'5',
              class:'',
              action:actionTypes.FIVE
          },
          {
              id:'six',
              value:'6',
              class:'',
              action:actionTypes.SIX
          },
          {
              id:'subtract',
              value:'-',
              class:'yellow',
              action:actionTypes.SUBTRACT
          },
          {
              id:'one',
              value:'1',
              class:'',
              action:actionTypes.ONE
          },
          {
              id:'two',
              value:'2',
              class:'',
              action:actionTypes.TWO
          },
          {
              id:'three',
              value:'3',
              class:'',
              action:actionTypes.THREE
          },
          {
              id:'multiply',
              value:'*',
              class:'yellow',
              action:actionTypes.MULTIPLY
          },
          {
              id:'zero',
              value:'0',
              class:'',
              action:actionTypes.ZERO
          },
          {
              id:'decimal',
              value:'.',
              class:'',
              action:actionTypes.DECIMAL
          },
          {
              id:'delete',
              value:'C',
              class:'red',
              action:actionTypes.CLEAR
          },
          {
              id:'equals',
              value:'=',
              class:'green',
              action:actionTypes.EQUAL
          }
      ]
    };
    render() {
        const list = this.state.buttonList.map((obj,index) => (
            <Button
                id={obj.id}
                key={obj.id}
                value={obj.value}
                class={obj.class}
                clicked={() => this.props.calcNumbers(obj.action)}/>
        ));
        console.log(list);

        return (
            <div className={classes.buttons}>
                {list}
                {/*<div className={classes.row}>*/}
                {/*    <Button id="clear" value="AC" class="blue" clicked={() => this.props.calcNumbers(actionTypes.ALL_CLEAR)}/>*/}
                {/*    <Button id="power" value="^" clicked={() => this.props.calcNumbers(actionTypes.POWER)}/>*/}
                {/*    <Button id="percentage" value="%" clicked={() => this.props.calcNumbers(actionTypes.PERCENTAGE)}/>*/}
                {/*    <Button id="divide" value="/" class="yellow" clicked={() => this.props.calcNumbers(actionTypes.DIVIDE)}/>*/}
                {/*</div>*/}
                {/*<div className={classes.row}>*/}
                {/*    <Button id="seven" value="7" clicked={() => this.props.calcNumbers(actionTypes.SEVEN)}/>*/}
                {/*    <Button id="eight" value="8" clicked={() => this.props.calcNumbers(actionTypes.EIGHT)}/>*/}
                {/*    <Button id="nine" value="9" clicked={() => this.props.calcNumbers(actionTypes.NINE)}/>*/}
                {/*    <Button id="add" value="+" class="yellow" clicked={() => this.props.calcNumbers(actionTypes.ADD)}/>*/}
                {/*</div>*/}
                {/*<div className={classes.row}>*/}
                {/*    <Button id="four" value="4" clicked={() => this.props.calcNumbers(actionTypes.FOUR)}/>*/}
                {/*    <Button id="five" value="5" clicked={() => this.props.calcNumbers(actionTypes.FIVE)}/>*/}
                {/*    <Button id="six" value="6" clicked={() => this.props.calcNumbers(actionTypes.SIX)}/>*/}
                {/*    <Button id="subtract"  value="-" class="yellow" clicked={() => this.props.calcNumbers(actionTypes.SUBTRACT)}/>*/}
                {/*</div>*/}
                {/*<div className={classes.row}>*/}
                {/*    <Button id="one" value="1" clicked={() => this.props.calcNumbers(actionTypes.ONE)}/>*/}
                {/*    <Button id="two" value="2" clicked={() => this.props.calcNumbers(actionTypes.TWO)}/>*/}
                {/*    <Button id="three" value="3" clicked={() => this.props.calcNumbers(actionTypes.THREE)}/>*/}
                {/*    <Button id="multiply" value="*" class="yellow" clicked={() => this.props.calcNumbers(actionTypes.MULTIPLY)}/>*/}
                {/*</div>*/}
                {/*<div className={classes.row}>*/}
                {/*    <Button id="zero" value="0" clicked={() => this.props.calcNumbers(actionTypes.ZERO)}/>*/}
                {/*    <Button id="decimal" value="." clicked={() => this.props.calcNumbers(actionTypes.DECIMAL)}/>*/}
                {/*    <Button id="delete" value="C" class="red" clicked={() => this.props.calcNumbers(actionTypes.CLEAR)}/>*/}
                {/*    <Button id="equals" value="=" class="green" clicked={() => this.props.calcNumbers(actionTypes.EQUAL)}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        calcNumbers: (number) => dispatch({type:number})
    }
};
export default connect(null,mapDispatchToProps)(ButtonList);
