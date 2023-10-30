import { useState } from 'react';
import { LOG_IN_OUT_BTN } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
import { SLICE_NAMES } from '../store/storeConstatns';
import { getCartItemsCount } from '../utils/helpers';

const Logo = require('../assets/img/logo.jpg');

const Header = () => {
  const [loginLogoutBtnLabel, setLoginLogoutBtnLabel] = useState(
    LOG_IN_OUT_BTN.LOGIN
  );
  const isOnline = useOnlineStatus();
  const cartItems = useSelector((store) => store[SLICE_NAMES.CART].items);

  return (
    <div className='flex justify-between mb-4 py-[0.625rem] px-8 border border-black border-solid'>
      <div className='flex items-center cursor-pointer'>
        <img className='h-8 w-8' src={Logo} />
      </div>
      <div className='text-2xl'>
        <ul className='flex justify-between p-0'>
          {isOnline && <li className='list-none cursor-none mr-8'>✅</li>}
          {!isOnline && <li className='list-none cursor-none mr-8'>❌</li>}
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nav-item font-bold'>
            <Link to='/cart'>{`Cart (${
              getCartItemsCount(cartItems) || 0
            })`}</Link>
          </li>
          <li className='list-none cursor-pointer mr-8'>
            <button
              className='w-16'
              onClick={() => {
                setLoginLogoutBtnLabel((prev) =>
                  prev === LOG_IN_OUT_BTN.LOGIN
                    ? LOG_IN_OUT_BTN.LOGOUT
                    : LOG_IN_OUT_BTN.LOGIN
                );
              }}
            >
              {loginLogoutBtnLabel}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
