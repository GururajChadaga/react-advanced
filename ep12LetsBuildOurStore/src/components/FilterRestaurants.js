import { useState } from 'react';

const FilterRestaurants = ({ restaurants, setFilteredRestaurants }) => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <div className='flex mb-4'>
      <input
        className='border border-black border-solid rounded-lg p-2'
        value={searchKey}
        onChange={(event) => setSearchKey(event.target.value)}
      />
      <button
        className='w-24 cursor-pointer my-0 ml-4 bg-slate-200 rounded-lg p-1'
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
        className='w-24 cursor-pointer my-0 ml-4 bg-slate-200 rounded-lg p-1'
        onClick={() => {
          setFilteredRestaurants(restaurants);
          setSearchKey('');
        }}
      >
        All
      </button>
      <button
        className='w-24 cursor-pointer my-0 ml-4 bg-slate-200 rounded-lg p-1'
        onClick={() => {
          setFilteredRestaurants(
            restaurants.filter((restaurant) => restaurant.info.avgRating > 4.4)
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
