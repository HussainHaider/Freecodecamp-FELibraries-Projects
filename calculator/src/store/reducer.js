import * as actionTypes from './action'

const initialState = {
    result: '0',
    value: 0,
    operation:null
};
let is_multipleOperation = false;
const checkResult = (result,val) => {
    if(result.length >=8 ) {
        return result;
    } else {
        let res  = result + val;
        if(result==='0' && val === '0') {
            return res.toString().replace(/^0+/, '0');
        } else {
            return res.toString().replace(/^0+/, '');
        }
    }
};

const calculateResult = (num1,num2,symbol) => {
    let res = 0;

  if(symbol === "+") {
      res = num1 + num2;
  } else if(symbol === "-") {
      res = num1 - num2;
  } else if(symbol === "*") {
      res = num1 * num2;
  } else if(symbol === "/") {
      res = num1 / num2;
  } else if(symbol === "/") {
      res = num1**num1;
  }

  res = res.toFixed(4).toString();
  return parseFloat(res);
};

const returnObject = (val,symbol,res = '0') => {
    return {
        value: parseFloat(val),
        operation:symbol,
        result:res
    }
};

const reducer = (state = initialState, action) => {
    console.log('Value: ' + state.value + ' Result: ' + state.result + ' symbol: ' + state.operation);
    let result =0;
    switch (action.type) {
        case actionTypes.ZERO:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'0')
            };
        case actionTypes.ONE:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'1')
            };
        case actionTypes.TWO:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'2')
            };
        case actionTypes.THREE:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'3')
            };
        case actionTypes.FOUR:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'4')
            };
        case actionTypes.FIVE:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'5')
            };
        case actionTypes.SIX:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'6')
            };
        case actionTypes.SEVEN:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'7')
            };
        case actionTypes.EIGHT:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'8')
            };
        case actionTypes.NINE:
            is_multipleOperation = false;
            return {
                ...state,
                result:checkResult(state.result,'9')
            };
        case actionTypes.DECIMAL:
            is_multipleOperation = false;
            if (state.result.includes('.')===true) {
                return state;
            } else {
                return {
                    ...state,
                    result:checkResult(state.result,'.')
                };
            }

        case actionTypes.ADD:
            if(state.operation!==null && is_multipleOperation===false) {
                result = calculateResult(state.value,parseFloat(state.result),state.operation);
                is_multipleOperation = true;
                return returnObject(result,'+');
            } else {
                let num = is_multipleOperation ? state.value : state.result;
                is_multipleOperation = true;
                return returnObject(num,'+');
            }
        case actionTypes.SUBTRACT:
            if(state.operation!==null) {
                let val = 0;
                if(state.result === '0') {
                    return {
                        ...state,
                        result:checkResult(state.result,'-')
                    };
                } else {
                    val = state.result;
                }
                if(is_multipleOperation===false) {
                    result = calculateResult(state.value,parseFloat(val),state.operation);
                }
                return returnObject(result,'-');
            } else {
                return returnObject(state.result,'-');
            }
        case actionTypes.MULTIPLY:
            if(state.operation!==null && is_multipleOperation===false) {
                result = calculateResult(state.value,parseFloat(state.result),state.operation);
                is_multipleOperation = true;
                return returnObject(result,'*');
            } else {
                let num = is_multipleOperation ? state.value : state.result;
                is_multipleOperation = true;
                return returnObject(num,'*');
            }

        case actionTypes.DIVIDE:
            if(state.operation!==null && is_multipleOperation===false) {
                result = calculateResult(state.value,parseFloat(state.result),state.operation);
                is_multipleOperation = true;
                return returnObject(result,'/');
            } else {
                let num = is_multipleOperation ? state.value : state.result;
                is_multipleOperation = true;
                return returnObject(num,'/');
            }
        case actionTypes.POWER:
            return {
                value: parseFloat(state.result),
                operation:'^',
                result:'0'
            };
        case actionTypes.PERCENTAGE:
            return state;

        case actionTypes.EQUAL:
            is_multipleOperation = false;
            console.log(state);
            result = calculateResult(state.value,parseFloat(state.result),state.operation);
            return {
                operation:null,
                result:result,
                value:result
            };

        case actionTypes.ALL_CLEAR:
            is_multipleOperation = false;
            return {
                result: '0',
                operation:null,
                value: 0
            };
        case actionTypes.CLEAR:
            is_multipleOperation = false;
            return {
                ...state,
                result: state.result.substring(0, state.result.length - 1)
            };
        default:
            return state;
    }
};

export default reducer;
