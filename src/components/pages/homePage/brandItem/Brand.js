import { useDispatch, useSelector } from "react-redux";

import "./Brand.scss";
import { brands } from "../../../../mock-data/brand";
import { filterBrand } from "../../../../redux/actions";
import { filterBrandSelector } from "../../../../redux/selector";

const Brand = () => {
  const dispatch = useDispatch();
  const brandFilter = useSelector(filterBrandSelector);
  // console.log(brand);

  const handleClick = (id) => {
    const brandId = brands.find((brand) => {
      return brand.id === id;
    });
    dispatch(filterBrand(brandId.id));
  };

  return (
    <>
      <div className="brand_wrap">
        <div className="brand_container">
          {brands.map((brand) => (
            <div
              onClick={() => handleClick(brand.id)}
              title={brand.name}
              className={
                brandFilter.includes(brand.id)
                  ? "brand_item active"
                  : "brand_item"
              }
              key={brand.id}
            >
              <img src={brand.image} alt="brandImg" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Brand;
