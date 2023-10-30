import { useDispatch, useSelector } from 'react-redux';
import { SLICE_NAMES } from '../store/storeConstatns';
import DishCard from './DishCard';
import { clearCart } from '../store/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store[SLICE_NAMES.CART].items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='font-bold text-2xl mb-4'>Cart</div>
      <div className='font-bold flex justify-end items-center text-2xl mb-4 w-10/12'>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      {Object.keys(cartItems).map((dishId) => {
        const dish = cartItems[dishId].dish;
        return (
          <div id={dish.id} className='w-10/12'>
            <DishCard dish={dish} />
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
