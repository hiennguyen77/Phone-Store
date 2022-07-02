import "./BackToTopBtn.scss";
import { BsArrowUp } from "react-icons/bs";
import { useState } from "react";

const BackToTopBtn = () => {
  const [appearBtnBackTop, setAppearBtnBackTop] = useState(false);
  const handleScroll = () => {
    window.scrollY > 200
      ? setAppearBtnBackTop(true)
      : setAppearBtnBackTop(false);
  };

  window.addEventListener("scroll", handleScroll);

  const handleBackTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {appearBtnBackTop && (
        <div className="backToTop_wrap">
          <button onClick={handleBackTop}>
            <i>
              <BsArrowUp />
            </i>
          </button>
        </div>
      )}
    </>
  );
};
export default BackToTopBtn;
