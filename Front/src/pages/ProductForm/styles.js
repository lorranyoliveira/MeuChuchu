//este arquivo apresenta a estilização da tela ProductForm
//declaração da estilização da tela ViewStand
import {StyleSheet} from 'react-native';
import {metrics,colors} from '../../styles';

const styles = StyleSheet.create({
    Container : {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.lightPink,
        paddingTop: 60,
        position: 'relative',
    },
    inputs: {
        flex: 2,
        alignSelf: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        marginTop: metrics.baseMargin * -50,
        marginLeft: metrics.baseMargin * 25,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: metrics.baseMargin * 3,
    },
});

export default styles;