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
        paddingTop: 30,
<<<<<<< HEAD
        
      

=======
        backgroundColor: colors.lightGrey,
>>>>>>> 09f7cae3f5c79aa46cab34bac6f03b02996f3012
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
        paddingTop: metrics.baseMargin * 10,

    }

});

export default styles;

