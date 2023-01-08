import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('window');
const sideSpacing = 32;
const imageSpacing = 20;
const imageWidth = width - 2 * sideSpacing;
const footerWith = imageWidth - 2 * imageSpacing;
export const footerItemCount = 5;
const footerPadding = 16;
const footerItemWith = Math.floor(
  (footerWith - footerItemCount * footerPadding - footerPadding) /
    footerItemCount,
);

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
    marginHorizontal: imageSpacing,
    marginVertical: imageSpacing,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: imageSpacing,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: footerPadding / 2,
    borderRadius: 16,
    width: footerWith,
    marginBottom: 8,
    marginHorizontal: imageSpacing,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
  },
  footerItem: {
    width: footerItemWith,
    height: footerItemWith,
    borderRadius: 8,
    marginHorizontal: footerPadding / 2,
  },
  footerItemLast: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    position: 'relative',
  },
  footerCover: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default styles;
