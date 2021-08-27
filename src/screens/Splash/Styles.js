import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts';
import colors from './../../utils/colors'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  splashLogo:{
    width:35,
    height:35,
    resizeMode:'contain'
  },
  logoContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  logoText:{
    fontSize:25,
    fontFamily:fonts.Bold,
    color:colors.blue
  }
});
