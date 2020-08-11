import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action.js';
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            number2: '',
            ifCalculation: false,
            calculator: ''
        }
    }
    //連續算
    //.

    render() {
        return (
            <View style={styles.container}>
                <View sytle={styles.view}>
                    {this.state.ifCalculation ?
                        <Text style={styles.text1}>{this.state.number2}</Text>
                        :
                        <Text style={styles.text1}>{this.state.number}</Text>
                    }
                </View>
                <View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.setState({ number: '', number2: '', ifCalculation: false })
                                    this.props.AC('AC');
                                }}
                            >
                                {this.props.changeButton ?
                                    <Text style={styles.text}>C</Text>
                                    :
                                    <Text style={styles.text}>AC</Text>
                                }
                            </TouchableOpacity>

                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.setState({ number: parseInt(this.state.number) * -1 });
                                }}
                            >
                                <Text style={styles.text}>+/-</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.setState({ number: (parseFloat(this.state.number) / 100) })
                                }}
                            >
                                <Text style={styles.text}>%</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button2}
                                onPress={() => {

                                    this.setState({ ifCalculation: true, calculator: 'division', });

                                }}
                            >
                                <Text style={styles.text}>÷</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '7' })
                                        :
                                        this.setState({ number: this.state.number + '7' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>7</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '8' })
                                        :
                                        this.setState({ number: this.state.number + '8' });

                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>8</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '9' })
                                        :
                                        this.setState({ number: this.state.number + '9' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button2}
                                onPress={() => {
                                    this.setState({ ifCalculation: true, calculator: 'multiply' });
                                }}
                            >
                                <Text style={styles.text}>*</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '4' })
                                        :
                                        this.setState({ number: this.state.number + '4' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>4</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '5' })
                                        :
                                        this.setState({ number: this.state.number + '5' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>5</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '6' })
                                        :
                                        this.setState({ number: this.state.number + '6' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button2}
                                onPress={() => {
                                    this.setState({ ifCalculation: true, calculator: 'minor' });
                                }}
                            >
                                <Text style={styles.text}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '1' })
                                        :
                                        this.setState({ number: this.state.number + '1' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>1</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '2' })
                                        :
                                        this.setState({ number: this.state.number + '2' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>2</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '3' })
                                        :
                                        this.setState({ number: this.state.number + '3' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button2}
                                onPress={() => {
                                    this.setState({ ifCalculation: true, calculator: 'plus' });
                                }}
                            >
                                <Text style={styles.text}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView2}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    this.state.ifCalculation ?
                                        this.setState({ number2: this.state.number2 + '0' })
                                        :
                                        this.setState({ number: this.state.number + '0' });
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button3}
                                onPress={() => {
                                    if (this.state.ifCalculation) {
                                        if (this.state.number2.indexOf('.') === -1) {
                                            this.setState({ number2: this.state.number2 + '.' });
                                        }
                                    } else {
                                        if (this.state.number.indexOf('.') === -1) {
                                            this.setState({ number: this.state.number + '.' });
                                        }
                                    }
                                   
                                    this.props.C('C');
                                }}
                            >
                                <Text style={styles.text}>.</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.button2}
                                onPress={() => {
                                    if (this.state.calculator === 'division') {
                                        this.setState({ number: this.state.number / this.state.number2, ifCalculation: false, number2: '', calculator: '' });

                                    } else if (this.state.calculator === 'plus') {
                                        this.setState({ number: parseFloat(this.state.number) + parseFloat(this.state.number2), ifCalculation: false, number2: '', calculator: '' });
                                    } else if (this.state.calculator === 'minor') {
                                        this.setState({ number: this.state.number - this.state.number2, ifCalculation: false, number2: '', calculator: '' });
                                    } else if (this.state.calculator === 'multiply') {
                                        this.setState({ number: this.state.number * this.state.number2, ifCalculation: false, number2: '', calculator: '' });
                                    }
                                    // else if (this.state.calculator === '') {

                                    // }
                                }}
                            >
                                <Text style={styles.text}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    view: {
        flex: 1,
        //marginTop:30,
    },
    view2: {
        flex: 4,
    },
    buttonContainer: {
        flexDirection: 'row',

    },
    button: {
        backgroundColor: '#4F4F4F'
    },
    button2: {
        backgroundColor: '#FF8000'
    },
    button3: {
        backgroundColor: '#8E8E8E'
    },

    buttonView: {
        flex: 1,
    },
    buttonView2: {
        flex: 2,
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
    },
    text1: {
        fontSize: 90,
        alignSelf: 'flex-end',
    },
});


const mapStateToProps = store => (
    { changeButton: store.changeButton, calculation: store.calculation }
)


export default connect(mapStateToProps, actionCreators)(Button)