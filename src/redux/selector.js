export const productSelector = (state) => {
  // filter brand
  let result = state.products;

  if (state.filterBrand.length) {
    result = result.filter((product) =>
      state.filterBrand.includes(product.brandId)
    );
  }
  // filter price
  if (state.filterPrice.label !== "Tất cả") {
    result = result.filter((product) => state.filterPrice.value(product));
  }
  // sorting
  if (state.filterSorting.label !== "Nổi bật") {
    console.log(state.products.sort(state.filterSorting.value));
    result = result.sort(state.filterSorting.value);
  }
  // pipeline

  return result;
  //   const updateProductFilter = state.products.filter((product) => {
  //     if (state.filterPrice.label === "Tất cả") {
  //       return state.filterBrand.includes(product.brandId);
  //     } else {
  //       return (
  //         state.filterBrand.includes(product.brandId) &&
  //         state.filterPrice.value(product)
  //       );
  //     }
  //   });

  //   console.log(">>", updateProductFilter);
  //   console.log("sorting", state.products.sort(state.filterSorting.value));
  //   return updateProductFilter;
};
export const showMoreSelector = (state) => state.showMore;
export const searchSelector = (state) => state.searchProduct;
export const filterBrandSelector = (state) => state.filterBrand;
export const filterPriceSelector = (state) => state.filterPrice;
export const filterSortingSelector = (state) => state.filterSorting;
export const detailProductSelector = (state) => state.detailProduct;
