export const detailProductSelector = (state) => state.cart.detailProduct;
export const cartProductSelector = (state) => state.cart.cartProduct;

export const submitFormSelector = (state) => state.cart.submitForm;
export const totalPriceSelector = (state) => {
  const totalPrice = state.cart.cartProduct.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  );
  // console.log("total", totalPrice);

  return totalPrice;
};
