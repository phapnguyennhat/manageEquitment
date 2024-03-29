import classNames from "classnames/bind";
import styles from "./StockLayout.module.scss";
import Footer from "../components/Footer";
import Header from "./Header";

const cx = classNames.bind(styles);

function StockLayout({ children, carts }) {
  return (
    <div className={cx("wrapper")}>
      <Header nameUser="Nguyễn Nhật Pháp" carts={carts} />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default StockLayout;
