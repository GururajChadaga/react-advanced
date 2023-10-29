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
    <div className='rounded-[2rem] m-4 w-[17rem] p-[1.125rem] max-h-96 hover:cursor-pointer hover:bg-[#f0f0f0] hover:p-1'>
      <Link to={`restaurants/${resId}`}>
        <div>
          <img
            className='h-48 w-full rounded-[2rem]'
            src={`${IMG_BASE_URL}${cloudinaryImageId}`}
          />
        </div>
        <div className='my-2 mx-4 flex flex-col justify-around'>
          <div className=' text-xl flex justify-between'>
            <div>{name}</div>
            <div className='flex'>
              {avgRating} <img className='h-5 w-5 ml-1' src={starLogo} />
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div>{costForTwo}</div>
            <div>{cuisines.slice(0, 3).join(', ')}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
