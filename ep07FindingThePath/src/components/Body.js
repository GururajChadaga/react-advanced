import { useEffect, useState } from 'react';
import RestaurantCardsContainer from './RestaurantCardsContainer';
import FilterRestaurants from './FilterRestaurants';
import { RESTAURANTS_API_BASE_URL } from '../utils/constants';
import ShimmerCards from './ShimmerCards';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANTS_API_BASE_URL);
    const restaurants = await response.json();
    setRestaurants(
      restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <div className='body-container'>
      <FilterRestaurants
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      {!filteredRestaurants?.length ? (
        <ShimmerCards />
      ) : (
        <RestaurantCardsContainer restaurants={filteredRestaurants} />
      )}
    </div>
  );
};

export default Body;
