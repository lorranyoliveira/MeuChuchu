import {StyleSheet} from 'react-native';
import {fonts} from '../../styles/fonts'; 
import {metrics} from '../../styles/metrics'; 

const styles = StyleSheet.create({
    button:{
        borderRadius: metrics.borderRadius,
        padding: metrics.baseMargin,
        margin: metrics.baseMargin,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    buttonText:{
        textAlign: 'center',
        //color: ''
        fontSize: fonts.base,
        fontFamily: 'Avenir-S',
    }
});

export default styles;