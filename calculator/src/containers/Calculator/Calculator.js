import React,{ Component } from 'react'

import Screen from '../../components/Screen/Screen'
import ButtonList from '../buttonList/buttonList'
import {connect} from 'react-redux'
import classes from './Calculator.css';

class Calculator extends Component {
    render() {
       return (
           <div className={classes.container}>
               <Screen value={this.props.ctr}/>
               <ButtonList />
           </div>
       );
    }
}
const mapStateToProps = state => {
  return {
      ctr: state.result
  }
};
export default connect(mapStateToProps)(Calculator);
