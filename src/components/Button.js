import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image,ActivityIndicator } from 'react-native'
import colors from './../utils/colors'
import Fonts from './../assets/fonts/'
import fonts from './../assets/fonts/';
const Button = (props) => {
    const { loading, color, size} = props
    return (
            <TouchableOpacity onPress={props.clickAction} activeOpacity={props.opacity} style={[style.innerContainer, props.backgroundColorStyle]}>
                {loading &&
                    <ActivityIndicator
                        animating={loading}
                        size={size ? size : 'small'}
                        color={color ? color : colors.yellowGreen}
                        style={[{ marginRight: 15 }]}
                        // style={[{ marginLeft: 5 }, style ? style : {}]}
                    />
                }
                <Image style={props.imageStyle} resizeMode={'contain'} source={props.img} />
                <Text style={[style.txt, props.textStyle]}>{props.text}</Text>
                <Image style={props.imageStyleRight} resizeMode={'contain'} source={props.imgRight} />
            </TouchableOpacity>
    )
}
export default Button
const style = StyleSheet.create({
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        backgroundColor: colors.blue,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txt: {
        color: '#2F3034',
        fontFamily: Fonts.Regular,
        textAlign: 'center',
        fontSize:13
    }
});




