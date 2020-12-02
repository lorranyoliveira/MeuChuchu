//este arquivo apresenta a estilização da tela ViewStand

import {StyleSheet} from 'react-native';
import {metrics,colors,fonts} from '../../styles';

//declaração da estilização da tela ViewStand
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
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
    },
    Name:{
        fontSize: fonts.title,
        color: colors.black,
        width: '100%',
        textAlign: 'left',
    },
    NamePos:{
        flexDirection: 'row',
        marginTop: metrics.baseMargin * 47,
        marginLeft: metrics.baseMargin * 5,
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
        marginTop: metrics.baseMargin * 57,
        marginLeft: metrics.baseMargin * 5,
        position: 'absolute'
    },
    Button:{
        borderRadius: metrics.baseRadius,
        padding: metrics.baseMargin * 2,
        margin: metrics.baseMargin,
        justifyContent: 'space-between',
        alignSelf: 'center',
        backgroundColor: colors.primaryGreen,
    },
    ButtonPos:{
        flexDirection: 'row',
        marginTop: metrics.baseMargin * 66,
        marginBottom: metrics.baseMargin * 67,
        position: 'absolute'
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: fonts.base/1.5,
        color: colors.white,
    },
    ProductText:{
        padding: metrics.baseMargin * 11,
        alignSelf: 'flex-start',
        marginLeft: metrics.baseMargin * 16,
        marginTop: metrics.baseMargin * -35
    },
    ProductName:{
        fontSize: fonts.title/1.5,
        color: colors.primaryGreen,
        fontWeight: 'bold',
        textAlign: 'left',    
    },
    ProductsPos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: metrics.baseMargin * 68,
    },
    Product:{
        marginLeft: metrics.baseMargin * 2,
    }, 
    ProductImage:{
        marginRight: metrics.baseMargin,
        width: metrics.baseMargin * 25, 
        height: metrics.baseMargin * 25, 
        borderRadius: 15, 
        alignSelf: 'flex-start',
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
    ModalContacts:{
        flex:1,
        justifyContent: 'space-between',
    },
    PosContactsTitle:{
        position: 'absolute',
        marginTop: metrics.baseMargin * 5,
        marginLeft: metrics.baseMargin * 2,
    },
    ContactsTitle:{
        fontSize: fonts.title,
        color: colors.primaryGreen,
        textAlign: 'left',
    },
    ContactsPos:{
        marginTop: metrics.baseMargin * 19,
        marginLeft: metrics.baseMargin * 2,
        flex:1,
        flex:1,
        justifyContent: 'space-between',
    },
    Icon:{
        color: colors.primaryGreen,
    },
    ContactModal:{
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Contact:{
        justifyContent: 'space-between',
        marginBottom: metrics.baseMargin * 10,
    },
    Contacts:{
        fontSize: fonts.title/1.5,
        color: colors.black,
        position: 'absolute',
        alignSelf: 'flex-start',
        marginTop: metrics.baseMargin * 5,
        marginLeft: metrics.baseMargin * 15,
        justifyContent: 'space-between',
    },
    Phone:{
        color: colors.primaryGreen,
    },
    CloseButton:{
        alignSelf: 'flex-end',
        color: colors.primaryGreen,
    },
    ClosePos :{
        marginLeft: metrics.baseMargin * 0,
        marginTop: metrics.baseMargin * 5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        position : 'absolute'
    },
    ClosePos2 :{
        marginLeft: metrics.baseMargin * 73,
        marginTop: metrics.baseMargin * -65,
        alignItems: 'center',
        position : 'absolute'
    },
    PlusButton:{
        alignSelf: 'flex-start',
        color: colors.primaryGreen,
        marginLeft: metrics.baseMargin * -7,
        marginTop: metrics.baseMargin * -1,
    },
    PlusPos:{
        alignSelf: 'flex-start',
        position: 'absolute',
        marginTop: metrics.baseMargin * 68,
        marginLeft: metrics.baseMargin * 15,
    },
    AddProductsTitle:{
        marginTop: metrics.baseMargin,
        marginLeft: metrics.baseMargin,
        fontSize: fonts.title,
        color: colors.primaryGreen,
        textAlign: 'left',
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
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: metrics.baseMargin * 0,
        width: 450, 
        height: 200, 
    }
    
});

export default styles;