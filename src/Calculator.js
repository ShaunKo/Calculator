
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { DATATEST, data, data1 } from './Data.js';
// import { connect } from 'react-redux';
// import * as actionCreators from '../redux/action.js';



export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enterSecondNumber: false, //顯示的number
            firstNumber: '', //第1個輸入的number
            secondNumber: '', //第2個輸入的number
        };
    }
    componentDidMount(){
        a = [1,1,2,3].map(function( item, index, array){
            return index
        })
        console.log(a)
    }
    row1 = [
        [
        {
            id: 'AC',
        },
        {
            id: '+/-   ',
        },
        {
            id: '% ',
        },
        {
            id: '/ ',
        },
    ],[
        {
            id: '7',
        },
        {
            id: '8',
        },
        {
            id: '9',
        },
        {
            id: '*',
        },
    ],[
        {
            id: '4',
        },
        {
            id: '5',
        },
        {
            id: '6',
        },
        {
            id: '-',
        },
    ],[
        {
            id: '1',
        },
        {
            id: '2',
        },
        {
            id: '3',
        },
        {
            id: '+',
        },
    ]
    ]
    
  

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.showNumber}>
                    <Text>1</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={{ flexDirection: 'row' }}>
                        
                        { 
                        this.row1[1].map((data) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Text>{
                                    data.id
                                    }</Text>
                                </View>
                            )
                     
                        })}
                    </View>
                    <Text>1</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    showNumber: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    buttons: {
        flex: 3,
    },

});

// const mapStateToProps = store => (
//     { number1: store.number1, number2: store.number2, number3: store.number3, calculation: store.calculation }
// )

// export default connect(mapStateToProps, actionCreators)(NewButton)
