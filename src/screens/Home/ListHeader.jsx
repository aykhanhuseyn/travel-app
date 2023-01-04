import React, {memo} from 'react';
import {Typography, Categories} from '../../components';
import styles from './styles';

const ListHeader = ({selectedCategory, categories, changeCategory}) => {
  return (
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
  );
};

export default memo(ListHeader);
