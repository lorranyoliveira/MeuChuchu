import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const metrics = {
    baseMargin: (20/width)*100,
    screenWidth: width,
    screenHeight: height,
    baseRadius: 5,
};

export default metrics;