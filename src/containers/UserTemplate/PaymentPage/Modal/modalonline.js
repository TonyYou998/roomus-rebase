import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

const ModalOnline = ({ setIsOpen, keyType }) => {
  const history = useHistory();

  function Payment(){
    Swal.fire({
        title: 'Thanh toán thành công',
        icon: 'success',
        confirmButtonText: 'Hoàn tất',
        width: '25rem',
    });
    history.push('/detail/:id');
  }

  return (
    <div className='modalol__container'>
      <div className='darkBG__ol' onClick={() => setIsOpen(false)} />
      <div className='centered__ol'>
        <div className='modal__ol'>
          <div className='modalHeader__ol'>
            <h5 className='heading__ol'>THANH TOÁN VÍ ĐIỆN TỬ</h5>
          </div>
          <button className='closeBtn__ol' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px", marginRight: "7px" }} />
          </button>
          <div className='modalContent__ol'>
            <h3 style={{marginRight: "20px"}}>Hình thức thanh toán: </h3>
            <h3 style={{color: "#938989", fontWeight: "600"}}>{keyType}</h3>
          </div>
          <h3 className="findYard__ol">Thông tin cá nhân:</h3>
          <div className="pm__infor">
            <div className="name__ctn">
                <h3>Họ và tên:</h3>
                <input className="infor_input" type="text" placeholder="Nguyễn Khoa Đăng"/>
            </div>
            <div className="name__ctn">
                <h3>Email:</h3>
                <input className="infor_input" type="email" placeholder="dangkhoa@gmail.com"/>
            </div>
            <div className="name__ctn">
                <h3>SĐT:</h3>
                <input className="infor_input" type="phone" placeholder="0898014524"/>
            </div>
            <div className="name__ctn">
                <button className="captchaBtn">Gửi Captcha</button>
            </div>
            <div className="name__ctn">
                <h3>Nhập mã Captcha</h3>
                <div className="accept__payment">
                    <input className="infor_input" type="text" placeholder="Example: 12Dfd3"/>
                    <div className="paymentBtn__ctn">
                        <button className='paymentBtn' onClick={Payment}>
                            Thanh toán
                        </button> 
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOnline;