import { useState } from 'react';
import AccordianItem from './AccordianItem';

const Accordian = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <div>
      {items?.map((item, index) => (
        <AccordianItem
          key={item.title}
          item={item}
          isExpanded={expandedIndex === index}
          setIsExpanded={() => {
            if (expandedIndex === index) setExpandedIndex(null);
            else setExpandedIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default Accordian;
