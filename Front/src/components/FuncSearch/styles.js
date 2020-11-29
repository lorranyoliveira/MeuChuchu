import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

export default StyleSheet.create({
  container: {
    marginTop: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
    height: metrics.baseMargin * 10,
    width: metrics.baseMargin * 60,
    borderRadius: metrics.baseRadius * 1.3,
  },

  inputText: {
    fontWeight: 'bold',
    
  },

  inputBox: {
    width: '80%',
    height: '100%',
    borderRadius: metrics.baseRadius * 2,
    paddingHorizontal: metrics.baseRadius,
    paddingVertical: metrics.baseRadius,
    backgroundColor: colors.lightGray,
    fontWeight: 'bold',
  },
  icon:{
   paddingEnd: metrics.baseMargin * 3,
},
});
