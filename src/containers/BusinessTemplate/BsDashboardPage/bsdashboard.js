import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ModalAddService from './components/modaladdservice';
import { mainApi } from '../../../API/api';

export default function Bsdashboard() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [exYard, setExYard]  = useState(false);
    const [exMeet, setMeet] = useState(false);
    const [exStudio, setStudio] = useState(false);
    const [exDance, setDance] = useState(false);

    const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
    const headers = {
        Authorization: tokenAuth,
    };

    const handleDeleteRoom = (id) => {
        DeleteRoom(id);
      };

    function DeleteRoom(serviceTypeId){
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
        mainApi.delete(`/service/delete-by-servicetype/${serviceTypeId}`, { headers: headers })
          .then((result)=>{
              console.log(result.data);

              Swal.fire({
                title: 'Xóa thành công',
                icon: 'success',
                confirmButtonText: 'Hoàn tất',
                width: '25rem',
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.close();
                  window.location.reload();
                }
              });
          })
          .catch((err)=>{
              console.log(err);
          }) 
      }
    })}

    mainApi.get(`/service/business/${localStorage.getItem('businessId')}`, { headers: headers })
    .then((result)=>{
        for(var i = 0; i < result.data.services.length; i++)
        {
            if(result.data.services[i].serviceType === 1) setMeet(true);
            else if(result.data.services[i].serviceType === 2) setExYard(true);
            else if(result.data.services[i].serviceType === 3) setStudio(true);
            else if(result.data.services[i].serviceType === 4) setDance(true);
        }
    })
    .catch((err)=>{
        console.log(err);
    })

  return (
    <header className='header bg-white container container__header mt-4 '> 
        <section className=" pb-3 bg-cover bg-center d-flex align-items-center bscontainer">
          <div className="container" style={{padding: "30px 25px"}}>
              <div className="row px-4 px-lg-5 bsbanner">
                  <div className="col-lg-6 bsbanner-1">
                      <h1 className="h4 text-uppercase mb-3 font-weight-bold">Xin chào {localStorage.getItem('businessName')} </h1>
                      <h1 className="h4 mb-4">Bạn muốn đăng loại dịch vụ nào?</h1>
                      <a className="btn book-now-btn" onClick={() => setIsOpenModal(true)}>Thêm dịch vụ</a>
                  </div>
                  <div className='bsbanner-2'>
                        <div className='logo-app'></div>
                    </div>
              </div>
          </div>
        </section>

        <div className='bs_type_service_ctn mt-4 mb-4'>
          <span className='font-weight-bold'>Các loại dịch vụ bạn đã đăng</span> 
          <div className="row mt-2">
            {exYard ? (<div className='product_container bs_product_ctn row bs_row_item_1'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2 style={{color: "black"}}>Sân bóng đá Mini</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/bsdashboard/yard`}>
                             <button className="part2-btn">Chi tiết</button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={() => handleDeleteRoom(2)}>Xóa</button>
                    </div>
                </div>
            </div>) : ''}
            
            {exMeet ? (<div className='product_container bs_product_ctn row bs_row_item_2'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2 style={{color: "black"}}>Phòng họp</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/bsdashboard/meet`}>
                             <button className="part2-btn">Chi tiết</button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={() => handleDeleteRoom(1)}>Xóa</button>
                    </div>
                </div>
            </div>) : ''}
            

            {exDance ? (<div className='product_container bs_product_ctn row bs_row_item_3'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2 style={{color: "black"}}>Phòng nhảy</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/bsdashboard/dance`}>
                             <button className="part2-btn">Chi tiết </button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={() => handleDeleteRoom(4)}>Xóa</button>
                    </div>
                </div>
            </div>) : ''}
            
            {exStudio ? (<div className='product_container bs_product_ctn row bs_row_item_4'>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2 style={{color: "black"}}>Studio</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/bsdashboard/studio`}>
                             <button className="part2-btn">Chi tiết </button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={() => handleDeleteRoom(3)}>Xóa</button>
                    </div>
                </div>
            </div>) : ''}
        </div>
        </div>
        {isOpenModal && <ModalAddService setIsOpen={setIsOpenModal} />}
      </header>
    
  )
}
