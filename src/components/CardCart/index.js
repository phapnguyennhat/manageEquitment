import classNames from "classnames/bind";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./CardCart.module.scss";
import { memo, useState } from "react";

const cx = classNames.bind(styles);
function CardCart(props) {
  const [display, setDisplay] = useState(true);
  // hien alert confirm khi onclick delete vat dung
  const [displayAlert, setDisplayAlert] = useState(false);
  const handleClose = () => {
    setDisplayAlert(false);
  };
  const onClickDelete = () => {
    setDisplayAlert(true);
  };
  //input number
  const [value, setValue] = useState(1);
  const handleOnChange = (e) => {
    if (
      !isNaN(e.target.value) &&
      e.target.value <= props.quantity &&
      e.target.value != "0"
    ) {
      setValue(e.target.value);
    }
  };
  const handleIncrease = () => {
    if (value < props.quantity) {
      setValue((prev) => +prev + 1);
    }
  };
  const handleDecrease = () => {
    if (value > 1) {
      setValue((prev) => +prev - 1);
    }
  };

  let msg = `Số lượng:  ${props.quantity} cái`;
  if (props.quantity === 0) {
    msg = "Hết";
  }
  let storageCarts;
  const [numInput, setNumInput] = useState(props.getSL);
  const [check, setCheck] = useState(props.check);
  // const [carts, setCarts] = useState(() => {
  //   storageCarts = JSON.parse(localStorage.getItem("carts"));
  //   return storageCarts ?? [];
  // });

  const handleRemove = () => {
    storageCarts = JSON.parse(localStorage.getItem("carts")) ?? [];
    storageCarts = storageCarts.filter((item) => item.name !== props.name);
    localStorage.setItem("carts", JSON.stringify(storageCarts));
    // setDisplay(false);
    // setCarts(storageCarts);
    props.setCarts(storageCarts);
  };

  const handleChange = (e) => {
    // setNumInput(e.target.value);
    // props.onChange(e.target.value); //luu value vao array // tuong lai se luu object vao day luon
    storageCarts = JSON.parse(localStorage.getItem("carts")) ?? [];
    let itemFind = storageCarts.find((item) => item.name === props.name);
    let value = e.target.value;
    itemFind.getSL = value;
    setNumInput(value);
    localStorage.setItem("carts", JSON.stringify(storageCarts));
    // setCarts(storageCarts);
    props.setCarts(storageCarts);
  };
  const handleCheckbox = (e) => {
    storageCarts = JSON.parse(localStorage.getItem("carts")) ?? [];
    let itemFind = storageCarts.find((item) => item.name === props.name);
    let value = e.target.checked;
    itemFind.check = value;
    setCheck(e.target.checked);
    localStorage.setItem("carts", JSON.stringify(storageCarts));
    // setCarts(storageCarts);
    props.setCarts(storageCarts);
  };

  // console.log(carts);
  return (
    <tr className={cx("row-product")}>
      <td>
        <input type="checkbox" />
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
      <td className={cx("vertical-top")}> 7 ngay</td>
      <td>
        <i class="fa-solid fa-xmark" onClick={onClickDelete}></i>
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
            onClick={handleClose}
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

export default memo(CardCart);
