import { restaurantsMock } from '../utils/mocks';
import RestaurantCard from './RestaurantCard';

const RestaurantCardsContainer = () => {
  return (
    <div className='r-cards-container'>
      {restaurantsMock.map((restaurantDetails) => (
        <RestaurantCard
          key={restaurantDetails.info.id}
          resData={restaurantDetails}
        />
      ))}
    </div>
  );
};

export default RestaurantCardsContainer;
