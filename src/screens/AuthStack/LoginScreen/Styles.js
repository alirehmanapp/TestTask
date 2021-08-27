import { StyleSheet } from 'react-native';
import fonts from '../../../assets/fonts';
import colors from './../../../utils/colors'
export const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  container: {
    marginTop: 25,
    padding: 25
  },
  heading: {
    fontSize: 32,
    fontFamily: fonts.Bold,
    marginTop: 10,
    color: colors.blue
  },
  splashLogo: {
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  description: {
    color: colors.description
  },
  btnStyle: {
    fontSize: 13,
    color: colors.white
  },
  btnContainer: {
    marginTop: 40
  },
  imageStyleBtn: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    position: 'absolute',
    right: 22
  },
  bar: {
    width: '50%',
    height: 1,
    marginTop: 40,
    marginLeft: 2,
    backgroundColor: '#2031598F'
  },
  bottomContainer: {
    flexDirection: 'row',
    width:'100%',
    // alignItems:'center',
    // justifyContent:'center',
    marginTop: 30,
    marginBottom: 30
  },
  bottomText: {
    fontFamily: fonts.Regular,
    fontSize: 15,
    textAlign: 'center',
    color: colors.placeHolder,
    textAlign:'center'
  },
  bottomImage:{
    width:'70%',
    height:130,
    resizeMode:'stretch',
    position:'absolute',
    bottom:0
  }
});
