import React from 'react';
import {Text as NativeText} from 'react-native';
import {styles, weightStyles, colorStyles, levelStyles} from './styles';

const Title = ({
  children,
  level = 'h1',
  weight = 'bold',
  color = 'black',
  style,
  center = false,
}) => (
  <NativeText
    style={[
      styles.title,
      styles.block,
      colorStyles[color],
      levelStyles[level],
      weightStyles[weight],
      center ? styles.center : {},
      style,
    ]}>
    {children}
  </NativeText>
);

const Text = ({
  children,
  weight = 'regular',
  color = 'black',
  center,
  style,
}) => (
  <NativeText
    style={[
      styles.text,
      colorStyles[color],
      weightStyles[weight],
      center ? styles.center : {},
      style,
    ]}>
    {children}
  </NativeText>
);

const Typography = {
  Title,
  Text,
};

export default Typography;
