import { useState } from 'react';
import { LOG_IN_OUT_BTN } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';

const Logo = require('../assets/img/logo.jpg');

const Header = () => {
  const [loginLogoutBtnLabel, setLoginLogoutBtnLabel] = useState(
    LOG_IN_OUT_BTN.LOGIN
  );
  const isOnline = useOnlineStatus();

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={Logo} />
      </div>
      <div className='nav-container'>
        <ul>
          {isOnline && <li className='nav-item'>✅</li>}
          {!isOnline && <li className='nav-item'>❌</li>}
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nav-item'>
            <Link to='/cart'>Cart</Link>
          </li>
          <li className='nav-item login-logout-btn-container'>
            <button
              className='login-logout-btn'
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
