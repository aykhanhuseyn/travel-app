import React from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';

const Attraction = ({source, title}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: source}} />
      <View style={styles.details}>
        <Typography.Text weight="medium" style={styles.title}>
          {title}
        </Typography.Text>
        <View>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/location.svg')}
          />
          <Typography.Text color="black-05" style={styles.description}>
            Rome, Italy
          </Typography.Text>
        </View>
      </View>
    </View>
  );
};

const AttractionList = () => {
  return (
    <FlatList
      style={styles.container}
      data={[]}
      renderItem={({item}) => (
        <Attraction
          title="Colliseum"
          source="https://www.history.com/.image/ar_266:100%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_2560/MTkwODIxMzcwNDI5NDQ5OTEw/gettyimages-1081719544.webp"
        />
      )}
    />
  );
};

export default AttractionList;
