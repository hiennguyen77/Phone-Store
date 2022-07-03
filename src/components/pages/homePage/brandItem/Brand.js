import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
// import { useState } from "react";
import "./Brand.scss";
import { brands } from "../../../../mock-data/brand";
import { filterBrand } from "../../../../redux/actions";
import { filterBrandSelector } from "../../../../redux/selector";
const Brand = () => {
  // const [activeBrand, setActiveBrand] = useState(false);
  const dispatch = useDispatch();
  const filterBrandArr = useSelector(filterBrandSelector);

  const handleClick = (id) => {
    const brandId = brands.find((brand) => {
      return brand.id === id;
    });
    // console.log(brandId)=>{}

    const findIndex = filterBrandArr.findIndex((brand) => {
      // console.log(brand, brandId);
      return brand === brandId.id;
    });

    if (findIndex === -1) {
      dispatch(filterBrand(brandId.id));
    } else {
      const removeBrand = filterBrandArr.splice(findIndex, "");
      dispatch(filterBrand(removeBrand));
      console.log(removeBrand);
    }
    // console.log(findIndex, filterBrandArr);
  };

  return (
    <>
      <div className="brand_wrap">
        <div className="brand_container">
          {brands.map((brand) => (
            <div
              onClick={() => handleClick(brand.id)}
              title={brand.name}
              className=" brand_item"
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
