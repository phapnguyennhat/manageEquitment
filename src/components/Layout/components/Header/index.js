import { Link } from "react-router-dom";

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
              <div className="col-md-1 topHeaderElement">
                <Link to='/'>Nhà</Link>
              </div>
              <div className="col-md-1 topHeaderElement">
                <Link to='/stock'>Kho</Link>
              </div>
              <div className="col-md-3 topHeaderElement">Đăng Ký Vật Dụng</div>
              <div className="col-md-3 topHeaderElement">Danh Sách Đăng Ký</div>
              <Link to='/signin' className="col-md-2 topHeaderElement signIn">
                <div className='innersignIn'>Đăng nhập</div>
              </Link>
                <Link to='/signup' className="col-md-2 topHeaderElement signUp">
                  <div className='innersignUp'>Đăng ký</div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
