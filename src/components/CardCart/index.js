import classNames from "classnames/bind";
import styles from "./CardCart.module.scss";

const cx = classNames.bind(styles);
function CardCart({ src, name, quantity }) {
  let msg = `Còn ${quantity}`;
  if (quantity === 0) {
    msg = "Hết";
  }
  return (
    <div className={cx("card")}>
      <div className={cx("card-img")}>
        <img src={src} alt="not found" />
      </div>
      <div className={cx("card-info")}>
        <div className={cx("card-info-name")}>{name}</div>
        <div className={cx("card-info-sl")}>{msg}</div>
        <button className={cx("card-info-btn")}>Remove</button>
      </div>
    </div>
  );
}

export default CardCart;
