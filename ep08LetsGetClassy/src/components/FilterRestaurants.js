import { useState } from 'react';

const FilterRestaurants = ({ restaurants, setFilteredRestaurants }) => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <div className='r-filter-container'>
      <input
        value={searchKey}
        onChange={(event) => setSearchKey(event.target.value)}
      />
      <button
        className='r-filter-btn'
        disabled={!searchKey.length}
        onClick={() => {
          setFilteredRestaurants(
            restaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchKey.toLocaleLowerCase())
            )
          );
        }}
      >
        Search
      </button>
      <button
        className='r-filter-btn'
        onClick={() => {
          setFilteredRestaurants(restaurants);
          setSearchKey('');
        }}
      >
        All
      </button>
      <button
        className='r-filter-btn'
        onClick={() => {
          setFilteredRestaurants(
            restaurants.filter((restaurant) => restaurant.info.avgRating >= 4.4)
          );
          setSearchKey('');
        }}
      >
        Top Rated
      </button>
    </div>
  );
};
export default FilterRestaurants;
