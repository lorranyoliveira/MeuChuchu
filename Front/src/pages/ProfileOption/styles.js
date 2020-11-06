//este arquivo apresenta a estilização da tela ProfileOption

//importações

import { StyleSheet } from 'react-native';
import { fonts, metrics, colors} from '../../styles';

//declaração da estilização da tela ProfileOption

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightGrey,

    },
    cardButton:{
        alignItems: 'center',
        marginBottom: metrics.baseMargin  * 50,

    },
    text: {

        textAlign: 'center',
        fontSize: fonts.base,
        fontWeight: 'bold',
        color: colors.black,
        paddingTop: metrics.baseMargin * 20,

    }

});

export default styles;

