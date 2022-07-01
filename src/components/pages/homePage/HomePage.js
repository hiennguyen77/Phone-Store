import "./HomePage.scss";
import Brand from "./brandItem/Brand";

const HomePage = () => {
  return (
    <>
      <div className="homePage_wrap grid wide">
        <Brand />
      </div>
    </>
  );
};
export default HomePage;
