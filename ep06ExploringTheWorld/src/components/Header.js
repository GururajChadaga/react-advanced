import { useState } from 'react';
import { LOG_IN_OUT_BTN } from '../utils/constants';

const Logo = require('../assets/img/logo.jpg');

const Header = () => {
  const [loginLogoutBtnLabel, setLoginLogoutBtnLabel] = useState(
    LOG_IN_OUT_BTN.LOGIN
  );
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={Logo} />
      </div>
      <div className='nav-container'>
        <ul>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Cart</li>
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
