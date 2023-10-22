import { RES_LOGO_URL_PREFIX } from '../utils/constants';
const starLogo = require('../assets/img/star.svg');

const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, avgRating, cloudinaryImageId, cuisines } =
    resData.info;
  return (
    <div className='r-card-container'>
      <div className='r-card-logo-container'>
        <img
          className='r-card-logo'
          src={`${RES_LOGO_URL_PREFIX}${cloudinaryImageId}`}
        />
      </div>
      <div className='r-card-details-container'>
        <div className='r-card-details-primary'>
          <div>{name}</div>
          <div className='rating-container'>
            {avgRating} <img className='rating-logo' src={starLogo} />
          </div>
        </div>
        <div className='r-card-details-secondary'>
          <div>{costForTwo}</div>
          <div>{cuisines.slice(0, 3).join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
