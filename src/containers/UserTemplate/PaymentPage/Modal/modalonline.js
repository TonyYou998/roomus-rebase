import React, { useState, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

const ModalOnline = ({ setIsOpen, keyType }) => {
  const history = useHistory();
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Captcha, setCaptcha] = useState('');
  const [checkNameValid, setCheckNameValid] = useState(false);
  const [checkPhoneValid, setCheckPhoneValid] = useState(false);
  const [checkEmailValid, setCheckEmailValid] = useState(false);
  const [checkCaptchaValid, setcheckCaptchaValid] = useState(false);
  const NameInput = useRef();
  const PhoneInput = useRef();
  const EmailInput = useRef();
  const CaptchaInput = useRef();

  function PhoneNumberValid(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }

  function EmailValid(email) {
      var atposition = email.indexOf('@');
      var dotposition = email.lastIndexOf('.');
      if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
          return false;
      } else {
          return true;
      }
  }

  function Payment(e){
    e.preventDefault();

    //CHECK VALIDATION
    if (Name === '' || Phone === '' || Email === '' || Captcha === '') {
      Swal.fire({
        title: 'Vui lòng điền đủ thông tin',
        icon: 'error',
        confirmButtonText: 'Đóng',
        width: '25rem',
    });
      e.preventDefault();
      return;
  }

    if (Name.length < 3) {
      setCheckNameValid(true);
      setName('');
      NameInput.current.focus();
      e.preventDefault();
      return;
      } else {
      setCheckNameValid(false);
      }

    if (!PhoneNumberValid(Phone)) {
      setCheckPhoneValid(true);
      setPhone('');
      PhoneInput.current.focus();
      e.preventDefault();
      return;
    } else {
      setCheckPhoneValid(false);
    }

    if (!EmailValid(Email)) {
      setCheckEmailValid(true);
      setEmail('');
      EmailInput.current.focus();
      e.preventDefault();
      return;
    } else {
      setCheckEmailValid(false);
    }

    if (Captcha.length < 3) {
      setcheckCaptchaValid(true);
      setCaptcha('');
      CaptchaInput.current.focus();
      e.preventDefault();
      return;
      } else {
      setcheckCaptchaValid(false);
      }

    if (!checkNameValid || !checkPhoneValid || !checkEmailValid || !checkCaptchaValid) {
      Swal.fire({
        title: 'Thanh toán thành công',
        icon: 'success',
        confirmButtonText: 'Hoàn tất',
        width: '25rem',
    });
    
    localStorage.removeItem('modal');
    localStorage.removeItem('found');
    localStorage.removeItem('date1');
    localStorage.removeItem('date2');
    localStorage.removeItem('time1');
    localStorage.removeItem('time2');
    history.push('/detail/:id');
    }

    
  }

  return (
    <div className='modalol__container'>
      <div className='darkBG__ol' onClick={() => setIsOpen(false)} />
      <div className='centered__ol'>
        <form className='modal__ol'>
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
                <input className="infor_input" type="text" placeholder="Nguyễn Khoa Đăng" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/>
                {checkNameValid ? (
                      <div className='error__password'>
                          <i class="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                          Tên không được quá ngắn
                      </div>
                    ) : (
                        ''
                    )}
            </div>
            <div className="name__ctn">
                <h3>Email:</h3>
                <input className="infor_input" type="email" placeholder="dangkhoa@gmail.com" ref={EmailInput} value={Email} onChange={(e) => setEmail(e.target.value)}/>
                <span>
                    {checkEmailValid ? (
                      <div className='error__password'>
                          <i class="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                          Email không hợp lệ
                      </div>
                    ) : (
                        ''
                    )}
                </span>
            </div>
            <div className="name__ctn">
                <h3>SĐT:</h3>
                <input className="infor_input" type="phone" placeholder="0898014524" ref={PhoneInput} value={Phone} onChange={(e) => setPhone(e.target.value)}/>
                <span>
                    {checkPhoneValid ? (
                      <div className='error__password'>
                          <i class="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                          SĐT không hợp lệ
                      </div>
                    ) : (
                        ''
                    )}
                </span>
            </div>
            <div className="name__ctn">
                <button className="captchaBtn">Gửi Captcha</button>
            </div>
            <div className="name__ctn">
                <h3>Nhập mã Captcha</h3>
                <div className="accept__payment">
                    <input className="infor_input" type="text" placeholder="Example: 12Dfd3" ref={CaptchaInput} value={Captcha} onChange={(e) => setCaptcha(e.target.value)}/>
                    <div className="paymentBtn__ctn">
                        <button className='paymentBtn' onClick={Payment} type="submit">
                            Thanh toán
                        </button> 
                    </div>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalOnline;