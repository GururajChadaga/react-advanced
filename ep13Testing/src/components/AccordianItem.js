import DishCard from './DishCard';
import { useState } from 'react';

const AccordianItem = ({ item, isExpanded, setIsExpanded }) => {
  return (
    <div>
      <div
        className='bg-slate-100 hover:bg-slate-200 mb-2 p-6 hover:p-5 h-12 flex justify-between items-center cursor-pointer shadow-md font-semibold'
        onClick={() => {
          setIsExpanded();
        }}
      >
        <div>{`${item.title} (${item.itemCards.length})`}</div>
        <div>{isExpanded ? <div>⬆️</div> : <div>⬇️</div>}</div>
      </div>
      {isExpanded && (
        <div className='flex flex-col p-1'>
          {item.itemCards.map((itemCard) => (
            <DishCard
              key={itemCard?.card?.info?.id}
              dish={itemCard?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordianItem;
