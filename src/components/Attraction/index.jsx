import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import Location from '../../assets/icons/location.svg';

export const Attraction = ({imageURL, name, place, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageURL}} />
      <View style={styles.details}>
        <Typography.Text weight="medium" style={styles.title}>
          {name}
        </Typography.Text>
        <View style={styles.descriptionWrapper}>
          <Location style={styles.icon} />
          <Typography.Text color="black-05" style={styles.description}>
            {place}
          </Typography.Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Attraction;
