import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {mainApi} from '../../../API/api'
import Swal from 'sweetalert2';

function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const EmailInput = useRef();
    const PassInput = useRef();

    const [errorEmail, setErrorEmail] = useState(false)
    const [emailRegex, setEmailRegex] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    function onSubmit(e){
        e.preventDefault();

        if(!ValidateEmail(email))
        {
            setEmailRegex(true);
            setEmail('');
            EmailInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setEmailRegex(false);
        }

        mainApi.post("/user/login",{
            username: email,
            password,
        })

        .then((result)=>{
            console.log(result.data);
            localStorage.setItem('userId', result.data.user.id);
            localStorage.setItem('role', result.data.user.role);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('name', result.data.user.username);
            localStorage.setItem('first', "flag");

            Swal.fire({
                title: 'Đăng nhập thành công',
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
            if(err.response.data.error === "Sorry, we can't find your account with this email/ username.")
            {
                setErrorEmail(true);
                setEmail('');
                EmailInput.current.focus();
            }
            else if(err.response.data.error === "Your email/ username or password is incorrect!"){
                setErrorPassword(true);
                setPassword('');
                PassInput.current.focus();
            }
        })
    }

    

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-40 p-b-40">
                    <span className="login100-form-title mb-4">
                        Log In
					</span>

                    <h3 className='title_input_login'>Email</h3>

                    <div className="wrap-input100 validate-input" >
                        <input className="input100" type="text" placeholder="Email" ref={EmailInput} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {errorEmail ? (
                        <div className='error__password login_psword'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Vui lòng kiểm tra lại Email
                        </div>
                        ) : (
                            ''
                        )}
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
                        <input className="input100" type="password" placeholder="Password" ref={PassInput} value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errorPassword ? (
                        <div className='error__password login_psword'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Vui lòng kiểm tra lại mật khẩu
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="container-login100-form-btn m-t-20">
                        <button className="login100-form-btn" onClick={onSubmit}>
                            Sign in
						</button>
                    </div>

                    <div className="text-center p-t-45 p-b-4">
                        <span className="txt1">Create an account?</span>
                        &nbsp;
                        <Link to="/signup" className="txt2 hov1">
                            Sign up
						</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;