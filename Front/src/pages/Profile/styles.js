import {StyleSheet} from 'react-native';
import {metrics,colors,fonts} from '../../styles';

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightPink,
    },
    Name:{
        fontSize: fonts.title,
        fontWeight: 'bold',
        paddingBottom: metrics.baseMargin,

    },
    Botton:{
        alignItems: 'center',
        marginBottom: metrics.baseMargin * 50,
    }
});

export default styles;