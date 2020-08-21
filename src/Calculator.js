import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DATATEST, arrayNumber, arrayOperator} from './Data.js';
//等於後清空
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prepareToEnterSecondNumber: false, //顯示的number
      enterSecondNumber: false,
      firstNumber: 0, //第1個輸入的number
      secondNumber: 0, //第2個輸入的number
      tempNumber: 0,
      operator: '', //運算元
      isC: false,
      isEqual: false,
    };
  }

  press = (title) => {
    //數字
    arrayNumber.map((value) => {
      //let d = {id: value};
      if (title === value) {
        let state = {};
        if (this.state.prepareToEnterSecondNumber) {
          state.enterSecondNumber = true;
          state.secondNumber = this.state.secondNumber + value;
        } else {
          state.firstNumber = this.state.firstNumber + value;
          state.secondNumber = '';
        }
        state.isC = true;
        this.setState(state);
      }
    });
    //when push the operator button -> is secondNumber empty?
    // true => prepare to enter secondNumber(still show firstNumber); (as well as push the button of numbers, it will show secondNumber)
    //false => do firstNumber (operator) secondNumber, store in firstNumber then clear secondNumber (shows firstNumber)
    arrayOperator.map((value) => {
      //let d = {id: value};
      if (title === value) {
        let state = {};
        let firstValue = parseFloat(this.state.firstNumber);
        if (this.state.secondNumber === '') {
          //secondNumber is empty
          if (value === '+') {
            state.operator = '+';
            //state.tempNumber = this.state.firstNumber;
          } else if (value === '-') {
            state.operator = '-';
            //state.tempNumber = this.state.firstNumber;
          } else if (value === '*') {
            state.operator = '*';
            //state.tempNumber = this.state.firstNumber;
          } else if (value === '/') {
            state.operator = '/';
            //state.tempNumber = this.state.firstNumber;
          } else if (value === '=') {
            if (this.state.operator === '+') {
              state.firstNumber =
                parseFloat(this.state.firstNumber) +
                parseFloat(this.state.firstNumber);
              state.secondNumber = 0;
            } else if (this.state.operator === '-') {
              state.firstNumber =
                parseFloat(this.state.firstNumber) -
                parseFloat(this.state.firstNumber);
              state.secondNumber = 0;
            } else if (this.state.operator === '*') {
              state.firstNumber =
                parseFloat(this.state.firstNumber) *
                parseFloat(this.state.firstNumber);
              state.secondNumber = 0;
            } else if (this.state.operator === '/') {
              state.firstNumber =
                parseFloat(this.state.firstNumber) /
                parseFloat(this.state.firstNumber);
              state.secondNumber = 0;
            }
            state.secondNumber = this.state.firstNumber;
            state.isEqual = true;
            //state.prepareToEnterSecondNumber = false;
            console.log('aaa')
          }
//** */
          // if (value === '=') {
          //   if (this.state.operator === '+') {
          //     state.firstNumber =
          //       parseFloat(this.state.firstNumber) +
          //       parseFloat(this.state.firstNumber);
          //     state.secondNumber = 0;
          //   } else if (this.state.operator === '-') {
          //     state.firstNumber =
          //       parseFloat(this.state.firstNumber) -
          //       parseFloat(this.state.firstNumber);
          //     state.secondNumber = 0;
          //   } else if (this.state.operator === '*') {
          //     state.firstNumber =
          //       parseFloat(this.state.firstNumber) *
          //       parseFloat(this.state.firstNumber);
          //     state.secondNumber = 0;
          //   } else if (this.state.operator === '/') {
          //     state.firstNumber =
          //       parseFloat(this.state.firstNumber) /
          //       parseFloat(this.state.firstNumber);
          //     state.secondNumber = 0;
          //   }
          //   state.secondNumber = this.state.firstNumber;
          //   state.isEqual = true;
          //   //state.prepareToEnterSecondNumber = false;
          //   console.log('aaa')
          // } else {
          //   state.operator = value;
          // }

          state.prepareToEnterSecondNumber = true;
        } else {
          let secondValue = parseFloat(this.state.secondNumber);
          if (value === '=') {
            if (this.state.operator === '+') {
              state.firstNumber = firstValue + secondValue;
            } else if (this.state.operator === '-') {
              state.firstNumber = firstValue - secondValue;
            } else if (this.state.operator === '*') {
              state.firstNumber = firstValue * secondValue;
            } else if (this.state.operator === '/') {
              state.firstNumber = firstValue / secondValue;
            }
            state.isEqual = true;
            //state.prepareToEnterSecondNumber = false;
            console.log('===')
          } else {
            if (this.state.operator === '+') {
              if (this.state.isEqual) {
                state.firstNumber = firstValue;
              } else {
                state.firstNumber = firstValue + secondValue;
              }
            } else if (this.state.operator === '-') {
              if (this.state.isEqual) {
                state.firstNumber = firstValue;
              } else {
                state.firstNumber = firstValue - secondValue;
              }
            } else if (this.state.operator === '*') {
              if (this.state.isEqual) {
                state.firstNumber = firstValue;
              } else {
                state.firstNumber = firstValue * secondValue;
              }
            } else if (this.state.operator === '/') {
              if (this.state.isEqual) {
                state.firstNumber = firstValue;
              } else {
                state.firstNumber = firstValue / secondValue;
              }
            }
            state.isEqual = false;
            state.secondNumber = '';
            state.operator = value;
            console.log('ttt')
          }
        }
        state.enterSecondNumber = false;
        //}
        this.setState(state);
      }
    });

    //歸零
    if (title === 'AC' || title === 'C') {
      this.setState({
        firstNumber: 0,
        secondNumber: 0,
        operator: '',
        enterSecondNumber: false,
        prepareToEnterSecondNumber: false,
        isC: false,
      });
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
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.showNumber}>
          <Text style={styles.viewText}>
            {this.state.enterSecondNumber
              ? this.state.secondNumber
              : parseFloat(this.state.firstNumber)}
          </Text>
        </View>
        <View style={styles.buttons}>
          {Array(DATATEST.length)
            .fill(0)
            .map((value, index) => {
              return (
                <View style={styles.eachButtonView}>
                  {DATATEST[index].map((d) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          this.press(d.title);
                        }}
                        style={[
                          d.title === '0'
                            ? styles.buttonZero
                            : styles.eachButton,
                          d.color === 'orange'
                            ? styles.orange
                            : d.color === 'grey'
                            ? styles.grey
                            : styles.darkgrey,
                        ]}>
                        {/* <TouchableOpacity
                          style={styles.buttonBackground}
                          onPress={() => {
                            this.press(this.state.isC ? d.id : d.title);
                          }}> */}
                        <Text style={styles.buttonText}>
                          {this.state.isC ? d.id : d.title}
                        </Text>
                        {/* </TouchableOpacity> */}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
  },
  showNumber: {
    //顯示數字
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttons: {
    //整區button
    flex: 4,
    justifyContent: 'flex-end',
  },
  eachButtonView: {
    flex: 1,
    flexDirection: 'row',
  },
  eachButton: {
    //每一個button
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonZero: {
    //0要兩格
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBackground: {
    // padding: 25 + '%',
    // width: '100%',
    backgroundColor: '#F00',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  viewText: {
    color: 'white',
    fontSize: 35,
  },
});
