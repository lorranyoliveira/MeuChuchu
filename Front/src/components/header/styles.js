//este arquivo apresenta a estilização do componente header

// importações

import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

//estilizando o header

const styles = StyleSheet.create({
    header:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontSize: 30,
        color: colors.primaryGreen,
        letterSpacing: 1

    },
});

export default styles;