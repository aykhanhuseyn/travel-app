import {useRef, useState} from 'react';
import categories from '../data/categories.json';

const modifiedCategories = ['All', ...categories].map(value => ({
  label: value,
  value,
}));

const useCategories = defaultValue => {
  const [selectedCategory, setSelectedCategory] = useState(defaultValue);
  const change = useRef(value => {
    setSelectedCategory(value);
  });

  return {
    selectedCategory,
    categories: modifiedCategories,
    changeCategory: change.current,
  };
};

export default useCategories;
