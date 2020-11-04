import {StyleSheet} from 'react-native';
import { fonts} from '../../styles/fonts';

const styles = StyleSheet.create({
    card: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text:{
        textAlign: 'center',
        //color: ''
        fontSize: fonts.base,
        fontFamily: 'Avenir-S',
    } 

});

export default styles;

