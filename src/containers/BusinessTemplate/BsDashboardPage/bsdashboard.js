import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ModalAddService from './component/modaladdservice';

export default function Bsdashboard() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    function DeleteRoom(e)
  {
    e.preventDefault();
    Swal.fire({
      title: 'Bạn có chắc muốn xóa?',
      text: 'Dữ liệu sẽ không thể khôi phục sau khi xóa!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        // Xử lý xóa dữ liệu
        Swal.fire({
          title: 'Xóa thành công',
          icon: 'success',
          confirmButtonText: 'Hoàn tất',
          width: '25rem',
      });
      }
    })
  }

  return (
    <header className='header bg-white container container__header mt-4 '> 
        <section className=" pb-3 bg-cover bg-center d-flex align-items-center" style={{ backgroundImage: "url(./static/banner1.jpg)" }}>
          <div className="container py-5">
              <div className="row px-4 px-lg-5">
                  <div className="col-lg-6">
                      <h1 className="h4 text-uppercase mb-3 font-weight-bold">Xin chào Bình Minh</h1>
                      <h1 className="h4 mb-3">Bạn muốn đăng loại dịch vụ nào?</h1>
                      <a className="btn book-now-btn" onClick={() => setIsOpenModal(true)}>Thêm loại dịch vụ</a>
                  </div>
              </div>
          </div>
        </section>

        <div className='bs_type_service_ctn mt-4 mb-4'>
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
                        <Link className="nav-link" to={`/bsdashboard/listroom`}>
                             <button className="part2-btn">Chỉnh sửa</button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={DeleteRoom}>Xóa</button>
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
                        <Link className="nav-link" to={`/bsdashboard/listroom`}>
                             <button className="part2-btn">Chỉnh sửa</button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={DeleteRoom}>Xóa</button>
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
                        <Link className="nav-link" to={`/bsdashboard/listroom`}>
                             <button className="part2-btn">Chỉnh sửa </button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={DeleteRoom}>Xóa</button>
                    </div>
                </div>
            </div>

            <div className='product_container bs_product_ctn row bs_row_item_4'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2>Studio</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/bsdashboard/listroom`}>
                             <button className="part2-btn">Chỉnh sửa </button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={DeleteRoom}>Xóa</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {isOpenModal && <ModalAddService setIsOpen={setIsOpenModal} />}
      </header>
    
  )
}
