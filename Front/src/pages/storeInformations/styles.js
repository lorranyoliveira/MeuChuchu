import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightGrey,
        paddingTop: 30,
    },
    Input: {
        paddingTop: 10,
        alignItems: 'center',

    },
    Container2: {
        flex: 1,
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: metrics.baseMargin * 10,
        borderRadius: metrics.baseRadius,
        padding: metrics.baseMargin,
        margin: metrics.baseMargin,
    },
    textos: {
        fontSize: 20,
    },
    MeuChuchu: {
        color: colors.primaryGreen,
        fontSize: 35,
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
    pickerComponente: {
        height: 80,
        width: 350,
    }
});

export default styles;