import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
SignUp.propTypes = {

};

function SignUp(props) {
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const [errorEmail, setEmailError] = useState(false)
    const [emailRegex, setEmailRegex] = useState(false)
    const [errorPassword, setPasswordError] = useState(false)
    const [errorFullname, setFullnameError] = useState(false)
    const [errorPhone, setPhoneError] = useState(false)

    const [success, setSuccess] = useState(false)


    const onChangeName = (e) => {
        setFullName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handlerSignUp = (e) => {
        e.preventDefault()

        if (!fullname) {
            setFullnameError(true)
            setEmailError(false)
            setPhoneError(false)
            setPasswordError(false)
            setEmailRegex(false)
            return
        } else {
            setFullnameError(false)
            setPhoneError(false)
            setPasswordError(false)
            setFullnameError(false)
            setEmailRegex(false)

            if (!email) {
                setFullnameError(false)
                setEmailError(true)
                setPhoneError(false)
                setPasswordError(false)
                return
            } else {
                setEmailError(false)
                setPhoneError(false)
                setPasswordError(false)
                setFullnameError(false)

                if (!validateEmail(email)) {
                    setEmailRegex(true)
                    setFullnameError(false)
                    setEmailError(false)
                    setPhoneError(false)
                    setPasswordError(false)
                    return
                } else {
                    setEmailRegex(false)

                    if (!password) {
                        setFullnameError(false)
                        setEmailError(false)
                        setPhoneError(false)
                        setPasswordError(true)
                        return
                    } else {
                        setFullnameError(false)
                        setPhoneError(false)
                        setPasswordError(false)
                        setFullnameError(false)
                        setEmailRegex(false)
  
                        if (!phone) {
                            setFullnameError(false)
                            setEmailError(false)
                            setPhoneError(true)
                            setPasswordError(false)
                        } else {
                            Swal.fire({
                                title: 'Đăng ký thành công',
                                icon: 'success',
                                confirmButtonText: 'Hoàn tất',
                                width: '25rem',
                            });

                            const fetchSignUp = async () => {

                                const params = {
                                    fullname: fullname,
                                    email: email,
                                    password: password,
                                    phone: phone
                                }

                                // const query = '?' + queryString.stringify(params)

                                // const response = await UserAPI.postSignUp(query)
                                // console.log(response)

                                setSuccess(true)

                            }
                            
                            fetchSignUp()

                            // Hàm này dùng để tạo các conversation cho user và admin
                            const fetchConversation = async () => {

                                const params = {
                                    email: email,
                                    password: password 
                                }

                                // const query = '?' + queryString.stringify(params)

                                // const response = await MessengerAPI.postConversation(query)
                                // console.log(response)

                            }

                            fetchConversation()

                        }
                    }

                }
            }
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-40 p-b-40">
                    <span className="login100-form-title mb-4">
                        Sign Up
					    </span>
                    <h3 className='title_input_login'>Full Name</h3>
                    <div className="wrap-input100 validate-input" >
                        <input className="input100" value={fullname} onChange={onChangeName} type="text" placeholder="Full Name" /> 
                        {errorFullname ? (
                        <div className='error__password login_psword'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Vui lòng kiểm tra lại Name
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <h3 className='title_input_login'>Email</h3>
                    <div className="wrap-input100 rs1 validate-input" >
                        <input className="input100" value={email} onChange={onChangeEmail} type="text" placeholder="Email" />
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
                        <input className="input100" value={password} onChange={onChangePassword} type="password" placeholder="Password" />
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
                        <input className="input100" value={phone} onChange={onChangePhone} type="text" placeholder="Phone" />
                        {errorPhone ? (
                        <div className='error__password login_psword'>
                            <i class="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Điện thoại không hợp lệ
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="container-login100-form-btn m-t-20">
                        {success && <Redirect to={'/signin'} />}
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