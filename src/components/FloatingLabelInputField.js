import React from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import icons from '../assets/icons';
import colors from '../utils/colors';
import fonts from './../assets/fonts/'
var isFocus = false
// {backgroundColor:isFocus==='af' ? '#FFF8E8' : '#EDEDED' }
const InputBox = (props) => {
    return (
        <View style={[{ marginTop: 15},props.marginTop]}>
        <Text style={style.heading}>{props.heading}</Text>
        <View style={[style.mainContainer, props.customStyle]}>
            {props.isLeft &&
                <TouchableOpacity>
                    <Image
                        source={props.leftImage}
                        style={style.leftIconStyle}
                    />
                </TouchableOpacity>
            }
            <TextInput
                editable={props.editable}
                autoCapitalize={props.autoCapitalizes}
                inputAccessoryViewID={props.inputAccessoryViewID}
                placeholderTextColor={colors.placeHolder}
                maxLength={props.maxLength}
                placeholder={props.txtPlacHolder}
                keyboardType={props.tholder}
                style={[style.inputField,{width:props.isLeft ? '87%' : '100%' }, props.customInputStyle]}
                onFocus={() => {
                    isFocus = true
                    if (typeof props.onFocus == 'function') {
                        props.onFocus()
                    }
                }}
                onChangeText={(text) => {
                    if (typeof props.onChangeText == 'function') {
                        props.onChangeText(text)
                    }
                }}
                value={props.value}
                multiline={props.multiline}
                secureTextEntry={props.secureType}
            />
        </View>
        </View>
    )
}
export default InputBox
const style = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height: 42,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.borderColor
    },
    inputField: {
        width: '93%',
        fontSize: 14,
        color: colors.placeHolder,
        fontFamily: fonts.Regular,
        // backgroundColor:'red'
    },
    leftIconStyle: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 5,
        tintColor:colors.placeHolder
    },
    heading:{
        fontFamily:fonts.Bold,
        fontSize:13,
        color:colors.blue,
        marginLeft:5
    }
});




