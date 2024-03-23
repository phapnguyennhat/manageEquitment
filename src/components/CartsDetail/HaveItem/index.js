import classNames from "classnames/bind";
import styles from "./HaveItem.module.scss";
import CartsDetailItem from "./CartsDetailItem";

const cx = classNames.bind(styles);

function HaveItem({ carts }) {
  console.table(carts);
  return (
    <div className={cx("cart-detail")}>
      <div className={cx("cart-detail-title")}>Sản phẩm đã thêm</div>
      <ul className={cx("cart-detail-list")}>
        {carts.map((item, index) => (
          <li>
            <CartsDetailItem
              src={item.src}
              name={item.name}
              getSL={item.getSL}
              key={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HaveItem;
