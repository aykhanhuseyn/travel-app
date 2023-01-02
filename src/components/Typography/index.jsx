import React from 'react';
import {Text as NativeText} from 'react-native';
import styles from './styles';

const Title = ({children, weight = 'bold', color = 'black', style}) => (
  <NativeText
    style={[styles.title, styles.color[color], styles.weight[weight], style]}>
    {children}
  </NativeText>
);

const Text = ({children, weight, style}) => (
  <NativeText
    style={[styles.text, styles.color.black, styles.weight[weight], style]}>
    {children}
  </NativeText>
);

const Typography = {
  Title,
  Text,
};

export default Typography;
