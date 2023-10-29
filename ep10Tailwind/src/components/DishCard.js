import { IMG_BASE_URL } from '../utils/constants';

const DishCard = ({ dish }) => {
  const { name, price, defaultPrice, description, imageId } = dish;
  return (
    <div className='min-h-[6rem] flex justify-between p-4 hover:bg-[#f0f0f0] hover:cursor-pointer hover:p-2 hover:rounded-[2rem]'>
      <div className='flex flex-col'>
        <div className='text-[2rem]'>{name}</div>
        <div className='mt-4 flex flex-col text-xl'>
          <div>{`Rs. ${price / 100 || defaultPrice / 100}`}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className='ml-4 min-w-[10rem]'>
        <img
          className='h-40 w-40 rounded-[2rem]'
          src={`${IMG_BASE_URL}${imageId}`}
        />
      </div>
    </div>
  );
};

export default DishCard;
