/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Circle from './app/Circle'
var ReactART = require('ReactNativeART')
var {
  Surface,
  Path,
  Group,
  Transform,
  Shape,
} = ReactART

export default class Bambi extends Component {
  render() {
    return (
      <Surface width={320} height={600} style={styles.container}>
        <Circle x={100} y={200} r={50}/>
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    shadowColor: 'gray',
    shadowOffset: {
      width: 20,
      height: 20,
    },
  },
});

AppRegistry.registerComponent('Bambi', () => Bambi);
