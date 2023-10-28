import { IMG_BASE_URL } from '../utils/constants';

const DishCard = ({ dish }) => {
  const { name, price, defaultPrice, description, imageId } = dish;
  return (
    <div className='dish-card-container'>
      <div className='dish-card-details-container'>
        <div className='dish-card-primary-details-container'>{name}</div>
        <div className='dish-card-secondary-details-container'>
          <div>{`Rs. ${price / 100 || defaultPrice / 100}`}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className='dish-card-img-container'>
        <img className='dish-card-img' src={`${IMG_BASE_URL}${imageId}`} />
      </div>
    </div>
  );
};

export default DishCard;
