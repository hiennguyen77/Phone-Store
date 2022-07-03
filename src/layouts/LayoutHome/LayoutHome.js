import "./LayoutHome.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const LayoutHome = ({ children }) => {
  return (
    <>
      <Header />

      <div>
        <div className="content ">{children}</div>
      </div>

      <Footer />
    </>
  );
};
export default LayoutHome;
