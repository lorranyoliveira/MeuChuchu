import {  StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

export default StyleSheet.create({
    container: {
        paddingTop: metrics.baseMargin * 4,
        
    },

    cardTitle: {


        left: metrics.baseMargin * 40,
        paddingTop: metrics.baseMargin * 0.8,
        fontSize: fonts.title,
        height: metrics.baseMargin * 7,
        width: metrics.baseMargin * 63,
        

    },

    cardText: {

        left: metrics.baseMargin * 35,
        paddingTop: metrics.baseMargin * 3,
        paddingRight: metrics.baseMargin,
        fontSize: fonts.bar,
        textAlign: 'left',
        bottom: metrics.baseMargin * 2,
        height: metrics.baseMargin * 22,
        width: metrics.baseMargin * 38,
        

    },
    


    card: {

        backgroundColor: colors.white,
        height: metrics.baseMargin * 20,
        width: metrics.baseMargin * 60,
        borderRadius: metrics.baseRadius * 1.3,

    },
    image:{
        width: metrics.baseMargin * 10,
        height: metrics.baseMargin * 10,
    }


});