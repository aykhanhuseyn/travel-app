import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Typography from '../../components/Typography';
import styles, {footerItemCount} from './styles';

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
          <Pressable
            hitSlop={8}
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/arrow-left.png')}
            />
          </Pressable>
          <Pressable
            hitSlop={8}
            onPress={() => {}}
            style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/share.png')}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Gallery', {images: item?.images});
          }}>
          <View style={styles.footer}>
            {item?.images?.map((uri, index) => {
              if (index < footerItemCount - 1) {
                return (
                  <Image
                    key={uri}
                    source={{uri}}
                    style={[
                      styles.footerItem,
                      index === footerItemCount - 1 && styles.footerItemLast,
                    ]}
                  />
                );
              }
              if (index === footerItemCount - 1) {
                return (
                  <ImageBackground
                    key={uri}
                    source={{uri}}
                    style={[styles.footerItem, styles.footerItemLast]}>
                    {item?.images.length > index + 1 && (
                      <View style={styles.footerCover}>
                        <Typography.Text color="white">
                          +{item?.images.length - footerItemCount}
                        </Typography.Text>
                      </View>
                    )}
                  </ImageBackground>
                );
              }
              return null;
            })}
          </View>
        </Pressable>
      </ImageBackground>
      <Typography.Title>{item?.name}</Typography.Title>
    </ScrollView>
  );
};

export default Details;
