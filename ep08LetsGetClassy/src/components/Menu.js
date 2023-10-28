import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API_BASE_URL, MENU_CARD_TYPES } from '../utils/constants';
import DishCard from './DishCard';
import MenuRestaurantCard from './MenuRestaurantCard';
import ShimmerMenuCards from './ShimmerMenuCards';

const Menu = () => {
  const { resId } = useParams();
  const [dishes, setDishes] = useState([]);
  const [resInfo, setResInfo] = useState({});

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API_BASE_URL}${resId}`);
    const resMenu = await response.json();
    const resInfo = resMenu?.data?.cards[0]?.card?.card?.info;
    const menuCards =
      resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    const itemCategories = menuCards.filter(
      (menuCard) =>
        menuCard?.card?.card['@type'] === MENU_CARD_TYPES.ITEM_CATEGORY
    );
    const itemCards = itemCategories[0]?.card?.card?.itemCards;
    const dishes = itemCards
      .filter((itemCard) => itemCard?.card['@type'] === MENU_CARD_TYPES.DISH)
      .map((dish) => dish?.card?.info);
    setResInfo(resInfo);
    setDishes(dishes);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo.name ? (
    <div className='menu-container'>
      <MenuRestaurantCard resInfo={resInfo} />
      {dishes.map((dish) => (
        <DishCard key={dish?.id} dish={dish} />
      ))}
    </div>
  ) : (
    <ShimmerMenuCards />
  );
};
export default Menu;
