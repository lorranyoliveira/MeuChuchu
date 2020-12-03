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


        left: metrics.baseMargin * 2.5,
        paddingTop: metrics.baseMargin * 0.8,
        fontSize: fonts.base,
        height: metrics.baseMargin * 7,
        width: metrics.baseMargin * 63,
        fontWeight: 'bold',

    },

    cardText: {


        left: metrics.baseMargin * 2.5,
        paddingTop: metrics.baseMargin * 3,
        paddingRight: metrics.baseMargin,
        fontSize: fonts.base * 0.58,
        textAlign: 'left',
        fontWeight: 'bold',
        bottom: metrics.baseMargin * 2,
        height: metrics.baseMargin * 22,
        width: metrics.baseMargin * 38,

    },
    preco:{
        left: metrics.baseMargin * 2,
        paddingTop: metrics.baseMargin * 3,
        paddingRight: metrics.baseMargin,
        fontSize: fonts.base * 0.58,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: metrics.baseMargin * 2,
        height: metrics.baseMargin * 50,
        width: metrics.baseMargin * 25,

    },


    card: {

        backgroundColor: colors.white,
        height: metrics.baseMargin * 20,
        width: metrics.baseMargin * 60,
        borderRadius: metrics.baseRadius * 1.3,

    },


});