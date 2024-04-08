import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";

import styles from "./Products.module.scss";
import AddSuccess from "~/components/AddSuccess";
import { useEffect, useState, useContext } from "react";
import { DatabaseContext } from "~/App";
import { database, getData, writeUserData } from "~/services/firebase";

const cx = classNames.bind(styles);
function Products() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const [value, setValue] = useState(1);
  const item = location.state.info;

  // CALL CARTS
  const data = useContext(DatabaseContext);
  const carts = data.database.length === 0 ? [] : data.database["Carts"] ?? [];
  const setDatabase = data.setDatabase;
  // const [carts, setCarts] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false);
  // useEffect(() => {
  //   getData().then((response) => {
  //     // setPosts(response["Stockdb"] ?? []);
  //     // setDisplayStock(response["Stockdb"] ?? []);
  //     // CHỖ NÀY FILTER RA CARTS CHO TK
  //     setCarts(response["Carts"] ?? []);
  //   });
  // }, []);

  const hideDiv = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false); // Đặt lại isVisible thành true sau 3 giây
    }, 2000);
  };

  const hideAlert = () => {
    setDisplayAlert(true);
    setTimeout(() => {
      setDisplayAlert(false);
    }, 2000);
  };
  // EVENT ADD PRODUCTS
  const [msgAlert, setMsgAlert] = useState("");

  const handleAdd = () => {
    // hideDiv();
    // KHI ITEM ĐÓ CH THÊM VÀO CART --> THÊM SỐ LUỌNG VÀO THÊM ITEM VÀO
    // KHI ITEM ĐÓ ĐÃ THÊM VÀO CART --> CỘNG THÊM SỐ LƯỢNG THEO LƯỢNG ĐÃ CHỌN NHƯNG NẾU LỚN HƠN SỐ LƯỢNG SẲN CÓ THÌ THÔNG BÁO ĐẾN
    let findProd = carts.find((prod) => prod.name === item.name);
    if (findProd) {
      let getSl = +value + findProd.getSl;
      if (getSl > item.quantity) {
        // hien alert
        hideAlert();
        let msg;
        if (findProd.getSl === findProd.quantity) {
          msg = "Bạn đã lấy hết số lượng sẵn có trong kho";
        } else {
          msg = `Bạn đã lấy ${
            findProd.getSl
          } vật dụng này vui lòng nhập một số nhỏ hơn ${
            findProd.quantity - findProd.getSl
          }.`;
        }
        setMsgAlert(msg);
      } else {
        hideDiv();

        findProd.getSl = getSl;
        writeUserData(carts, "Carts");
        let newDatabase = { ...data.database, Carts: carts };
        setDatabase(newDatabase);
      }
    } else {
      hideDiv();

      let newData = [
        ...carts,
        {
          name: item.name,
          src: item.src,
          time: item.time,
          quantity: item.quantity,
          getSl: +value,
          check: false,
        },
      ];
      writeUserData(newData, "Carts");
      let newDatabase = { ...data.database, Carts: newData };
      setDatabase(newDatabase);
    }
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
      {displayAlert && (
        <div className={cx("alert-error")}>
          <Alert className={cx("alert-error-item")} severity="error">
            {msgAlert}
          </Alert>
        </div>
      )}
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
            {`Còn ${item.quantity}/${item.quantityInStock} ở trong kho!`}{" "}
          </div>
          <div className={cx("time")}>
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
