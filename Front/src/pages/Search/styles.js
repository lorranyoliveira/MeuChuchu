import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightGrey,

    },

    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        marginTop: metrics.baseRadius * 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primaryGreen,
        height: metrics.baseMargin * 10,
        width: metrics.baseMargin * 60,
        borderRadius: metrics.baseRadius * 1.3,
        paddingLeft:metrics.baseMargin * 5,
       left: metrics.baseMargin,
        
       
    },
    


});

export default styles;

