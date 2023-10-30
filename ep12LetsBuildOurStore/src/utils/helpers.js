export const getCartItemsCount = (cartItems) => {
  return Object.values(cartItems).reduce(
    (acc, cartItem) => acc + cartItem.count,
    0
  );
};
