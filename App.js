
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import itemApp from './redux/reducer.js';


 import Button from './src/Button.js';

export default class App extends Component {
  
  render() {
    const store = createStore(itemApp);
    return (
      <Provider store={store}>
        
          <Button />
        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    //marginTop:30,
    
    flex:1,
  },
});

