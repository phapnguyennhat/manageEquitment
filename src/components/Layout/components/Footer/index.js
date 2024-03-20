function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row aboutFooter">
            <div className="col-md-7">
              <h3 className="name">
                ĐOÀN - HỘI KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH
              </h3>
              <div className="address toFlex">
                <i class="fa fa-map-marker itemFooter" aria-hidden="true"></i>
                <p className="marginFooter">
                  Địa chỉ: 609-H6, trường Đại học Bách Khoa cơ sở 2, Dĩ An, Bình Dương
                </p>
              </div>
              <div className="email toFlex">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p className="marginFooter">Email: dtn-khmt@hcmut.edu.vn</p>
              </div>
              <div className="hotline toFlex">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p className="marginFooter">Hotline: 0942.938.128</p>
              </div>
              <div className="website toFlex">
                <i class="fa fa-globe" aria-hidden="true"></i>
                <p className="marginFooter">Website: https://cse.hcmut.edu.vn/en</p>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <h5 id='contactUs'>CONTACT US!</h5>
              <div className="imgFooters">
                <div className="imgFooter1 imgFooter">
                  <img
                    alt=""
                    src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png"
                  ></img>
                </div>
                <div className="imgFooter2 imgFooter">
                  <img
                    alt=""
                    src="https://img.icons8.com/?size=48&id=118640&format=png"
                  ></img>
                </div>
                <div className="imgFooter3 imgFooter">
                  <img
                    alt=""
                    src="https://img.icons8.com/?size=48&id=32323&format=png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid endFooter">
        <div className="container">
          <p>Phát triển bởi tổ Tech CSE</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
