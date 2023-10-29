import { useParams } from 'react-router-dom';
import DishCard from './DishCard';
import MenuRestaurantCard from './MenuRestaurantCard';
import ShimmerMenuCards from './ShimmerMenuCards';
import { useMenu } from '../utils/useMenu';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import Accordian from './Accordian';

const Menu = () => {
  const { resId } = useParams();
  const isOnline = useOnlineStatus();
  const { resInfo, itemCategories } = useMenu(resId);
  console.log('itemCategories :>> ', itemCategories);

  return isOnline ? (
    resInfo.name ? (
      <div className='w-[90%] p-4 self-center'>
        <MenuRestaurantCard resInfo={resInfo} />
        <Accordian items={itemCategories} />
      </div>
    ) : (
      <ShimmerMenuCards />
    )
  ) : (
    <div>Looks like you're offline, please check your internet conenction</div>
  );
};
export default Menu;
