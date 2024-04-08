import classNames from "classnames/bind";
import styles from "./ModalSubmit.module.scss";
import { useState } from "react";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ModalSubmit({ setDisplayModal, cartsCheck }) {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formatedToDay = `${day}/${month}/${year}`;
  const handleCancel = () => {
    setDisplayModal(false);
  };
  const handleConfirm = () => {
    setDisplayModal(false);
  };
  return (
    <div className={cx("modal-container")}>
      <div className={cx("modal-content")}>
        <div className={cx("info")}>
          <span>Họ và tên: Nguyễn Nhật Pháp</span>
          <span>MSSV: 2212495</span>
        </div>
        <div className={cx("info")}>
          <span>Email: nguyennhatphapbp@gmail.com</span>
          <span>Ngày mượn {formatedToDay}</span>
        </div>
        <div className={cx("event")}>Sự kiện: Jobs Fair</div>
        <h3 className={cx("title")}>Danh sách đăng ký</h3>

        <table className={cx("table-register")}>
          <thead>
            <td className={cx("table-head-item")}>Tên vật dụng</td>
            <td className={cx("table-head-item")}>Số lượng</td>
            <td className={cx("table-head-item")}>Hạn trả</td>
          </thead>
          <tbody>
            {cartsCheck.map((item, index) => {
              // const today = new Date();
              const expDay = new Date(today);
              expDay.setDate(expDay.getDate() + item.time);

              // format expday
              const expday = String(expDay.getDate()).padStart(2, "0");
              const expmonth = String(expDay.getMonth() + 1).padStart(2, "0");
              const expyear = expDay.getFullYear();
              const formattedExpDay = `${expday}/${expmonth}/${expyear}`;

              return (
                <tr key={index}>
                  <td className={cx("table-body-item")}>{item.name}</td>
                  <td className={cx("table-body-item")}>{item.getSl}</td>
                  <td className={cx("table-body-item")}>{formattedExpDay}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={cx("btn-action")}>
          <button className={cx("btn-item")} onClick={handleCancel}>
            Hủy
          </button>
          <button className={cx("btn-item")} onClick={handleConfirm}>
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalSubmit;
