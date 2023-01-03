import {useRef, useState} from 'react';
import {categories} from '../data/categories';

const useCategories = defaultValue => {
  const [category, setCategory] = useState(defaultValue);
  const change = useRef(value => {
    setCategory(value);
  });

  return {category, categories, changeCategory: change.current};
};

export default useCategories;
