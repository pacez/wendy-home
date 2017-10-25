import React, { Component } from 'react';
import Navigator from './navigator';
import {
  AppRegistry,
  View
} from 'react-native';

export class App extends Component {
    render() {
        return <Navigator />;
    }
}


export default class wendy_s_home extends Component {
  render() {
    return <App />;
  }
}


AppRegistry.registerComponent('wendy_s_home', () => wendy_s_home);
