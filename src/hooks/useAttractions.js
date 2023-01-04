import {useEffect, useState} from 'react';
import attractionsData from '../data/attractions.json';
// import attractionsData2 from '../data/attractions.json';

// const attractionsData = [
//   ...attractionsData2.map(x => ({...x, id: '1' + x.id})),
//   ...attractionsData2.map(x => ({...x, id: '2' + x.id})),
//   ...attractionsData2.map(x => ({...x, id: '3' + x.id})),
// ];

const useAttractions = category => {
  const [attractions, setAttractions] = useState(attractionsData);

  useEffect(() => {
    if (!category || category === 'All') {
      setAttractions(attractionsData);
    } else {
      setAttractions(() => {
        return attractionsData.filter(attraction =>
          attraction.categories.includes(category),
        );
      });
    }
  }, [category]);

  return {attractions};
};

export default useAttractions;
