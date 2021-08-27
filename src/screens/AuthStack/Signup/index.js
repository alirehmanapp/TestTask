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
const Signup = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
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
    const signUpBtn = () => {
        inputcheck()
    }
    const hasNumber=(myString)=> {
        return /\d/.test(myString);
      }
    return (
        <SafeAreaView style={styles.safeStyle}>
            <Image
                source={icons.backgroundIcon}
                style={styles.bottomImage}
            />
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <View style={styles.backContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Image
                            source={icons.backIcon}
                            style={styles.backBtn}
                        />
                    </TouchableOpacity>
                    <Image
                        source={icons.splashIcon}
                        style={styles.splashLogo}
                    />
                </View>

                <Text style={styles.heading}>Create Account</Text>
                <Text style={styles.description}>One step away from your desires</Text>
                <InputField
                    txtPlacHolder={'Johnson Walker'}
                    value={name}
                    onChangeText={(text) => {
                        setName(text)
                    }}
                    isLeft={true}
                    leftImage={icons.personIcon}
                    marginTop={{ marginTop: 35 }}
                    heading={'Fullname'}
                />
                <InputField
                    txtPlacHolder={'sam.doe@gmail.com'}
                    value={email}
                    onChangeText={(text) => {
                        emailchange(text)
                    }}
                    isLeft={true}
                    leftImage={icons.emailIcon}
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
                <Text style={styles.passwordHeading}>Your Password must contain:</Text>
                <View style={styles.paswordContainer}>
                    <Image
                        source={password.length<6 ? icons.unActiveIcon: icons.activeIcon}
                        style={styles.activeStyle}
                    />
                    <Text style={styles.passwordText}>Atleast 6 characters</Text>
                </View>
                <View style={styles.paswordContainer}>
                    <Image
                        source={/\d/.test(password) ? icons.activeIcon: icons.unActiveIcon}
                        style={styles.activeStyle}
                    />
                    <Text style={styles.passwordText}>Contains a number</Text>
                </View>
                <Button
                    text={'REGISTER'}
                    textStyle={styles.btnStyle}
                    backgroundColorStyle={styles.btnContainer}
                    clickAction={signUpBtn.bind(this)}
                />


            </KeyboardAwareScrollView>

        </SafeAreaView>
    );
};
export default Signup;
