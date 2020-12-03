//este arquivo apresenta a estilização do componente botão

//importações

import {  StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

//declaração da estilização do CardSearch

export default StyleSheet.create({
    container: {
        paddingTop: metrics.baseMargin * 4,
        
    },

    cardTitle: {

        left: metrics.baseMargin,
        paddingTop: metrics.baseMargin * 17,
        paddingRight: metrics.baseMargin,
        fontSize: fonts.title - 13,
        textAlign: 'left',
        bottom: metrics.baseMargin * 2,
        height: metrics.baseMargin * 22,
        width: metrics.baseMargin * 38,
        color: colors.black,
        

    },

    cardText: {

        left: metrics.baseMargin,
        paddingTop: metrics.baseMargin,
        paddingRight: metrics.baseMargin,
        fontSize: fonts.bar - 1,
        textAlign: 'left',
        bottom: metrics.baseMargin * 2,
        height: metrics.baseMargin * 22,
        width: metrics.baseMargin * 38,
        color: colors.primaryGreen,
        
        

    },
    


    card: {

    height: metrics.baseMargin * 28,
    width: metrics.baseMargin * 28,
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 1.4,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 1.3,
    

    },
    image:{
        position: 'absolute',
        height: metrics.baseMargin * 15,
        width: metrics.baseMargin * 28,
        
    }


});