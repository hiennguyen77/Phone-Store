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
    result = result.sort(state.filter.filterSorting.value);
    // console.log(state.products.products.sort(state.filter.filterSorting.value));
  }
  // pipeline

  return result;
};

export const showMoreSelector = (state) => state.products.showMore;
