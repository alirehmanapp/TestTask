import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { showMessage } from "react-native-flash-message";
import icons from './../../../assets/icons/'
import InputField from './../../../components/FloatingLabelInputField'
import Button from './../../../components/Button'
import colors from "../../../utils/colors";
import fonts from "../../../assets/fonts";
const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");

    const inputcheck = () => {
        if (email === "") {
            showMessage({
                message: 'Invalid username or password',
                type: 'danger',
                backgroundColor: colors.red, // background color
                duration: 4000
            });
        }
        else if (password === "") {
            showMessage({
                message: 'Invalid username or password',
                type: 'danger',
                backgroundColor: colors.red, // background color
                duration: 4000
            });
        }
        else {
            navigation.navigate('HomeStack')
        }
    };
    const loginBtn=()=>{
        inputcheck()
    }
    return (
        <SafeAreaView style={styles.safeStyle}>
            <Image
                source={icons.backgroundIcon}
                style={styles.bottomImage}
            />
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <Image
                    source={icons.splashIcon}
                    style={styles.splashLogo}
                />
                <Text style={styles.heading}>Sign In</Text>
                <Text style={styles.description}>Enter login credentails</Text>
                <InputField
                    txtPlacHolder={'sam.doe@gmail.com'}
                    value={email}
                    onChangeText={(text) => {
                        emailchange(text)
                    }}
                    isLeft={true}
                    leftImage={icons.emailIcon}
                    marginTop={{ marginTop: 35 }}
                    heading={'Username / Email address'}
                />
                <InputField
                    txtPlacHolder={'secure password'}
                    value={password}
                    onChangeText={(text) => {
                        passwordchange(text)
                    }}
                    isLeft={true}
                    leftImage={icons.lockIcon}
                    heading={'Password'}
                    secureType={true}
                />
                <Button
                    text={'LOG IN'}
                    textStyle={styles.btnStyle}
                    backgroundColorStyle={styles.btnContainer}
                    imgRight={icons.forwardIcon}
                    imageStyleRight={styles.imageStyleBtn}
                    clickAction={loginBtn.bind(this)}
                />
                <View style={styles.bar} />
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Dont’ have an account? <Text
                        onPress={() => {
                            navigation.navigate('Signup')
                        }}
                        style={{ color: colors.blue, fontFamily: fonts.Bold }}>
                        {'Create Account'}
                    </Text></Text>
                </View>

            </KeyboardAwareScrollView>

        </SafeAreaView>
    );
};
export default LoginScreen;
