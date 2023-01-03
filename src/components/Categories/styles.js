import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 26,
    display: 'flex',
    gap: 10,
  },
  category: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '400',
  },
  selectedCategory: {
    color: '#000000',
    fontWeight: '600',
  },
  categoryWrapper: {
    margin: 8,
    paddingVertical: 2,
  },
  selectedCategoryWrapper: {
    margin: 8,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#4681A3',
  },
});

export default styles;
