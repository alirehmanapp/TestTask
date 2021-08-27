
import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    FlatList,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    Animated,
    StatusBar
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from './../../../components/FloatingLabelInputField'
import BottomSheet from 'reanimated-bottom-sheet';

import ReAnimated from "react-native-reanimated"

import icons from "./../../../assets/icons/";
const { width, height } = Dimensions.get('window')
const HomeScreen = ({ navigation }) => {

    const {
        Extrapolate,
        block,
        call,
        cond,
        greaterOrEq,
        interpolate,
        lessOrEq,
        onChange,
    } = ReAnimated

    const drawerCallbackNode = useRef(new ReAnimated.Value(0)).current;
    const topViewMarginTop = new Animated.Value(-120);

    const [email, emailchange] = useState("");
    const RSheet = useRef(null)
    const [historyList, setHistoryList] = useState([
        { name: "Maintenance", date: '12/03/2020' },
        { name: "Repair", date: '12/03/2020' },
        { name: "Sampling", date: '12/03/2020' },
        { name: "Maintenance", date: '12/03/2020' },
        { name: "Repair", date: '12/03/2020' },
        { name: "Sampling", date: '12/03/2020' }
    ])

    const blockList = () => {
        let list = []
        for (let index = 1; index < 11; index++) {
            list.push(
                cond(
                    greaterOrEq(drawerCallbackNode, index / 10),
                    call([], () => {
                        animateTopView((-index * 10) + (index > 5 ? -25 : StatusBar.currentHeight))
                    })
                )
            )
        }
        return list
    }

    const animateTopView = (value) => {
        Animated.timing(topViewMarginTop, {
            toValue: value,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    const renderHistoryList = ({ item, index }) => {
        return (
            <View
                style={styles.itemContainer}>
                <Text style={styles.itemHeadingStyle}>{'Dumy Text'}</Text>
            </View>
        );
    }

    const renderContent = () => (
        <View style={styles.bottomSheetContainer}>
            <TouchableOpacity
                style={{ height: 20, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.dragerStyle} />
            </TouchableOpacity>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ paddingLeft: 10, paddingRight: 10 }}
                numColumns={2}
                data={historyList}
                showsVerticalScrollIndicator={false}
                renderItem={renderHistoryList}
            />
        </View>
    );

    return (
        <View style={styles.safeStyle}>
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <Animated.View style={[styles.topContainer, { marginTop: topViewMarginTop }]}>
                    <>
                        <View style={styles.placeholderContainer}>
                            <Text style={styles.placeholderText}>Placeholder</Text>
                            <Image
                                source={icons.crossIcon}
                                style={styles.crossButton} />
                        </View>
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
                    </>
                </Animated.View>
                <ReAnimated.Code
                    exec={onChange(
                        drawerCallbackNode,
                        block(blockList())
                    )}
                />
                <BottomSheet
                    ref={RSheet}
                    snapPoints={[height * 0.7, height * 0.17,]}
                    borderRadius={16}
                    enabledBottomInitialAnimation={true}
                    renderContent={renderContent}
                    callbackNode={drawerCallbackNode}
                />
            </KeyboardAwareScrollView>
        </View>
    );
};
export default HomeScreen;

