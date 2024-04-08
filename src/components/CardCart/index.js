import classNames from "classnames/bind";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./CardCart.module.scss";
import { memo, useState, useContext } from "react";
import { DatabaseContext } from "~/App";

import { writeUserData } from "~/services/firebase";

const cx = classNames.bind(styles);
function CardCart(props) {
  const data = useContext(DatabaseContext);
  const carts = data.database.length === 0 ? [] : data.database["Carts"] ?? [];
  const setDatabase = data.setDatabase;

  // const [check, setCheck] = useState(props.check);
  //HANDLE CHECKBOX
  const handleCheckBox = (e) => {
    let newCarts = carts;
    let finditem = newCarts.find((item) => item.name === props.name);
    if (finditem) {
      finditem.check = e.target.checked;
    }
    let newDatabase = { ...data.database, newCarts };
    setDatabase(newDatabase);
  };

  // hien alert confirm khi onclick delete vat dung
  const [displayAlert, setDisplayAlert] = useState(false);
  const handleClose = () => {
    setDisplayAlert(false);
  };

  const handleDelete = () => {
    setDisplayAlert(false);
    // XOA VAT TU TRONG LIST CARTS
    let newCarts = carts.filter((item) => item.name !== props.name);
    writeUserData(newCarts, "Carts");
    let newDatabase = { ...data.database, Carts: newCarts };
    setDatabase(newDatabase);
  };

  const onClickDelete = () => {
    setDisplayAlert(true);
  };
  //input number
  const [value, setValue] = useState(props.getSl);
  const handleOnChange = (e) => {
    if (
      !isNaN(e.target.value) &&
      e.target.value <= props.quantity &&
      e.target.value != "0"
    ) {
      setValue(e.target.value);
      let newCarts = carts;
      let finditem = carts.find((item) => item.name === props.name);
      if (finditem) {
        finditem.getSl = e.target.value;
      }
      let newDatabase = { ...data.database, Carts: newCarts };
      setDatabase(newDatabase);
      writeUserData(newCarts, "Carts");
    }
  };
  const handleIncrease = () => {
    if (value < props.quantity) {
      setValue((prev) => +prev + 1);
      let newCarts = carts;
      let finditem = carts.find((item) => item.name === props.name);
      if (finditem) {
        finditem.getSl = value + 1;
      }
      let newDatabase = { ...data.database, Carts: newCarts };
      setDatabase(newDatabase);
      writeUserData(newCarts, "Carts");
    }
  };
  const handleDecrease = () => {
    if (value > 1) {
      setValue((prev) => +prev - 1);
      let newCarts = carts;
      let finditem = carts.find((item) => item.name === props.name);
      if (finditem) {
        finditem.getSl = value - 1;
      }
      let newDatabase = { ...data.database, Carts: newCarts };
      setDatabase(newDatabase);
      writeUserData(newCarts, "Carts");
    }
  };

  let msg = `Số lượng:  ${props.quantity} cái`;
  if (props.quantity === 0) {
    msg = "Hết";
  }
  // console.log(carts);
  return (
    <tr className={cx("row-product")}>
      <td>
        <input
          type="checkbox"
          checked={props.check}
          onClick={(e) => handleCheckBox(e)}
        />
      </td>
      <td>
        <div className={cx("wrapper-product")}>
          <img src={props.src} alt="not found" className={cx("img-product")} />
          <div className={cx("info-product")}>
            <label>{props.name}</label>
            <p>{msg}</p>
          </div>
        </div>
      </td>
      <td className={cx("vertical-top")}>
        <div className={cx("number")}>
          <span>
            <i class="fa-solid fa-minus" onClick={handleDecrease}></i>
          </span>
          <input
            type="text"
            className={cx("input-number")}
            value={value}
            onChange={handleOnChange}
          />
          <span>
            <i class="fa-solid fa-plus" onClick={handleIncrease}></i>
          </span>
        </div>
      </td>
      <td className={cx("vertical-top")}> {props.time} ngày</td>
      <td>
        <div className={cx("icon-delete")} onClick={onClickDelete}>
          <i class="fa-solid fa-xmark"></i>
        </div>
      </td>
      <Dialog
        open={displayAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={cx("med-font-size")}>
          {`Bỏ ${props.name} khỏi DS Đăng ký ?`}
        </DialogTitle>
        {/* <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
      </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose} className={cx("med-font-size")}>
            Không
          </Button>
          <Button
            onClick={handleDelete}
            className={cx("med-font-size")}
            autoFocus
          >
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </tr>
  );
}

export default CardCart;
