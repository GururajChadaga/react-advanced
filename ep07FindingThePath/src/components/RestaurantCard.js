import { Link } from 'react-router-dom';
import { IMG_BASE_URL } from '../utils/constants';
const starLogo = require('../assets/img/star.svg');

const RestaurantCard = ({ resData }) => {
  const {
    name,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    cuisines,
    id: resId,
  } = resData;

  return (
    <div className='r-card-container'>
      <Link to={`restaurants/${resId}`}>
        <div className='r-card-logo-container'>
          <img
            className='r-card-logo'
            src={`${IMG_BASE_URL}${cloudinaryImageId}`}
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
      </Link>
    </div>
  );
};

export default RestaurantCard;
