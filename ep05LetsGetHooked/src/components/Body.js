import { useState } from 'react';
import { restaurantsMock } from '../utils/mocks';
import RestaurantCardsContainer from './RestaurantCardsContainer';
import FilterRestaurants from './FilterRestaurants';

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsMock);
  return (
    <div className='body-container'>
      <FilterRestaurants setRestaurants={setRestaurants} />
      <RestaurantCardsContainer restaurants={restaurants} />
    </div>
  );
};

export default Body;
