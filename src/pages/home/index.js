import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,Animated,View,Button} from 'react-native';
import FadeIn from '../../components/animate/fadeIn';

import commonStylesObject from "../../style/common.json";
import homeStylesObject from "../../style/home.json";

const styles = StyleSheet.create(commonStylesObject);
const homeStyles = StyleSheet.create(homeStylesObject);
const avatar=require("../../images/wendy.png");
const wendyBg=require("../../images/wendy_bg.png");

export default class home extends Component {

  constructor(props) {
    super(props);
  }

  _start(){
    alert("Hello Word!")
  }

  render() {
    return (
      <FadeIn>
        <Image source={wendyBg} cover="true" style={{...commonStylesObject.container,"width": 420, "height": 900}}>
          <Text style={homeStyles.welcome}>
            Welcome to Wendy's Home!
          </Text>
          <View style={homeStyles.button}><Button title="START" onPress={this._start}/></View>
        </Image>
      </FadeIn>
    );
  }
}
