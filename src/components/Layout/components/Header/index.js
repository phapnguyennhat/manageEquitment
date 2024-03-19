function Header() {
  return (
    <div className="topHeader">
      <div className="container">
        <div className="row">
          <div id='logo' className="col-md-4">
            <img
              alt=""
              src="https://mybk.hcmut.edu.vn/my/images/logo.png"
            ></img>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <div id="topHeaderElements" className="row">
              <div className="col-md-1 topHeaderElement">Nhà</div>
              <div className="col-md-1 topHeaderElement">Kho</div>
              <div className="col-md-3 topHeaderElement">Đăng Ký Vật Dụng</div>
              <div className="col-md-3 topHeaderElement">Danh Sách Đăng Ký</div>
              <div className="col-md-2 topHeaderElement signIn">Đăng Nhập</div>
              <div className="col-md-2 topHeaderElement signUp">Đăng Ký</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
