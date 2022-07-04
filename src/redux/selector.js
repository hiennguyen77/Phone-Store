export const productSelector = (state) => {
  const updateProductFilter = state.products.filter((product) => {
    if (state.filterPrice.label === "Tất cả") {
      return (
        state.products.sort(state.filterSorting.value) &&
        product.brandId.includes(state.filterBrand)
      );
    } else {
      return (
        product.brandId.includes(state.filterBrand) &&
        state.filterPrice.value(product) &&
        state.products.sort(state.filterSorting.value)
      );
    }
  });

  //   console.log(">>", updateProductFilter);
  //   console.log("sorting", state.products.sort(state.filterSorting.value));
  return updateProductFilter;
};
export const showMoreSelector = (state) => state.showMore;
export const searchSelector = (state) => state.searchProduct;
export const filterBrandSelector = (state) => state.filterBrand;
export const filterPriceSelector = (state) => state.filterPrice;
export const filterSortingSelector = (state) => state.filterSorting;
