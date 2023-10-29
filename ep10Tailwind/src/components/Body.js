import RestaurantCardsContainer from './RestaurantCardsContainer';
import FilterRestaurants from './FilterRestaurants';
import ShimmerCards from './ShimmerCards';
import { useRestaurants } from '../utils/useRestaurants';
import { useOnlineStatus } from '../utils/useOnlineStatus';

const Body = () => {
  const isOnline = useOnlineStatus();
  const { restaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurants();

  return isOnline ? (
    <div className='flex flex-col flex-grow p-4 mb-4 border border-black border-solid'>
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
  ) : (
    <div>Looks like you're offline, please check your internet conenction</div>
  );
};

export default Body;
