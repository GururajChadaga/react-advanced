const ShimmerMenuCards = () => {
  const shimmerCards = new Array(10).fill().map((_, idx) => idx);
  return (
    <div className='menu-container'>
      {shimmerCards.map((shimmer) => (
        <div key={shimmer} className='menu-card-container-shimmer'></div>
      ))}
    </div>
  );
};

export default ShimmerMenuCards;
