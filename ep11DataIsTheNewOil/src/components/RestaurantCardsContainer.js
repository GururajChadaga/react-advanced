import RestaurantCard, { getTopRatedBadge } from './RestaurantCard';

const RestaurantCardTopRated = getTopRatedBadge(RestaurantCard);

const RestaurantCardsContainer = ({ restaurants }) => {
  return (
    <div className='flex flex-wrap flex-grow justify-center mt-4 p-4'>
      {restaurants.map((restaurantDetails) =>
        // <RestaurantCard
        //   key={restaurantDetails.info.id}
        //   resData={restaurantDetails.info}
        // />
        restaurantDetails.info.avgRating > 4.4 ? (
          <RestaurantCardTopRated
            key={restaurantDetails.info.id}
            resData={restaurantDetails.info}
          />
        ) : (
          <RestaurantCard
            key={restaurantDetails.info.id}
            resData={restaurantDetails.info}
          />
        )
      )}
    </div>
  );
};

export default RestaurantCardsContainer;
