const starLogo = require('../assets/img/star.svg');

const MenuRestaurantCard = ({ resInfo }) => {
  const { name, cuisines, city, avgRating, costForTwoMessage, locality } =
    resInfo;
  return (
    <div className='menu-r-container'>
      <div className='menu-r-details'>
        <div className='menu-r-primary-details'>
          <div>{name}</div>
        </div>
        <div className='menu-r-secondary-details'>
          <div>{cuisines?.join(', ')}</div>
          <div>{costForTwoMessage}</div>
          <div>{`${locality}, ${city}`}</div>
        </div>
      </div>
      <div className='menu-r-rating-container'>
        <div className='menu-r-rating'>
          {avgRating} <img className='menu-r-rating-logo' src={starLogo} />
        </div>
      </div>
    </div>
  );
};
export default MenuRestaurantCard;
