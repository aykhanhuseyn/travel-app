import React from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import Typography from '../Typography';
import styles from './styles';

const Category = ({label, value, onPress, selected}) => {
  return (
    <TouchableOpacity onPress={() => onPress(value)}>
      <View
        style={
          selected ? styles.selectedCategoryWrapper : styles.categoryWrapper
        }>
        <Typography.Text
          style={
            selected
              ? [styles.category, styles.selectedCategory]
              : styles.category
          }>
          {label}
        </Typography.Text>
      </View>
    </TouchableOpacity>
  );
};

const CategoryList = ({value, style, onChange, categories = []}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      style={[styles.container, style]}
      showsHorizontalScrollIndicator={false}
      keyExtractor={cat => String(cat.value)}
      renderItem={({item}) => (
        <Category
          label={item.label}
          selected={item.value === value}
          onPress={() => onChange(item.value)}
        />
      )}
    />
  );
};

export default CategoryList;
