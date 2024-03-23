import classNames from "classnames/bind";
import styles from "./CartsDetailItem.module.scss";

const cx = classNames.bind(styles);

function CartsDetailItem({ src, name, getSL }) {
  return (
    <div className={cx("cart-item")}>
      <img src={src} alt="not found" className={cx("cart-item-img")} />
      <span className={cx("cart-item-name")}>{name}</span>
      <div className={cx("wrap-quantity")}>
        <span className={cx("cart-item-multi")}>x</span>
        <span className={cx("cart-item-quantity")}>{getSL}</span>
      </div>
    </div>
  );
}

export default CartsDetailItem;
