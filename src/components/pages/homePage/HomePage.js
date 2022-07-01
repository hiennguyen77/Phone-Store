import "./HomePage.scss";
import Brand from "./brandItem/Brand";
import PriceFilter from "./Filter/PriceFilter";
import SortFilter from "./Filter/SortFilter";
import CardItem from "../../cardProducts/CardItem";
const HomePage = () => {
  return (
    <>
      <div className="homePage_wrap grid wide">
        <Brand />
        <div className="filter" style={{ display: "flex" }}>
          <PriceFilter />
          <SortFilter />
        </div>

        <div className="product row no-gutters">
          <div className="col l-2-4">
            <CardItem />
          </div>
          <div className="col l-2-4">
            <CardItem />
          </div>
          <div className="col l-2-4">
            <CardItem />
          </div>
          <div className="col l-2-4">
            <CardItem />
          </div>
          <div className="col l-2-4">
            <CardItem />
          </div>
          <div className="col l-2-4">
            <CardItem />
          </div>
          <div className="col l-2-4">
            <CardItem />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
