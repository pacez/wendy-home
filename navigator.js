import React, { PureComponent} from 'react';
import { Button,View,Image,StyleSheet} from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import home from "./src/pages/home";

import commonStylesObject from "./src/style/common.json";

const styles = StyleSheet.create(commonStylesObject);
const avatar=require("./src/images/wendy.png");

const Navigator=StackNavigator({
    Home: { 
        screen: home
    },
    Album: {
        screen: home
    }
}, {
    initialRouteName: 'Home', // 默认显示界面
    navigationOptions: {
        title: 'Wendy\'s Home!',
        headerLeft: <Image source={avatar} style={styles.headerLeft} />,
        headerRight: <View style={styles.headerRight}><Button title="setting" onPress={()=>{}}/></View>        
    }
});

export default Navigator
