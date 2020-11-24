//importações

import { Dimensions } from 'react-native';

//declaração da métricas utilizadas na estilização

const { width, height } = Dimensions.get('window');

const metrics = {
  baseMargin: (20 / width) * 100,
  screenWidth: width,
  screenHeight: height,
  baseRadius: 10,
};

export default metrics;