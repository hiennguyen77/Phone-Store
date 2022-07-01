import "./Brand.scss";
import { brands } from "../../../../mock-data/brand";

const Brand = () => {
  const handleClick = (id) => {
    const brandId = brands.find((brand) => {
      return brand.id === id;
    });

    console.log(brandId.id);
  };
  return (
    <>
      <div className="brand_wrap">
        <div className="brand_container">
          {brands.map((brand) => (
            <div
              onClick={() => handleClick(brand.id)}
              title={brand.name}
              className="brand_item"
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
