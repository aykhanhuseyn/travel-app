import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  label: {
    marginVertical: 8,
  },
  empty: {
    marginTop: 32,
  },
  attraction: index => (index % 2 ? {marginRight: 0} : {}),
});

export default styles;
