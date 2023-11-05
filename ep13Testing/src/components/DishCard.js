import { IMG_BASE_URL } from '../utils/constants';
import ModifyCartButton from './ModifyCartButton';

const DishCard = ({ dish }) => {
  const { name, price, defaultPrice, description, imageId } = dish;

  return (
    <div
      className='flex justify-between self-center p-4 w-full mb-2 bg-[#f0f0f0] rounded-lg'
      data-testid='dish-card'
    >
      <div className='flex flex-col'>
        <div className='text-xl'>{name}</div>
        <div className='mt-4 flex flex-col text-sm'>
          <div>{`Rs. ${price / 100 || defaultPrice / 100}`}</div>
          {/* <div>{description}</div> */}
        </div>
      </div>
      <div className='relative ml-4 flex flex-col justify-center'>
        <img
          className='h-24 w-24 rounded-[2rem]'
          src={`${IMG_BASE_URL}${imageId}`}
        />
        <ModifyCartButton dish={dish} />
      </div>
    </div>
  );
};

export default DishCard;
