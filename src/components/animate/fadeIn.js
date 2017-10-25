import React, { Component } from 'react';
import {Animated,View} from 'react-native';

import commonStylesObject from "../../style/common.json";

export default class FadeIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      bounceValue: new Animated.Value(.3)
    };
  }
  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
        }
      ),
      Animated.timing(
        this.state.bounceValue,
        {
          toValue: 1,
          friction: 1
        }
      )
    ]).start();
  }

  render() {
    return (
      <Animated.View style={{
          ...commonStylesObject.container,
          opacity: this.state.fadeAnim,
          transform: [
            {scale: this.state.bounceValue}
          ]
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}


