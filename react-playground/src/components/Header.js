import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SLICE_NAMES } from '../store/storeConstants';

const Header = () => {
  return (
    <div className='header'>
      <ul className='nav-items'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/demo-usememo'>useMemo</Link>
        </li>
        <li>
          <Link to='/demo-useref'>useRef</Link>
        </li>
        <li>
          <Link to='/demo-rtk'>RTK</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
