import styles from "./Listregister.module.scss";
import classNames from "classnames/bind";
import Listdata from "~/components/Layout/Listregister/index.js";

const cx = classNames.bind(styles);

function Listregister() {
  return (
    <div className={cx("listRegister")}>
      <div className={cx("contentWrapper")}>
        <h1>Danh sách đăng ký</h1>
        <p>
          Trang chủ
          <i class="fa fa-angle-right" aria-hidden="true"></i>
          Danh sách đăng ký
        </p>
        <div className={cx("aboveList")}>
          <p>Danh sách đăng ký của bạn</p>
        </div>
        <div className={cx("toFlex")}>
          <div className={cx("listWrapper")}>
            <div className={cx("list")}>
              <div className={cx("row")}>
                <div className={cx("col-md-1", "listHeader")}>STT</div>
                <div className={cx("col-md-3", "listHeader")}>Mã mượn</div>
                <div className={cx("col-md-3", "listHeader")}>
                  Thời gian mượn
                </div>
                <div className={cx("col-md-3", "listHeader")}>Hết hạn</div>
                <div className={cx("col-md-2", "listHeader")}>Trạng thái</div>
              </div>
              <Listdata />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listregister;
