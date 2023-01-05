import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Typography from '../../components/Typography';
import styles from './styles';

const Details = () => {
  const navigation = useNavigation();
  const {
    params: {item},
  } = useRoute();
  const image = item?.images?.[0] ?? null;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground style={styles.image} source={{uri: image}}>
        <View style={styles.imageHeader}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/arrow-left.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/share.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageFooter}>
          {item?.images?.map(url => (
            <Image key={url} source={{url}} style={styles.footerItem} />
          ))}
        </View>
      </ImageBackground>
      <Typography.Title>{item?.name}</Typography.Title>
    </ScrollView>
  );
};

export default Details;
