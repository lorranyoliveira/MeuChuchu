//este arquivo apresenta a estilização do componente botão

//importações

import { StyleSheet} from 'react-native';
import { colors, fonts, metrics} from '../../styles';

//declaração da estilização do botão

const styles = StyleSheet.create({
  button: {
    borderRadius: metrics.baseRadius,
    padding: metrics.baseMargin,
    margin: metrics.baseMargin,
    justifyContent: 'space-between',
    alignSelf: 'center',

  },

  buttonText: {
        textAlign: 'center',
        fontSize: fonts.base,
        color: colors.black,        
      },
});

export default styles;