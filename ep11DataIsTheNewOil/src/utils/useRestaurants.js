import { useEffect, useState } from 'react';
import { RESTAURANTS_API_BASE_URL } from '../utils/constants';

export const useRestaurants = () => {
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

  return { restaurants, filteredRestaurants, setFilteredRestaurants };
};
