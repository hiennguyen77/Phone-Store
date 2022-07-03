export const productSelector = (state) => {
  const updateProductFilter = state.products.filter((product) => {
    return product.brandId.includes(state.filterBrand);
  });
  return updateProductFilter;
};
export const showMoreSelector = (state) => state.showMore;
export const searchSelector = (state) => state.searchProduct;
export const filterBrandSelector = (state) => state.filterBrand;
