const starLogo = require('../assets/img/star.svg');

const MenuRestaurantCard = ({ resInfo }) => {
  const { name, cuisines, city, avgRating, costForTwoMessage, locality } =
    resInfo;
  return (
    <div className='flex justify-between mb-4'>
      <div className='flex flex-col justify-between'>
        <div className='text-5xl'>
          <div>{name}</div>
        </div>
        <div className='text-lg mt-3'>
          <div>{cuisines?.join(', ')}</div>
          <div>{costForTwoMessage}</div>
          <div>{`${locality}, ${city}`}</div>
        </div>
      </div>
      <div className='flex justify-center items-center text-7xl'>
        <div>
          {avgRating} <img className='w-12' src={starLogo} />
        </div>
      </div>
    </div>
  );
};
export default MenuRestaurantCard;
