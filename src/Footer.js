function Footer() {
    return (
        <>
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='row aboutFooter'>
                    <div className='col-md-7'>
                        <h3 className='name'>ĐOÀN - HỘI KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH</h3>
                        <div className='address toFlex'>
                            <i class="fa fa-map-marker itemFooter" aria-hidden="true"></i>
                            <p className='marginFooter'>609-H6, trường Đại học Bách Khoa cơ sở 2, Dĩ An, Bình Dương</p>
                        </div>
                        <div className='email toFlex'>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <p className='marginFooter'>dtn-khmt@hcmut.edu.vn</p>
                        </div>
                        <div className='hotline toFlex'>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <p className='marginFooter'>0942.938.128</p>
                        </div>
                        <div className='website toFlex'>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            <p className='marginFooter'>https://cse.hcmut.edu.vn/en</p>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <h5>CONTACT US!</h5>
                        <div className='row'>
                           <div className='col-md-4'>
                           <i class="fa fa-facebook-official" aria-hidden="true"></i>
                           </div>
                           <div className='col-md-4'>
                           <i class="fab fa-tiktok"></i>
                           </div>
                           <div className='col-md-4'>
                           <i class="fa fa-instagram" aria-hidden="true"></i>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid endFooter'>
            <div className='container'>
                <p>Phát triển bởi tổ Tech CSE</p>
            </div>
        </div>
        </>


    )
}

export default Footer