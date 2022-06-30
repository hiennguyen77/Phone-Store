import { useState } from "react";
import "./LayoutHome.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const LayoutHome = ({ children }) => {
  const [headerScroll, setHeaderScroll] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 260) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };
  window.addEventListener("scroll", changeHeader);
  return (
    <>
      <Header headerScroll={headerScroll} />

      <div>
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
};
export default LayoutHome;
