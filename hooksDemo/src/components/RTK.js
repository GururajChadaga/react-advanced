import { useDispatch, useSelector } from 'react-redux';
import { SLICE_NAMES } from '../store/storeConstants';
import { updateUserName } from '../store/slices/userSlice';

const RTK = () => {
  const userName = useSelector((store) => store[SLICE_NAMES.USER].userName);
  const dispatch = useDispatch();
  const handleUserNameChange = (updatedUserName) => {
    dispatch(updateUserName(updatedUserName));
  };
  return (
    <div className='demo-container'>
      <div>RTK Demo</div>
      <div>UserName: {userName}</div>
      <input
        type='text'
        value={userName}
        onChange={(event) => {
          handleUserNameChange(event.target.value);
        }}
      />
    </div>
  );
};
export default RTK;
