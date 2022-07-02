import { Dimensions } from 'react-native';

const setScreenSize = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const IPAD_WIDTH = 768;
  const IPAD_PRO_WIDTH = 1024;

  if (SCREEN_WIDTH < IPAD_WIDTH) {
    return 'small';
  } else if (SCREEN_WIDTH >= IPAD_WIDTH && SCREEN_WIDTH < IPAD_PRO_WIDTH) {
    return 'medium';
  } else if (SCREEN_WIDTH >= IPAD_PRO_WIDTH) {
    return 'large';
  } else {
    return 'large';
  }
};

const screenSize = setScreenSize();

export { screenSize };