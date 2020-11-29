import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
    header:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontSize: 30,
        color: colors.primaryGreen,
        letterSpacing: 1

    },
    help:{
        alignItems: 'flex-end',
        width: '100%',
        paddingRight: 20 ,
        justifyContent: 'space-between'
    },
    teste:{
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 20,  

    }

});

export default styles;