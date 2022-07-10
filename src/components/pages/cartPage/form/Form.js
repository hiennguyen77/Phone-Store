import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getProvinces, getDistricts, getWards } from "./formUtils";
import { submitForm } from "../../../../redux/actions";

import "./Form.scss";

const Form = (props) => {
  const { cartProducts, totalPrice } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gender, setGender] = useState({ gender: "Anh" });
  //   const [nameInput, setNameInput] = useState("");
  //   const [phone, setPhone] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [district, setDistrict] = useState([]);
  const [wards, setWards] = useState([]);

  const handleChecked = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGender({
      ...gender,
      [name]: value,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      street: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Trường này bắt buộc")
        .min(4, "* Tối thiểu 4 kí tự"),

      phone: Yup.string()
        .required("* Trường này bắt buộc")
        .matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, "* Số không hợp lệ"),
      street: Yup.string().required("* Trường này bắt buộc"),
    }),

    onSubmit: (values) => {
      console.log(formik.values.name);
      dispatch(
        submitForm({
          cartProducts,
          name: formik.values.name,
          phone: formik.values.phone,
          street: formik.values.street,
          gender,
          provinces,
          district,
          wards,

          totalPrice,
        })
      );

      navigate("/checkout");
      console.log(cartProducts);
    },
  });

  return (
    <>
      <div className="form_wrap">
        <h4 className="form_title">Thông tin giao hàng:</h4>

        <form className="form_submit" onSubmit={formik.handleSubmit}>
          <div className="form_radio">
            <div className="male_radio">
              <input
                onChange={handleChecked}
                type="radio"
                name="gender"
                id="male"
                value="Anh"
                checked={gender.gender === "Anh"}
              />
              <label>Anh</label>
            </div>
            <div className="female_radio">
              <input
                onChange={handleChecked}
                type="radio"
                name="gender"
                id="female"
                value="Chị"
                checked={gender.gender === "Chị"}
              />
              <label>Chị</label>
            </div>
          </div>
          <div className="form_input-name-phone">
            <div className="input_name">
              <input
                name="name"
                id="name"
                type="text"
                className="input_style"
                placeholder="Họ và tên"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <p
                  style={{ color: "red", textAlign: "start", fontSize: "14px" }}
                >
                  {formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="input_phone">
              <input
                name="phone"
                id="phone"
                type="text"
                className="input_style"
                placeholder="Số diện thoại"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p
                  style={{ color: "red", textAlign: "start", fontSize: "14px" }}
                >
                  {formik.errors.phone}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <h4 className="address_text">Địa chỉ giao hàng :</h4>
          <div className="select_address">
            <Select
              placeholder="Chọn tỉnh, thành phố"
              Value={provinces}
              onChange={setProvinces}
              options={getProvinces()}
              className="select_style"
              isSearchable={false}
            />
            <Select
              placeholder="Chọn quận, huyện"
              Value={district}
              onChange={setDistrict}
              noOptionsMessage={() => "Bạn chưa chọn tỉnh, thành"}
              options={getDistricts(provinces?.value)}
              className="select_style"
              isSearchable={false}
            />
            <Select
              placeholder="Chọn xã, phường"
              Value={wards}
              onChange={setWards}
              noOptionsMessage={() => "Bạn chưa chọn quận, huyện"}
              options={getWards(district?.value)}
              className="select_style"
              isSearchable={false}
            />

            <input
              id="street"
              name="street"
              className="address_input"
              placeholder="Số nhà, tên đường"
              value={formik.values.street}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {formik.touched.street && formik.errors.street ? (
              <p style={{ color: "red", textAlign: "start", fontSize: "14px" }}>
                {formik.errors.street}
              </p>
            ) : (
              ""
            )}
          </div>

          <button type="submit" className="checkout_btn">
            <p>ĐẶT HÀNG</p>
          </button>

          <p className="note">
            Bạn có thể chọn hình thức thanh toán sau khi đặt hàng.
          </p>
        </form>
      </div>
    </>
  );
};

export default Form;
