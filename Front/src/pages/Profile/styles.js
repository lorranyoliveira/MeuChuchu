import {StyleSheet} from 'react-native';
import {metrics,colors,fonts} from '../../styles';

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightPink,
        paddingTop: 30,
    },
    Name:{
        fontSize: fonts.title,
        fontWeight: 'bold',
        paddingBottom: metrics.baseMargin*0,
    },
    Botton:{
        //alignItems: 'center',
        marginBottom: metrics.baseMargin * 40,
    },
    Photo:{
        alignItems: 'center',
        margin: metrics.baseMargin * 10,
        width: 200, 
        height: 200, 
        borderRadius: 200/ 2, 
    }, 
    Container2:{
        alignItems: 'flex-end',
        width: '100%',
        paddingRight: 20,
    },
    Container3:{
        alignItems: 'center',
    }
    
});

export default styles;