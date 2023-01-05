import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('window');
const sideSpacing = 32;
const imageWidth = width - 2 * sideSpacing;

const styles = StyleSheet.create({
  container: {
    margin: sideSpacing,
  },
  image: {
    width: imageWidth,
    height: Math.round(imageWidth * 1.24),
    marginBottom: 48,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  imageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 42,
    height: 42,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 21,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  imageFooter: {
    flexDirection: 'row',
    width: imageWidth - 48,
    paddingHorizontal: 24,
    paddingVertical: 8,
    height: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 16,
  },
  footerItem: {
    width: 48,
    height: 48,
  },
});

export default styles;
