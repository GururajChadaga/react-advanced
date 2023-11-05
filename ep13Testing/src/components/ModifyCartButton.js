import { SLICE_NAMES } from '../store/storeConstatns';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

const ModifyCartButton = ({ dish }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (dish) => {
    dispatch(addToCart(dish));
  };

  const handleRemoveFromCart = (dish) => {
    dispatch(removeFromCart(dish));
  };

  const cartItems = useSelector((store) => store[SLICE_NAMES.CART].items);

  return (
    <div className='absolute bottom-0 p-1 w-full flex justify-center '>
      {dish.id in cartItems ? (
        <div className='flex justify-center bg-black text-white rounded-2xl p-1'>
          <button
            className='mx-2 cursor-pointer'
            data-testid='remove-dish-btn'
            onClick={() => {
              handleRemoveFromCart(dish);
            }}
          >
            -
          </button>
          <div className='mx-2'>{cartItems[dish.id].count}</div>
          <button
            className='mx-2 cursor-pointer'
            data-testid='add-dish-btn'
            onClick={() => {
              handleAddToCart(dish);
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className='bg-black text-white rounded-2xl p-2 cursor-pointer'
          data-testid='first-add-dish-btn'
          onClick={() => {
            handleAddToCart(dish);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};
export default ModifyCartButton;
