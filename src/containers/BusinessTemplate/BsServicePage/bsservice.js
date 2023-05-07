import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ModalAddDetail from './components/modaladddetail';
import { mainApi } from '../../../API/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function BsService() {
    const { category } = useParams();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [type, setType] = useState(0);
    const [finalResult, setFinalResult] = useState([]);
    const history = useHistory();

    const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
    const headers = {
        Authorization: tokenAuth,
    };

    const handleDeleteRoom = (id) => {
      DeleteRoom(id);
    };

    function DeleteRoom(idService){
      console.log(idService);
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
          mainApi.delete(`/service/delete/${idService}`, { headers: headers })
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

    function handleCategoryChange(category) {
        if (category === 'meet') {
          setType(1);
        } else if (category === 'yard') {
          setType(2);
        } else if (category === 'studio') {
          setType(3);
        } else if (category === 'dance') {
          setType(4);
        }
      }

    useEffect(() => {
        handleCategoryChange(category);
        mainApi.get(`/service/business/${localStorage.getItem('businessId')}`, { headers: headers })
        .then((result)=>{
            console.log(result);
            setFinalResult(result.data.services.filter(item => item.serviceType === type));
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [type]);


  return (
    <header className='header bg-white container container__header mt-4 '> 
        <section className=" pb-3 bg-cover bg-center d-flex align-items-center bscontainer">
          <div className="container" style={{padding: "30px 25px"}}>
              <div className="row px-4 px-lg-5 bsbanner">
                  <div className="col-lg-6 bsbanner-1">
                      <h1 className="h4 text-uppercase mb-3 font-weight-bold">List Service</h1>
                      <h1 className="h4 mb-4">Thêm dịch vụ nào?</h1>
                      <a className="btn book-now-btn" onClick={() => setIsOpenModal(true)}>Thêm dịch vụ</a>
                  </div>
                  <div className='bsbanner-2'>
                        <div className='logo-app'></div>
                    </div>
              </div>
          </div>
        </section>

        <div className='bs_type_service_ctn mt-4 mb-4'>
            {category === "yard" ? <span className='font-weight-bold'>Các sân bóng bạn đã đăng</span>  : ''}
            {category === "meet" ? <span className='font-weight-bold'>Các phòng họp bạn đã đăng</span>  : ''}
            {category === "studio" ? <span className='font-weight-bold'>Các studio bạn đã đăng</span>  : ''}
            {category === "dance" ? <span className='font-weight-bold'>Các phòng tập nhảy bạn đã đăng</span>  : ''}
          <div className="row mt-2">
          {
            finalResult.map((item, idx) => (
                <div className={`product_container bs_product_ctn row 
                ${category === "yard" ? "bs_row_item_1" : ''}
                ${category === "meet" ? "bs_row_item_2" : ''}
                ${category === "dance" ? "bs_row_item_3" : ''}
                ${category === "studio" ? "bs_row_item_4" : ''}
                `}
                 key={idx}>
                <div className='product_container-part1'>
                    <div className='product_discription'>
                        <h2 style={{color: "black"}}>{item.serviceName}</h2>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/bsdashboard/${category}/listroom/${item.id}`}>
                             <button className="part2-btn">Chỉnh sửa</button>
                        </Link>
                        <button className="bs-part2-btn part2-btn-delete" onClick={() => handleDeleteRoom(item.id)}>Xóa</button>
                    </div>
                </div>
            </div>
            ))
          } 
        </div>
        </div>
        <button className="btn mb-1 return-btn" onClick={() => {history.goBack()}}> <FontAwesomeIcon icon={faArrowAltCircleLeft}/> Trở lại</button>
        {isOpenModal && <ModalAddDetail setIsOpen={setIsOpenModal} />}
      </header>
    
  )
}
