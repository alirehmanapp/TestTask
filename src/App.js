/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { LogBox, StatusBar, SafeAreaView } from 'react-native'
import FlashMessage from "react-native-flash-message";
import fonts from './assets/fonts';

import Routing from './Routing'
import colors from './utils/colors';

LogBox.ignoreAllLogs(true)
// StatusBar.setTranslucent(true)
StatusBar.setBackgroundColor(colors.transparent)
StatusBar.setBarStyle('dark-content')

export default App = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Routing />
            <FlashMessage position={'top'}
             floating={true}
              statusBarHeight={22}
              titleStyle={{color:'black',fontSize:13,fontFamily:fonts.Bold}}
              style={{width:'100%',height:25,paddingTop:5,paddingBottom:5,alignSelf:'center',borderRadius:0}} />
        </SafeAreaView>
    )
}
