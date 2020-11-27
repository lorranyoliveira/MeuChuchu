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
    Container1:{
        marginTop: metrics.baseMargin * 5,
        //flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
    },
    Name:{
        fontSize: fonts.title,
        color: colors.black,
        textAlign: 'left',
    },
    NamePos:{
        flexDirection: 'row',
        marginTop: metrics.baseMargin * 50,
        marginLeft: metrics.baseMargin * 5,
        //flex: 1, 
        //padding: 24,
        position: 'absolute'
    },
    Category:{
        fontSize: fonts.title,
        color: colors.primaryGreen,
        textAlign: 'left',
        fontSize: fonts.title/2,
    },
    CategoryPos:{
        flexDirection: 'row',
        marginTop: metrics.baseMargin * 60,
        marginLeft: metrics.baseMargin * 5,
        position: 'absolute'
    },
    Button:{
        borderRadius: metrics.baseRadius,
        padding: metrics.baseMargin * 2,
        margin: metrics.baseMargin,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: metrics.baseMargin * 57,
        backgroundColor: colors.primaryGreen,
    },
    ButtonPos:{
        flexDirection: 'row',
        //alignItems: 'center',
        marginBottom: metrics.baseMargin * 67,
        //position: 'absolute'
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: fonts.base/1.5,
        //fontWeight: 'bold',
        color: colors.white,
    },
    Photo:{
        marginTop: metrics.baseMargin,
        width: metrics.baseMargin * 35, 
        height: metrics.baseMargin * 35, 
        borderRadius: metrics.baseMargin * 17.5, 
    }, 
    Container2:{
        marginTop: metrics.baseMargin * 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
    },
    Container3:{
        alignItems: 'center',
    },
    modalContent:{
        flex:1,
    },
    CloseButton:{
        alignSelf: 'flex-end',
        color: colors.primaryGreen,
    },
    ClosePos :{
        marginTop: metrics.baseMargin * 5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        position : 'absolute'
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
        marginLeft: metrics.baseMargin * -2,
        position : 'absolute'
    },
    HelpButton:{
        marginTop: metrics.baseMargin * 0,
        marginLeft: metrics.baseMargin * 78,
        position : 'absolute'
    },
    Photo:{
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: metrics.baseMargin * 0,
        width: 450, 
        height: 200, 
    }
    
});

export default styles;