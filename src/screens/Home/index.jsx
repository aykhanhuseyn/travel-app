import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Typography} from '../../components';
import {Attraction} from '../../components/Attraction';
import Categories from '../../components/Categories';
import useCategories from '../../hooks/useCategories';
import useAttractions from '../../hooks/useAttractions';
import styles from './styles';

const Home = () => {
  const {categories, selectedCategory, changeCategory} = useCategories('All');
  const {attractions} = useAttractions(selectedCategory);
  return (
    <SafeAreaView>
      <FlatList
        data={attractions}
        ListHeaderComponent={
          <>
            <Typography.Title weight="regular" color="blue">
              Where do
            </Typography.Title>
            <Typography.Title color="blue">you want to go?</Typography.Title>

            <Typography.Title style={styles.label} level="h3">
              Explore attractions
            </Typography.Title>

            <Categories
              value={selectedCategory}
              categories={categories}
              onChange={changeCategory}
            />
          </>
        }
        ListEmptyComponent={
          <Typography.Title style={styles.empty} color="black-05" center>
            No content found
          </Typography.Title>
        }
        style={styles.container}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Attraction
            name={item.name}
            place={item.city}
            imageURL={item.images[0] ?? null}
            style={index % 2 ? {marginRight: 0} : {}}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
