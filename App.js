/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
}
from 'react-native';

var Demensions = require('Dimensions');
var {width, height} = Demensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/img/welcom.png')}
          style={styles.backgroundImage}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgroundImage: {
    flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:width,
        height:height,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        resizeMode:Image.resizeMode.stretch,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
  },
});
