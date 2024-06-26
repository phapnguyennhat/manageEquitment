import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";
import { useState, memo } from "react";
import AddSuccess from "../AddSuccess";

const cx = classNames.bind(styles);

function Card(props) {
  const navigate = useNavigate();

  let msg = `Còn ${props.item.quantity}`;
  if (props.item.quantity === 0) {
    msg = "Hết";
  }

  // const [carts, setCarts] = useState(() => {
  //   const storageCarts = JSON.parse(localStorage.getItem("carts"));
  //   return storageCarts ?? [];
  // });

  // const handleAdd = () => {
  //   // const storageCarts = JSON.parse(localStorage.getItem("carts")) ?? [];
  //   // setCarts(storageCarts);

  //   // // console.log(carts);
  //   // // console.log(props);
  //   // // console.log(carts.includes(props));
  //   // console.log(carts);

  //   // setCarts((prev) => {
  //   //   const newCarts = [...prev, { ...props, getSL: 0, check: false }];
  //   //   const jsonCarts = JSON.stringify(newCarts);
  //   //   localStorage.setItem("carts", jsonCarts);
  //   //   return newCarts;
  //   // });
  //   const storageCarts = localStorage.getItem("carts");
  //   var carts = storageCarts ? JSON.parse(storageCarts) : [];
  //   var item = carts.find((item) => item.name === props.name);
  //   var sl;
  //   if (item) {
  //     carts = carts.filter((item) => item.name !== props.name);
  //     sl = item.getSL + 1;
  //     carts = [...carts, { ...props, getSL: sl, check: false }];
  //   } else {
  //     carts = [...carts, { ...props, getSL: 1, check: false }];
  //   }
  //   props.setCarts(carts);
  //   localStorage.setItem("carts", JSON.stringify(carts));
  // };

  return (
    <div
      className={cx("card")}
      onClick={() => {
        navigate("/products", { state: { info: props.item } });
      }}
    >
      {/* {isVisible && <AddSuccess />} */}
      <div className={cx("card-info")}>
        <img
          src={props.item.src}
          alt="not found"
          className={cx("card-info-img")}
          loading="lazy"
        />
        <h3 className={cx("card-info-name")}>{props.item.name}</h3>
        <div className={cx("card-info-msg")}>{msg}</div>
        <div style={{ color: "green" }}>{`Tình trạng ${props.item.state}`}</div>
        {/* <button className={cx("card-info-btn")} onClick={handleAdd}>
          Thêm vào DS Đăng ký
        </button> */}
      </div>
    </div>
  );
}

export default memo(Card);
