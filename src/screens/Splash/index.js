import React, { useEffect } from "react";
import { View, Image,Text } from "react-native";
import { styles } from './Styles';
import { CommonActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
//assets
import icons from './../../assets/icons/'
//utils
import preferenceKeys from '../../utils/preferenceKeys'

const Splash = ({ navigation }) => {
    let nextRouteName = 'AuthStack'
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.reset({ index: 0, routes: [{ name: nextRouteName }] });
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={icons.splashIcon}
                    style={styles.splashLogo}
                />
                <Text style={styles.logoText}>eIo</Text>
            </View>
        </SafeAreaView>
    );
};
export default Splash;
