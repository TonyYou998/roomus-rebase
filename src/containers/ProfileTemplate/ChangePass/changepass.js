import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';

function PassworkValid(password) {
  if (password.length >= 5) {
      return true;
  }
  return false;
}

function CheckPassEqual(password1, password2) {
  if (password2 !== password1) {
      return false;
  }
  return true;
}

export default function ChangePass() {
  const [CurrentPass, setCurrentPass] = useState('');
  const [NewPass, setNewPass] = useState('');
  const [AgainPass, setAgainPass] = useState('');

  const [checkCurrentPassValid, setCheckCurrentPassValid] = useState(false);
  const [checkNewPassValid, setCheckNewPassValid] = useState(false);
  const [checkAgainPassValid, setCheckAgainPassValid] = useState(false);

  const CurrentPassInput = useRef();
  const NewPassInput = useRef();
  const AgainPassInput = useRef();
  

  const handleChangePass = (e) => {
    e.preventDefault()

    if (CurrentPass === '' || NewPass === '' || AgainPass === '') {
      Swal.fire({
        title: "Vui lòng không để trống",
        icon: 'error',
        confirmButtonText: 'Đóng',
        width: '25rem',
      });
      e.preventDefault();
      return;
    }
    else {
        setCheckCurrentPassValid(false);
        setCheckNewPassValid(false);
        setCheckAgainPassValid(false);
    }

    if (!PassworkValid(CurrentPass)) {
        setCheckCurrentPassValid(true);
        setCurrentPass('');
        CurrentPassInput.current.focus();
        e.preventDefault();
        return;
    }
    else {
        setCheckCurrentPassValid(false);
    }

    if (!PassworkValid(NewPass)) {
        setCheckNewPassValid(true);
        setNewPass('');
        NewPassInput.current.focus();
        e.preventDefault();
        return;
    }
    else {
        setCheckNewPassValid(false);
    }

    if (!CheckPassEqual(NewPass, AgainPass)) {
        setCheckAgainPassValid(true);
        setAgainPass('');
        AgainPassInput.current.focus();
        e.preventDefault();
        return;
    }
    else {
        setCheckAgainPassValid(false);
    }

    Swal.fire({
      title: 'Thay đổi thành công',
      icon: 'success',
      confirmButtonText: 'Hoàn tất',
      width: '25rem',
  });

  setCurrentPass('');
  setNewPass('');
  setAgainPass('');
  };
  return (
    <div className="header bg-white container container__header mt-16 changepw-ctn">
    <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-40 p-b-40">
            <div className='changepw-header'>
              <div className='key-symbol'> <FontAwesomeIcon icon={faKey} /> </div>
              <span className="login100-form-title mb-2 ">
                  Change Password
              </span>
              <span className='changepw-slogan'>Enter new password to change</span>
            </div>
            <h3 className='title_input_login'>Current Password</h3>
            <div className="wrap-input100 rs1 validate-input">
                <input className="input100" ref={CurrentPassInput} value={CurrentPass} onChange={(e)=>setCurrentPass(e.target.value)} type="password" placeholder="Current Password" />
                {checkCurrentPassValid ? (
                <div className='error__password login_psword'>
                    <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                    Mật khẩu không đúng
                </div>
                ) : (
                    ''
                )}
            </div>
            <h3 className='title_input_login'>New Password</h3>
            <div className="wrap-input100 rs1 validate-input">
                <input className="input100" ref={NewPassInput} value={NewPass} onChange={(e)=>setNewPass(e.target.value)} type="password" placeholder="New Password" />
                {checkNewPassValid ? (
                <div className='error__password login_psword'>
                    <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                    Mật khẩu không hợp lệ
                </div>
                ) : (
                    ''
                )}
            </div>
            <h3 className='title_input_login'>Confirm Password</h3>
            <div className="wrap-input100 rs1 validate-input">
                <input className="input100" ref={AgainPassInput} value={AgainPass} onChange={(e)=>setAgainPass(e.target.value)} type="password" placeholder="Confirm Password" />
                {checkAgainPassValid ? (
                <div className='error__password login_psword'>
                    <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                    Mật khẩu không khớp
                </div>
                ) : (
                    ''
                )}
            </div>

            <div className="container-login100-form-btn" style={{marginTop: "30px"}}>
                <button className="login100-form-btn" onClick={handleChangePass}>
                    Change
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
