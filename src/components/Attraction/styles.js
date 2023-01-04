import {StyleSheet, Dimensions} from 'react-native';

const sideSpacing = 32;
const gap = 16;
const {width} = Dimensions.get('window');
const cardWidth = Math.round((width - 2 * sideSpacing - gap) / 2);

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 16,
    width: cardWidth,
    borderColor: '#E2E2E2',
    marginRight: gap,
    marginBottom: gap,
  },
  image: {
    width: cardWidth - 10,
    height: Math.round((cardWidth - 10) * 0.6),
    borderRadius: 12,
  },
  details: {
    marginVertical: 12,
  },
  title: {
    fontSize: 12,
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 4,
  },
  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  description: {
    fontSize: 8,
  },
});

export default styles;
