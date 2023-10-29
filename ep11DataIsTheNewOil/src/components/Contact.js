import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Contact = () => {
  const { userName, setUserName } = useContext(UserContext);
  return (
    <div>
      <label>Username</label>
      <input
        className='border border-black border-solid ml-4 rounded-lg p-1'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
    </div>
  );
};
export default Contact;
