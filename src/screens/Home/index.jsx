import React, {memo} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCategories, useAttractions} from '../../hooks';
import {Attraction} from '../../components';
import ListHeader from './ListHeader';
import NoContent from './NoContent';
import styles from './styles';

const Home = () => {
  const navigation = useNavigation();
  const {categories, selectedCategory, changeCategory} = useCategories('All');
  const {attractions} = useAttractions(selectedCategory);

  return (
    <SafeAreaView>
      <FlatList
        data={attractions}
        ListHeaderComponent={
          <ListHeader
            categories={categories}
            changeCategory={changeCategory}
            selectedCategory={selectedCategory}
          />
        }
        ListEmptyComponent={<NoContent />}
        style={styles.container}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Attraction
            name={item.name}
            place={item.city}
            style={styles.attraction(index)}
            imageURL={item.images[0] ?? null}
            onPress={() => navigation.navigate('Details', {item})}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(Home);
