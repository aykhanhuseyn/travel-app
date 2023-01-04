import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Typography from '../../components/Typography';

const Details = () => {
  const {
    params: {item},
  } = useRoute();
  //
  return (
    <View>
      <Typography.Title>{item?.name}</Typography.Title>
    </View>
  );
};

export default Details;
