
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { DATATEST, data, data1, rows } from './Data.js';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prepareToEnterSecondNumber: false, //顯示的number
            enterSecondNumber: false,
            firstNumber: '', //第1個輸入的number
            secondNumber: '', //第2個輸入的number
            consequenceNumber: '',
            operator: '',//運算元
            isC: false,
            isEquel: false,//按下equel
        };
    }

    press = (title) => {
        //數字
        data.map((d) => {
            if (title === d.id) {
                let state = {};
                if (this.state.prepareToEnterSecondNumber) {

                    //state.secondNumber = parseFloat(this.state.secondNumber + d.id);
                    //一輸入即算出
                    if (this.state.operator === '+') {
                        state.firstNumber = parseFloat(this.state.secondNumber + d.id) + parseFloat(this.state.firstNumber);
                    } else if (this.state.operator === '-') {
                        state.firstNumber = parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber + d.id) ;
                    } else if (this.state.operator  === '*') {
                        state.firstNumber =  parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber + d.id) ;
                    } else if (this.state.operator === '/') {
                        state.firstNumber =parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber + d.id);
                    }
                    state.enterSecondNumber = true;
                    state.secondNumber = parseFloat(this.state.secondNumber + d.id);
                } else {
                    state.firstNumber = parseFloat(this.state.firstNumber + d.id);
                    state.isEquel = false;
                }
                state.isC = true;
                this.setState(state);
            }
        });
        //按下運算子 is secondNumber empty?
        // true => prepare to enter secondNumber(still show firstNumber); (as well as push the button of numbers, it will show secondNumber) 
        //false => do firstNumber (operator) secondNumber, store in firstNumber then clear secondNumber (shows firstNumber) 
        data1.map((d) => {
            if (title === d.id) {
                let state = {};
                if (this.state.secondNumber === '') {//secondNumber is empty
                    if (d.id === '+') {
                        state.operator = '+';
                    } else if (d.id === '-') {
                        state.operator = '-';
                    } else if (d.id === '*') {
                        state.operator = '*';
                    } else if (d.id === '/') {
                        state.operator = '/';
                    }
                    state.prepareToEnterSecondNumber = true;
                } else {
                    if (d.id === '+') {
                        //let plus = parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber);
                        state.firstNumber = this.state.firstNumber;
                        state.operator = '+';
                    } else if (d.id === '-') {
                        //let minor = parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber);
                        state.firstNumber = this.state.firstNumber;
                        state.operator = '-';
                    } else if (d.id === '*') {
                        //let multiply = parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber);
                        state.firstNumber = this.state.firstNumber;
                        state.operator = '*';
                    } else if (d.id === '/') {
                        //let division = parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber);
                        state.firstNumber = this.state.firstNumber;
                        state.operator = '/';
                    }
                    state.enterSecondNumber = false;
                    state.secondNumber = '';
                }
                this.setState(state);
            }
        });

        //歸零
        if (title === 'AC' || title === 'C') {
            let state = {};
            state.firstNumber = '';
            state.secondNumber = '';
            state.operator = '';
            state.enterSecondNumber = false;
            state.prepareToEnterSecondNumber = false;
            state.isC = false;
            this.setState(state)
        }
        //正負
        if (title === '+/-') {
            let state = {};
            if (this.state.enterSecondNumber) {
                state.secondNumber = this.state.secondNumber * -1;
            } else {
                state.firstNumber = this.state.firstNumber * -1;
            }
            this.setState(state);
        }
        //%
        if (title === '%') {
            let state = {};
            if (this.state.enterSecondNumber) {
                state.secondNumber = this.state.secondNumber / 100;
            } else {
                state.firstNumber = this.state.firstNumber / 100;
            }
            this.setState(state);
        }
        //小數點
        if (title === '.') {
            let state = {};
            if (this.state.enterSecondNumber) {
                if (this.state.secondNumber.toString().indexOf('.') === -1) {
                    state.secondNumber = this.state.secondNumber + '.';
                }
            } else {
                if (this.state.firstNumber.toString().indexOf('.') === -1) {
                    state.firstNumber = this.state.firstNumber + '.';
                }
            }
            this.setState(state);
        }
        if (title === '=') {
            //如果是=則清空firstnumber
            let state = {};
            if (this.state.operator === '+') {
                state.firstNumber = this.state.firstNumber + this.state.secondNumber;
            } else if (this.state.operator === '-') {
                state.firstNumber = this.state.firstNumber - this.state.secondNumber;
            } else if (this.state.operator === '*') {
                state.firstNumber = this.state.firstNumber * this.state.secondNumber;
            } else if (this.state.operator === '/') {
                state.firstNumber = this.state.firstNumber / this.state.secondNumber;
            }
            state.enterSecondNumber = false;
            state.prepareToEnterSecondNumber = true;
            state.secondNumber = '';
            this.setState(state);
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.showNumber}>
                    <Text>{
                        this.state.enterSecondNumber ? this.state.secondNumber : this.state.firstNumber
                    }</Text>
                </View>
                <View style={styles.buttons}>
                    {rows.map((row) => {
                        return (
                            <View style={styles.eachButtonView}>
                                {
                                    DATATEST[row].map((data) => {
                                        return (
                                            <View style={[
                                                data.title === '0' ? styles.buttonZero : styles.eachButton,
                                                data.color === 'orange' ? styles.orange : data.color === 'grey' ? styles.grey : styles.darkgrey
                                            ]}>
                                                <TouchableOpacity
                                                    style={styles.buttonBackground}
                                                    onPress={() => {
                                                        this.press(this.state.isC ? data.id : data.title);
                                                    }}
                                                >
                                                    <Text>{this.state.isC ? data.id : data.title}</Text>
                                                </TouchableOpacity>
                                            </View>);
                                    })}
                            </View>);
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-end',
    },
    showNumber: { //顯示數字
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    buttons: { //整區button
        flex: 4,
        justifyContent: 'flex-end',
    },
    eachButtonView: {
        flex: 1,
        flexDirection: 'row',
    },
    eachButton: {//每一個button
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonZero: {//0要兩格
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBackground: {
        padding: 25 + '%',
    },
    orange: {
        backgroundColor: 'orange',
    },
    grey: {
        backgroundColor: '#7B7B7B',
    },
    darkgrey: {
        backgroundColor: '#3C3C3C',
    },

});

// const mapStateToProps = store => (
//     { number1: store.number1, number2: store.number2, number3: store.number3, calculation: store.calculation }
// )

// export default connect(mapStateToProps, actionCreators)(NewButton)
