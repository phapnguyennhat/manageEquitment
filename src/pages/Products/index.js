import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import styles from "./Products.module.scss";
import AddSuccess from "~/components/AddSuccess";
import { useState } from "react";

const cx = classNames.bind(styles);
function Products() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const [value, setValue] = useState(1);
  const item = location.state.info;

  const hideDiv = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false); // Đặt lại isVisible thành true sau 3 giây
    }, 2000);
  };
  // event add products
  const handleAdd = () => {
    hideDiv();
  };

  //quantity input
  const handleOnChange = (e) => {
    if (
      !isNaN(e.target.value) &&
      e.target.value <= item.quantity &&
      e.target.value != "0"
    ) {
      setValue(e.target.value);
    }
  };
  const handleIncrease = () => {
    if (value < item.quantity) {
      setValue((prev) => +prev + 1);
    }
  };
  const handleDecrease = () => {
    if (value > 1) {
      setValue((prev) => +prev - 1);
    }
  };

  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>Vật dụng</h1>
      <h3 className={cx("title-page")}>
        <span>Kho</span>
        <span className={cx("icon-next")}>
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>Vật dụng</span>
      </h3>

      <div className={cx("products")}>
        <img
          src={item.src}
          alt="not found"
          className={cx("img-products")}
        ></img>
        <div className={cx("wrapper-info")}>
          <div className={cx("brand")}>Đoàn hội Khoa KH & KT Máy Tính</div>
          <div className={cx("name-products")}>{item.name}</div>
          <div className={cx("quantity")}>
            {" "}
            {`Còn ${item.quantity}/${item.quantityInStock} ở trong kho!`}{" "}
          </div>
          <div className={cx("time")}>
            {" "}
            {`Trả vật dụng trong ${item.time} ngày`}
          </div>
          <p className={cx("description")}>{item.description}</p>
          <div className={cx("label-quantity")}>Số lượng: </div>
          <div className={cx("wrapper-quantity")}>
            <div className={cx("input-quantity")}>
              <span>
                <i class="fa-solid fa-minus" onClick={handleDecrease}></i>
              </span>
              <input
                type="text"
                className={cx("input-number")}
                value={value}
                onChange={handleOnChange}
              />
              <span>
                <i class="fa-solid fa-plus" onClick={handleIncrease}></i>
              </span>
            </div>
            <button className={cx("btn-add")} onClick={handleAdd}>
              Thêm vào DS đăng ký
            </button>
          </div>
        </div>
      </div>
      <div className={cx("term")}>
        Các vật dụng được quản lý với Đoàn hội Khoa KH & KT Máy tính mọi tổ chức
        hay cá nhân nào <span>làm mất</span> hay <span>trả không đúng hạn</span>{" "}
        sẽ chịu trách nhiệm theo quy định!!
      </div>
      {isVisible && <AddSuccess />}
    </div>
  );
}

export default Products;
