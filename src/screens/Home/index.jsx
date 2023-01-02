import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Typography} from '../../components';
import styles from './styles';

const Home = () => {
  //
  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Typography.Title weight="regular" color="blue">
          Where do
        </Typography.Title>
        <Typography.Title color="blue">you want to go?</Typography.Title>
      </View>

      <View style={styles.label}>
        <Typography.Title weight="bold" style={{fontSize: 20}}>
          Explore attractions
        </Typography.Title>
      </View>
      <ScrollView horizontal>
        <Typography.Text style={{padding: 10, paddingLeft: 42}}>
          All
        </Typography.Text>
        {Array.from({length: 14}, () =>
          Math.round(Math.random() * 1_000_000),
        ).map(v => (
          <Typography.Text style={{padding: 10}}>{v}</Typography.Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
