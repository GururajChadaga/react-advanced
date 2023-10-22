const Logo = require('../assets/img/logo.jpg');

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={Logo} />
      </div>
      <div className='nav-container'>
        <ul>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
