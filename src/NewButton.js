import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { DATATEST, data, data1 } from './Data.js';
// import { connect } from 'react-redux';
// import * as actionCreators from '../redux/action.js';


const Item = ({ title }) => (
    <Text style={styles.text}>{title}</Text>
);

export default class NewButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enterSecondNumber: false,
            enterSecondNumber1: false,
            isC: false,
            number1: '',
            number1_1: '',
            number2_1: '',
            number2: '',
            operator: '',
        }
    }

    press = (title) => {
        //數字
        data.map((d) => {
            if (title === d.id) {
                if (this.state.enterSecondNumber) {
                    this.setState({ number2: parseFloat(this.state.number2 + d.id), number2_2: parseFloat(this.state.number2 + d.id), enterSecondNumber1: true, isC: true, });
                    
                } else {
                    this.setState({ number1: parseFloat(this.state.number1 + d.id), number1_1: parseFloat(this.state.number1 + d.id), isC: true, number3: 0, enterSecondNumber1: false, showNumber3: false })
                    
                }
            }
        });
        //運算子
        data1.map((d) => {
            if (title === d.id) {
                this.setState({ enterSecondNumber: true, operator: d.id, number2: 0 });
                
            }
        });
        if (title === '.') {
            if (this.state.enterSecondNumber) {
                if (this.state.number2_1.toString().indexOf('.') === -1) {
                    this.setState({ number2_1: this.state.number2_1 + '.' })
                }
                if (this.state.number2.toString().indexOf('.') === -1) {
                    this.setState({ number2: this.state.number2 + '.' })
                }
            } else {
                if (this.state.number1_1.toString().indexOf('.') === -1) {
                    this.setState({ number1_1: this.state.number1_1 + '.' })
                }
                if (this.state.number1.toString().indexOf('.') === -1) {
                    this.setState({ number1: this.state.number1 + '.' })
                }
            }
        }
        if (title === '+/-') {
            if (this.state.enterSecondNumber) {
                this.setState({ number2_1: this.state.number2_1 * -1, enterSecondNumber1: !this.state.enterSecondNumber1, enterSecondNumber: !this.state.enterSecondNumber, })
                
            } else {
                this.setState({ number1_1: this.state.number1_1 * -1 })
                
            }
        }
        if (title === '%') {
            if (this.state.enterSecondNumber) {
                this.setState({ number2_1: this.state.number2_1 / 100, enterSecondNumber1: true, enterSecondNumber: true, })

            } else {
                this.setState({ number1_1: this.state.number1_1 / 100 })
            }
        }
        if (title === 'AC' || title === 'C') {
            this.setState({ number1: '0', number2: '0', number1_1: '0', number2_2: '0', number3: 0, isC: false })
        }
        if (title === '=') {
            if (this.state.operator === '+') {
                this.setState({ number1_1: parseFloat(this.state.number1_1) + parseFloat(this.state.number2_2), enterSecondNumber1: false, enterSecondNumber: false, number1: 0, number2: 0 });
            }
            if (this.state.operator === '-') {
                this.setState({ number1_1: parseFloat(this.state.number1_1) - parseFloat(this.state.number2_2), enterSecondNumber1: false, enterSecondNumber: false, number1: 0, number2: 0 })
            }
            if (this.state.operator === '*') {
                this.setState({ number1_1: parseFloat(this.state.number1_1) * parseFloat(this.state.number2_2), enterSecondNumber1: false, enterSecondNumber: false, number1: 0, number2: 0 })
            }
            if (this.state.operator === '/') {
                this.setState({ number1_1: parseFloat(this.state.number1_1) / parseFloat(this.state.number2_2), enterSecondNumber1: false, enterSecondNumber: false, number1: 0, number2: 0 })
            }
        }
    }

    flat = (item) => {
        return (
            <View style={styles.flat}>
                <FlatList
                    data={item}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        )
    }
    renderItem = ({ item }) => (
        <View>
            {this.state.isC ?
                <TouchableOpacity
                    onPress={() => { this.press(item.id.trim()) }}
                    style={item.color === 'orange' ? styles.orange : item.color === 'grey' ? styles.grey : styles.darkgrey}>
                    <Item title={item.id} />
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={() => { this.press(item.title.trim()) }}
                    style={item.color === 'orange' ? styles.orange : item.color === 'grey' ? styles.grey : styles.darkgrey}>
                    <Item title={item.title} />
                </TouchableOpacity>
            }
        </View>

    );
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.showNumber}>
                    {this.state.enterSecondNumber1 ? <Text style={styles.text1}>{this.state.number2_2}</Text> : <Text style={styles.text1}>{this.state.number1_1}</Text>}
                </View>
                <View style={styles.button}>
                    {DATATEST.map((item) => { return (this.flat(item)) })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        borderColor: 'black',
        borderWidth: 4
    },
    showNumber: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 110,
    },
    button: {
        flex: 3,
        justifyContent: 'flex-end'
    },
    orange: {
        backgroundColor: 'orange'
    },
    grey: {
        backgroundColor: '#7B7B7B'
    },
    darkgrey: {
        backgroundColor: '#3C3C3C'
    },
    text: {
        padding: 38,
    },
    text1: { color: 'black', fontSize: 50 },
    flat: {
        backgroundColor: 'white',
        alignItems: 'center',
    }
});

// const mapStateToProps = store => (
//     { number1: store.number1, number2: store.number2, number3: store.number3, calculation: store.calculation }
// )


// export default connect(mapStateToProps, actionCreators)(NewButton)