import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
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
  backContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:-5
  },
  backBtn:{
    width:22,
    height:22,
    resizeMode:'contain'
  },
  splashLogo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginLeft:10
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
 
  bottomImage:{
    width:'70%',
    height:130,
    resizeMode:'stretch',
    position:'absolute',
    bottom:0
  },
  passwordHeading:{
    fontFamily:fonts.Regular,
    fontSize:12,
    color:colors.blue,
    marginTop:15,
    marginLeft:5
  },
  passwordText:{
    fontFamily:fonts.Regular,
    fontSize:12,
    color:colors.blue,
    marginLeft:8
  },
  paswordContainer:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center'
  },
  activeStyle:{
    width:20,
    height:20,
    resizeMode:'contain'
  }
});
