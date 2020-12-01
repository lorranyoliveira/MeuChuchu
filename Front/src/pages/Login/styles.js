import {StyleSheet} from 'react-native';
import {metrics,colors,fonts} from '../../styles';

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        backgroundColor: colors.lightGrey,
        paddingTop: 30,
    },
    Container2:{
        flex : 1,
        alignItems: 'flex-start',
        width: '100%',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight:20
    },
    Container3:{
        flex: 3,
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20

    },
    Login:{
        fontSize: 25,
        paddingLeft: 10
    },
    Password:{
        fontSize: 25,
        paddingLeft: 10,
        
    },
    Input:{
        paddingTop:10,
        alignItems: 'center',
        
    },
    Boton:{
        fontSize:20,
        color : colors.black,
    },
    Botton:{
        fontSize:20,
        borderEndWidth: 10,
        color : colors.black,

    },
    Container4:{
        paddingTop: 40,
        alignItems: 'center',
        width: '100%',
    },
});

export default styles;