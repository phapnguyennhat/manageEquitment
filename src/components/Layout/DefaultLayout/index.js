import classNames from "classnames/bind";
import Header from "./Header";
import Footer from "./Footer";
import "./DefaultLayout.module.scss";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
