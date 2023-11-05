export const getCartItemsCount = (cartItems) => {
  return Object.values(cartItems).reduce(
    (acc, cartItem) => acc + cartItem.count,
    0
  );
};

export const getSumOfTwoNumbers = (a, b) => {
  return +a + +b;
};
