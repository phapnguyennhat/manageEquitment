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
              <Link to='/' className="col-md-1 topHeaderElement">
                <div>Nhà</div>
              </Link>

              <Link className="col-md-1 topHeaderElement" to='/signin'>
                <div>Kho</div>
              </Link>
              <Link className="col-md-3 topHeaderElement" to='/signin'>
                <div>Đăng Ký Vật Dụng</div>
              </Link>

              <Link to='/signin' className="col-md-3 topHeaderElement">
                <div>Danh sách đăng ký</div>
              </Link>
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
