const ShimmerCards = () => {
  const shimmerCards = new Array(10).fill().map((_, idx) => idx);
  return (
    <div className='flex flex-wrap flex-grow justify-center mt-4 p-4'>
      {shimmerCards.map((shimmer) => (
        <div
          key={shimmer}
          className='rounded-[2rem] m-4 w-[17rem] h-72 bg-[#f0f0f0]'
        ></div>
      ))}
    </div>
  );
};

export default ShimmerCards;
