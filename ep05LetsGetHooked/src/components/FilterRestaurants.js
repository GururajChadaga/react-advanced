import { restaurantsMock } from '../utils/mocks';

const FilterRestaurants = ({ setRestaurants }) => {
  return (
    <div className='r-filter-container'>
      <button
        className='r-filter-btn'
        onClick={() => {
          setRestaurants(restaurantsMock);
        }}
      >
        All
      </button>
      <button
        className='r-filter-btn'
        onClick={() => {
          setRestaurants((prev) =>
            prev.filter((restaurant) => restaurant.info.avgRating >= 4.5)
          );
        }}
      >
        Top Rated
      </button>
    </div>
  );
};
export default FilterRestaurants;
