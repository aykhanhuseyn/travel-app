import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Typography} from '../../components';
import AttractionList from '../../components/Attraction';
import Categories from '../../components/Categories';
import useCategories from '../../hooks/useCategories';
import styles from './styles';

const Home = () => {
  const {categories, category, changeCategory} = useCategories('all');
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.title}>
          <Typography.Title weight="regular" color="blue">
            Where do
          </Typography.Title>
          <Typography.Title color="blue">you want to go?</Typography.Title>
        </View>

        <View style={styles.label}>
          <Typography.Title level="h3">Explore attractions</Typography.Title>
        </View>

        <Categories
          value={category}
          categories={categories}
          onChange={changeCategory}
        />

        <AttractionList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
