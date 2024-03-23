import classNames from "classnames/bind";
import styles from "./NoHaveItem.module.scss";

const cx = classNames.bind(styles);
function NoHaveItem() {
  return (
    <div className={cx("no-have-item")}>
      <img src="/assets/imgs/no_cart.png" alt="not found" />
      <div className={cx("no-have-item__msg")}>Chưa có sản phẩm</div>
    </div>
  );
}

export default NoHaveItem;
