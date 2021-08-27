import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../../assets/fonts';
import colors from './../../../utils/colors'
const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  topContainer: {
    width: '100%',
    backgroundColor: colors.white,
    marginTop: 30,
    padding: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  placeholderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomComponent: {
    width: '100%',
    height: ((height / 4) * 3) + 50,
    backgroundColor: '#F1F1F1',
    // padding: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  crossButton: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  placeholderText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.Bold
  },
  itemContainer: {
    width: '46%',
    backgroundColor: '#C4C4C4',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemHeadingStyle: {
    fontFamily: fonts.Regular,
    fontSize: 15
  },
  bottomSheetContainer: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    // flex:1,
    // marginLeft:20
  },
  dragerStyle: {
    width: 70,
    height: 5,
    backgroundColor: '#00000026',
    borderRadius: 16,
    alignSelf: 'center'
  },
  content: {

  }
});
