import classNames from "classnames/bind";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./Register.module.scss";
import CardCart from "~/components/CardCart";
import { useEffect, useMemo, useState, useContext } from "react";
import { DatabaseContext } from "~/App";
import { getData, writeUserData } from "~/services/firebase";
import ModalSubmit from "~/components/ModalSubmit";

const cx = classNames.bind(styles);
function Register() {
  const data = useContext(DatabaseContext);
  const carts = data.database.length === 0 ? [] : data.database["Carts"] ?? [];
  const setDatabase = data.setDatabase;
  const [displayModal, setDisplayModal] = useState(false);

  // const [carts, setCarts] = useState([]);
  // useEffect(() => {
  //   getData().then((response) => {
  //     if (response) {
  //       setCarts(response["Carts"] ?? []);
  //     }
  //   });
  // }, []);

  const isSelectAll = carts.every((item) => item.check === true);

  const handleSelectAll = () => {
    let newCarts = carts;
    newCarts.forEach((item) => {
      item.check = true;
    });
    let newDatabase = { ...data.database, Carts: newCarts };
    // setCarts(newCarts);
    setDatabase(newDatabase);
  };
  const handleUnSelectAll = () => {
    let newCarts = carts;
    newCarts.forEach((item) => {
      item.check = false;
    });
    let newDatabase = { ...data.database, Carts: newCarts };
    // setCarts(newCarts);
    setDatabase(newDatabase);
  };

  //XOA TAT CA
  const [displayAlert, setDisplayAlert] = useState(false);
  const handleClose = () => {
    setDisplayAlert(false);
  };
  const onClickDeleteAll = () => {
    setDisplayAlert(true);
  };
  const handleDeleteAll = () => {
    const { Carts, ...newDatabase } = data.database;
    writeUserData(newDatabase, "/");
    // setCarts([]);
    setDatabase(newDatabase);
    setDisplayAlert(false);
  };

  // hiện thông báo phải click vào nút điều khoản

  const [displayTerm, setDisplayTerm] = useState(false);

  function handleSubmit() {
    const confirm_checkbox = document.getElementById("confirm-checkbox");
    if (confirm_checkbox.checked === false) {
      console.log("ban can chon vao day");
      setDisplayTerm(true);
    } else {
      setDisplayTerm(false);
      setDisplayModal(true);
    }
  }

  const total = useMemo(() => {
    const cartsCheck = carts.filter((item) => item.check);
    return cartsCheck.reduce(
      (result, item) => parseInt(result) + parseInt(item.getSl),
      0
    );
  }, [data.database]);

  return (
    <div className={cx("container")}>
      <h3 className={cx("container__title")}>Đăng ký vật dụng</h3>
      <div className={cx("container__direction")}>
        <span>Trang chủ </span>
        <img
          className={cx("container__direction-img")}
          src="/assets/imgs/chevron-right-solid.svg"
          alt="not found"
        />
        <span>Đăng ký vật dụng</span>
      </div>
      <div className={cx("container-form")}>
        <div className={cx("container-form-title")}>Thông Tin Người Mượn</div>
        <div className={cx("container-form-input")}>
          <div>Họ và tên</div>
          <div className={cx("wrap-input-name")}>
            <input
              className={cx("form-input-info")}
              type="text"
              placeholder="First Name"
              style={{ flex: 1 }}
            />
            <input
              className={cx("form-input-info")}
              type="text"
              placeholder="Last Name"
              style={{ flex: 1 }}
            />
          </div>
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Mã Số Sinh Viên"
          />
          <div>Liên hệ</div>
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Email address"
          />
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Số điện thoại"
          />
          <div>Địa chỉ giao</div>
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Tỉnh/Thành phố"
          />
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Địa chỉ"
          />
        </div>
      </div>
      {/* list */}
      <div className={cx("cart")}>
        <h3 className={cx("cart-title")}>Danh Sách Đăng Ký</h3>
        <table className={cx("container-table")}>
          <thead>
            {!isSelectAll ? (
              <th className={cx("table-head-item")} onClick={handleSelectAll}>
                Chọn tất cả
              </th>
            ) : (
              <th className={cx("table-head-item")} onClick={handleUnSelectAll}>
                Bỏ chọn tất cả
              </th>
            )}
            <th className={cx("table-head-item")}>Vật Dụng</th>
            <th className={cx("table-head-item")}>Số lượng</th>
            <th className={cx("table-head-item")}>Thời gian mượn</th>
            <th className={cx("table-head-item")} onClick={onClickDeleteAll}>
              Xóa tất cả
            </th>
          </thead>
          <tbody className={cx("container-list-item")}>
            {carts.map((item, index) => (
              <CardCart
                key={index}
                src={item.src}
                quantity={item.quantity}
                name={item.name}
                time={item.time}
                getSl={item.getSl}
                state={item.state}
                check={item.check}
              />
            ))}
          </tbody>
        </table>

        <div className={cx("wrapper-confirm")}>
          <div className={cx("confirm")}>
            <div className={cx("wrap-term")}>
              <input
                type="checkbox"
                className={cx("confirm-checkbox", "custom-checkbox")}
                id="confirm-checkbox"
              />
              <span className={cx("confirm-msg")}>
                Tôi Đồng Ý Với Điều Khoản Cam Đoan Sẽ Trả Đủ
              </span>
            </div>
            {displayTerm && (
              <div className={cx("click-here")}>Bạn cần chọn vào đây!</div>
            )}
            <div className={cx("wrap-total")}>
              <label>Tổng: </label>
              <span>{total}</span>
            </div>
            <button className={cx("confirm-submit")} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* ALERT DELETE ALL */}
      <Dialog
        open={displayAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={cx("med-font-size")}>
          {"Xóa tất cả vật dụng khỏi DS đăng ký"}
        </DialogTitle>
        {/* <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
      </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose} className={cx("med-font-size")}>
            Không
          </Button>
          <Button
            onClick={handleDeleteAll}
            className={cx("med-font-size")}
            autoFocus
          >
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
      {/* MODAL-SUBMUT */}
      {displayModal && (
        <ModalSubmit
          setDisplayModal={setDisplayModal}
          cartsCheck={carts.filter((item) => item.check)}
        />
      )}
    </div>
  );
}

export default Register;
