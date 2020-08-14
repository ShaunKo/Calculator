import { combineReducers } from 'redux';

//按鈕轉換
function number1(state = '', action) {
    switch (action.type) {
        case 'NUMBER1':
            return action.number;
        default:
            return state;
    }
}
function number2(state = '', action) {
    switch (action.type) {
        case 'NUMBER2':
            return action.number;
        default:
            return state;
    }
}

function number3(state = 0, action) {
    switch (action.type) {
        case 'NUMBER3':
            return action.number1;
        default:
            return state;
    }
}

//運算
function calculation(state = '', action) {
    switch (action.type) {
        case 'PLUS':
            return action.number1+ action.number2
        case 'MINOR':
            return parseFloat(action.number1) - parseFloat(action.number2)
        case 'MULTIPLY':
            return parseFloat(action.number1) * parseFloat(action.number2)
        case 'DIVISION':
            return action.number1 / action.number2
            default:
                return state;
    }
}

const itemApp = combineReducers({ number1,number2,number3,calculation });

export default itemApp;