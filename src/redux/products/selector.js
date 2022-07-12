export const productSelector = (state) => {
  // filter brand
  let result = state.products.products;

  if (state.filter.filterBrand.length) {
    result = result.filter((product) =>
      state.filter.filterBrand.includes(product.brandId)
    );
  }
  // filter price
  if (state.filter.filterPrice.label !== "Tất cả") {
    result = result.filter((product) =>
      state.filter.filterPrice.value(product)
    );
  }
  // sorting
  if (state.filter.filterSorting.label !== "Nổi bật") {
    console.log(state.products.products.sort(state.filter.filterSorting.value));
    result = result.sort(state.filter.filterSorting.value);
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

export const showMoreSelector = (state) => state.products.showMore;
