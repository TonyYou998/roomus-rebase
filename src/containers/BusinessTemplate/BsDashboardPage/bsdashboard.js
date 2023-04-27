import React from 'react'
import { Link } from 'react-router-dom';

export default function bsdashboard() {
  return (
    <header className='header bg-white container container__header mt-4 '> 
        <section className=" pb-3 bg-cover bg-center d-flex align-items-center" style={{ backgroundImage: "url(./static/banner1.jpg)" }}>
          <div className="container py-5">
              <div className="row px-4 px-lg-5">
                  <div className="col-lg-6">
                      <h1 className="h4 text-uppercase mb-3 font-weight-bold">Xin chào Bình Minh</h1>
                      <h1 className="h4 mb-3">Bạn muốn đăng loại dịch vụ nào?</h1>
                      <a className="btn book-now-btn" href="./shop">Thêm loại dịch vụ</a>
                  </div>
              </div>
          </div>
        </section>

        <div className='bs_type_service_ctn mt-4'>
          <span className='font-weight-bold'>Các loại dịch vụ bạn đã đăng</span> 
          <div className="row mt-2">
            <div className='product_container bs_product_ctn row bs_row_item_1'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2>Sân bóng đá Mini</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/detail/:id`}>
                             <button className="part2-btn">Chỉnh sửa</button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete">Xóa</button>
                    </div>
                </div>
            </div>

            <div className='product_container bs_product_ctn row bs_row_item_2'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2>Phòng họp</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/detail/:id`}>
                             <button className="part2-btn">Chỉnh sửa</button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete">Xóa</button>
                    </div>
                </div>
            </div>

            <div className='product_container bs_product_ctn row bs_row_item_3'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2>Phòng nhảy</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/detail/:id`}>
                             <button className="part2-btn">Chỉnh sửa </button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </header>
    
  )
}
