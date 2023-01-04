import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 20,
    textAlign: 'auto',
  },
  block: {
    width: '100%',
  },
  center: {
    width: '100%',
    textAlign: 'center',
  },
});

export const colorStyles = StyleSheet.create({
  blue: {
    color: '#4681A3',
  },
  black: {
    color: '#000000',
  },
  'black-05': {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export const weightStyles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  medium: {
    fontWeight: '500',
  },
  regular: {
    fontWeight: '400',
  },
});

export const levelStyles = StyleSheet.create({
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
});

export const typeStyles = StyleSheet.create({
  primary: {},
  secondary: {},
  third: {},
});

export default styles;
