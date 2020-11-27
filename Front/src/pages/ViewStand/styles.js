import {StyleSheet} from 'react-native';
import {metrics,colors,fonts} from '../../styles';

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightPink,
        paddingTop: 60,
    },
    Name:{
        fontSize: fonts.title,
        fontWeight: 'bold',
        paddingBottom: metrics.baseMargin * 0,
    },
    Botton:{
        //alignItems: 'center',
        marginBottom: metrics.baseMargin * 40,
    },
    Photo:{
        marginTop: metrics.baseMargin,
        width: metrics.baseMargin * 35, 
        height: metrics.baseMargin * 35, 
        borderRadius: metrics.baseMargin * 17.5, 
    }, 
    Container2:{
        marginTop: metrics.baseMargin * 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    Container3:{
        alignItems: 'center',
    },
    PlusButton:{
        alignSelf: 'flex-end',
        color: colors.primaryGreen,
        
    },
    PlusPos:{
        marginTop: metrics.baseMargin * 5,
        marginEnd: metrics.baseMargin * 18,
    },
    BackButton:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        color: colors.primaryGreen,
    },
    BackPos:{
        marginTop: metrics.baseMargin * 0,
        marginRight: metrics.baseMargin * 68,
        position : 'absolute'
    },
    HelpButton:{
        marginTop: metrics.baseMargin * 0,
        marginLeft: metrics.baseMargin * 78,
        position : 'absolute'
    }
    
});

export default styles;