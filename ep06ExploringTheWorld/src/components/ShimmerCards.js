const ShimmerCards = () => {
  const shimmerCards = new Array(10).fill().map((_, idx) => idx);
  return (
    <div className='r-cards-container'>
      {shimmerCards.map((shimmer) => (
        <div key={shimmer} className='shimmer-card-container'></div>
      ))}
    </div>
  );
};

export default ShimmerCards;
