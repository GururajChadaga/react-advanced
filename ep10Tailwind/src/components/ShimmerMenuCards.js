const ShimmerMenuCards = () => {
  const shimmerCards = new Array(10).fill().map((_, idx) => idx);
  return (
    <div className='w-[90%] p-4 self-center'>
      {shimmerCards.map((shimmer) => (
        <div
          key={shimmer}
          className='w-full h-[10.25rem] rounded-[2rem] flex justify-between mb-10 p-4 bg-[#f0f0f0]'
        ></div>
      ))}
    </div>
  );
};

export default ShimmerMenuCards;
