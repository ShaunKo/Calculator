import { combineReducers } from 'redux';

//按鈕轉換
function changeButton(state = false, action) {
    switch (action.type) {
        case 'AC':
            return false;
        case 'C':
            return true;
        default:
            return state;
    }
}

//運算
function calculation(state = 0, action) {
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

const itemApp = combineReducers({ changeButton,calculation });

export default itemApp;