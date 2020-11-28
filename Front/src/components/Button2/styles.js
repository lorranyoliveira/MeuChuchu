import { StyleSheet} from 'react-native';
import { colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  button: {
    borderRadius: metrics.baseRadius,
    padding: metrics.baseMargin,
    margin: metrics.baseMargin,
    justifyContent: 'space-between',
    alignSelf: 'center',
    // marginTop: metrics.baseMargin * 10,

  },

  buttonText: {
        textAlign: 'center',
        fontSize: fonts.base,
        fontWeight: 'bold',
        color: colors.black,
        
      },
});

export default styles;