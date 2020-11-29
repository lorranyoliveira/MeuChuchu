import {StyleSheet} from 'react-native';
import {metrics,colors,fonts} from '../../styles';

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightPink,
        paddingTop: 60,
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
    Container3:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
    },
    
});

export default styles;