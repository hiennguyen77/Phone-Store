import "./HomePage.scss";
import Brand from "./brandItem/Brand";
import PriceFilter from "./Filter/PriceFilter";
import SortFilter from "./Filter/SortFilter";
import CardItem from "../../cardProducts/CardItem";
import { useSelector } from "react-redux/es/exports";
import { productSelector } from "../../../redux/selector";
const HomePage = () => {
  const products = useSelector(productSelector);

  return (
    <>
      <div className="homePage_wrap grid wide">
        <Brand />
        <div className="filter" style={{ display: "flex" }}>
          <PriceFilter />
          <SortFilter />
        </div>

        <div className="product row no-gutters">
          {products.map((product) => (
            <div key={product.id} className="col l-2-4">
              <CardItem />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
