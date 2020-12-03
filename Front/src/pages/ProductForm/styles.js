//este arquivo apresenta a estilização da tela ProductForm
//declaração da estilização da tela ViewStand
import {StyleSheet} from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightPink,
        paddingTop: 30,
    },
    Input:{
        paddingTop:10,
        alignItems: 'center',
        
    },
    Container2:{
        flex: 1,
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30
    },
    textos:{
        fontSize: 18,
    },
    MeuChuchu:{
        color : colors.primaryGreen,
        fontSize : 35,
    },
    Container3: {
        flex: 2,
        alignItems: 'center',
        width: '100%',
        marginTop: metrics.baseMargin * 10,
        borderRadius: metrics.baseRadius,
        padding: metrics.baseMargin,
        margin: metrics.baseMargin,
    },
    button: {
        borderRadius: metrics.baseRadius,
        padding: metrics.baseMargin,
        margin: metrics.baseMargin,
        marginTop: metrics.baseMargin * 5,
        justifyContent: 'space-between',
        alignSelf: 'center',
        backgroundColor: "#3E782B",
        width: 120
        // marginTop: metrics.baseMargin * 10,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: fonts.base,
        fontWeight: 'bold',
        color: "#ffffff",

    },
});

export default styles;