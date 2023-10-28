import { useParams } from 'react-router-dom';
import DishCard from './DishCard';
import MenuRestaurantCard from './MenuRestaurantCard';
import ShimmerMenuCards from './ShimmerMenuCards';
import { useMenu } from '../utils/useMenu';
import { useOnlineStatus } from '../utils/useOnlineStatus';

const Menu = () => {
  const { resId } = useParams();
  const isOnline = useOnlineStatus();
  const { resInfo, dishes } = useMenu(resId);

  return isOnline ? (
    resInfo.name ? (
      <div className='menu-container'>
        <MenuRestaurantCard resInfo={resInfo} />
        {dishes.map((dish) => (
          <DishCard key={dish?.id} dish={dish} />
        ))}
      </div>
    ) : (
      <ShimmerMenuCards />
    )
  ) : (
    <div>Looks like you're offline, please check your internet conenction</div>
  );
};
export default Menu;
