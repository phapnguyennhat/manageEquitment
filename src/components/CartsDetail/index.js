import classNames from "classnames/bind";
import styles from "./CartsDetail.module.scss";
import NoHaveItem from "./NoHaveItem";
import HaveItem from "./HaveItem";

const cx = classNames.bind(styles);

function CartsDetail({ carts }) {
  let isEmpty = carts.length === 0;
  return (
    <div className={cx("carts-detail")}>
      {isEmpty ? <NoHaveItem /> : <HaveItem carts={carts} />}
    </div>
  );
}

export default CartsDetail;
