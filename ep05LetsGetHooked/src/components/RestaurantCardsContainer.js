import RestaurantCard from './RestaurantCard';

const RestaurantCardsContainer = ({ restaurants }) => {
  return (
    <div className='r-cards-container'>
      {restaurants.map((restaurantDetails) => (
        <RestaurantCard
          key={restaurantDetails.info.id}
          resData={restaurantDetails}
        />
      ))}
    </div>
  );
};

export default RestaurantCardsContainer;
