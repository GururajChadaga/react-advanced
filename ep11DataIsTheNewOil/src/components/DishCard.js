import { IMG_BASE_URL } from '../utils/constants';

const DishCard = ({ dish }) => {
  const { name, price, defaultPrice, description, imageId } = dish;
  return (
    <div className='flex justify-between self-center p-4 w-full mb-2 bg-[#f0f0f0] cursor-pointer rounded-lg'>
      <div className='flex flex-col'>
        <div className='text-xl'>{name}</div>
        <div className='mt-4 flex flex-col text-sm'>
          <div>{`Rs. ${price / 100 || defaultPrice / 100}`}</div>
          {/* <div>{description}</div> */}
        </div>
      </div>
      <div className='ml-4'>
        <img
          className='h-20 w-20 rounded-[2rem]'
          src={`${IMG_BASE_URL}${imageId}`}
        />
      </div>
    </div>
  );
};

export default DishCard;
