import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { mainApi } from '../../../API/api';
import { Link } from 'react-router-dom';

function PhoneNumberValid(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }

function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function ValidatePass(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  }

function SignUp() {
    const history = useHistory();
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const NameInput = useRef();
    const EmailInput = useRef();
    const PassInput = useRef();
    const PhoneInput = useRef();

    const [emailRegex, setEmailRegex] = useState(false)
    const [errorPassword, setPasswordError] = useState(false)
    const [usernameRegex, setUsernameRegex] = useState(false)
    const [errorPhone, setPhoneError] = useState(false)

    function fetchSignUp()
    {
        const objResgister = {
            username: username,
            email: email,
            password: password,
            fullname: "testThuiew",
            phone: phone
        }

        mainApi.post("/user/register", objResgister)

        .then((result)=>{
            console.log(result.data);
            localStorage.setItem('userId', result.data.user.id);
            localStorage.setItem('role', result.data.user.role);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('name', result.data.user.username);
            localStorage.setItem('first', "flag");

            Swal.fire({
                title: 'Đăng ký thành công',
                icon: 'success',
                width: '25rem',
                showCloseButton: false,
                showConfirmButton: false
            });

            setTimeout(function() {
                Swal.close();
              }, 1200);

            history.push('/');  

        })
        .catch((err)=>{
            if(err.response.data.error === "Invalid username/email or password passed!")
            {
                Swal.fire({
                    title: "Username hoặc Email đã được sử dụng!",
                    icon: 'error',
                    confirmButtonText: 'Đóng',
                    width: '25rem',
                  });
            }
            console.log(err);
        })

    }

    const handlerSignUp = (e) => {
        e.preventDefault();

        if(username.length < 4)
        {
            setUsernameRegex(true);
            setUserName('');
            NameInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setUsernameRegex(false);
        }

        if(!ValidateEmail(email))
        {
            setEmailRegex(true);
            EmailInput.current.focus();
            setEmail('');
            e.preventDefault();
            return;
        }
        else
        {
            setEmailRegex(false);
        }

        if(!ValidatePass(password))
        {
            setPasswordError(true);
            PassInput.current.focus();
            setPassword('');
            e.preventDefault();
            return;
        }
        else{
            setPasswordError(false);
        }

        if(!PhoneNumberValid(phone) || phone.length > 11)
        {
            setPhoneError(true);
            PhoneInput.current.focus();
            setPhone('');
            e.preventDefault();
            return;
        }
        else{
            setPhoneError(false);
        }



        fetchSignUp();

        
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-40 p-b-40">
                    <span className="login100-form-title mb-4">
                        Sign Up
					    </span>
                    <h3 className='title_input_login'>User Name</h3>
                    <div className="wrap-input100 validate-input" >
                        <input className="input100" ref={NameInput} value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="User Name" /> 
                        {usernameRegex ? (
                        <div className='error__password login_psword'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Tên quá ngắn
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <h3 className='title_input_login'>Email</h3>
                    <div className="wrap-input100 rs1 validate-input" >
                        <input className="input100" ref={EmailInput} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                        {emailRegex ? (
                        <div className='error__password login_psword'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Email không hợp lệ
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <h3 className='title_input_login'>Password</h3>
                    <div className="wrap-input100 rs1 validate-input">
                        <input className="input100" ref={PassInput} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        {errorPassword ? (
                        <div className='error__password login_psword'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Mật khẩu không hợp lệ
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <h3 className='title_input_login'>Phone</h3>
                    <div className="wrap-input100 rs1 validate-input">
                        <input className="input100" ref={PhoneInput} value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" />
                        {errorPhone ? (
                        <div className='error__password login_psword'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Điện thoại không hợp lệ
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="container-login100-form-btn m-t-20">
                        <button className="login100-form-btn" onClick={handlerSignUp}>
                            Sign Up
						</button>
                    </div>

                    <div className="text-center p-t-45 p-b-4">
                        <span className="txt1">Login?</span>
                        &nbsp;
                        <Link to="/signin" className="txt2 hov1">
                           Click
						</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;