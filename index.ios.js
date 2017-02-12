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
  View,
  Switch
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

class ColorSwitchExample extends React.Component {
  state = {
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false,
  };

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
          tintColor="gray"
          onTintColor="gray"
          thumbTintColor="#ffffff"
          value={this.state.colorFalseSwitchIsOn}
          style={styles.switch}
        />
        <Switch
          onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
          value={this.state.colorTrueSwitchIsOn} />
      </View>
    );
  }
}

export default class Bambi extends Component {
  render() {
    return (
      <View
        width={350}
        shadowColor="black"
        shadowOffset={{width: 20, height: 20}}
        shadowOpacity={0.8}
        shadowRadius={2}
        style={styles.container}
      >
        <Surface
          width={300}
          height={300}
        >
          <Circle x={100} y={200} r={50}/>
        </Surface>
        <ColorSwitchExample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    /* backgroundColor: '#F05FCF',*/
  },
  surface: {
    borderWidth: 2,
    borderColor: 'orange',
    shadowColor: 'black',
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  switch: {

  }
});

AppRegistry.registerComponent('Bambi', () => Bambi);
