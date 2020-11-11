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
        paddingBottom: metrics.baseMargin*0,
       // margin: metrics.baseMargin * 20,
    },
    Botton:{
        //alignItems: 'center',
        marginBottom: metrics.baseMargin * 30,
    },
    Photo:{
        alignItems: 'center',
        margin: metrics.baseMargin * 20,
        width: 200, 
        height: 200, 
        borderRadius: 200/ 2, 
    }
});

export default styles;