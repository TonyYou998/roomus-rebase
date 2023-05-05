import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import {mainApi} from '../../../API/api'
import Swal from 'sweetalert2';
import { tab } from '@testing-library/user-event/dist/tab';

function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function RegisterBs() {
    const history = useHistory();
    const [namebs, setNameBs] = useState('');
    const [email, setEmail] = useState('');
    const [namehost, setNamehost] = useState('');
    const [address, setAddress] = useState('');
    const [des, setDes] = useState('');
    const [taxNumber, setTaxNumber] = useState('');
    const [handlePagi, setHandlePagi] = useState(1);

    const NameInput = useRef();
    const EmailInput = useRef();
    const NameHostInput = useRef();
    const AddressInput = useRef();
    const DesInput = useRef();
    const TaxInput = useRef();

    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [emailRegex, setEmailRegex] = useState(false);
    const [errorHost, setErrorHost] = useState(false);
    const [errorAddress, setErrorAddress] = useState(false);
    const [errorDes, setErrorDes] = useState(false);
    const [errorTax, setErrorTax] = useState(false);

    const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
    const headers = {
        Authorization: tokenAuth,
    };

    function onSubmit(e){
        e.preventDefault();
        if (address === '' || des === '' || taxNumber === '') {
            Swal.fire({
              title: 'Vui lòng điền đủ thông tin',
              icon: 'error',
              confirmButtonText: 'Đóng',
              width: '25rem',
          });
            e.preventDefault();
            return;
        }

        if(namebs === '' || email === '' || namehost === ''){
            setHandlePagi(1);
            Swal.fire({
                title: 'Vui lòng điền đủ thông tin',
                icon: 'error',
                confirmButtonText: 'Đóng',
                width: '25rem',
            });
              e.preventDefault();
              return;
        }

        if(!ValidateEmail(email))
        {
            setHandlePagi(1);
            setEmailRegex(true);
            setEmail('');
            EmailInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setEmailRegex(false);
        }

        if(namebs.length < 4){
            setHandlePagi(1);
            setErrorName(true);
            setNameBs('');
            NameInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setErrorName(false);
        }

        if(namehost.length < 3){
            setHandlePagi(1);
            setErrorHost(true);
            setNamehost('');
            NameHostInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setErrorHost(false);
        }

        if(address.length < 5){
            setErrorAddress(true);
            setAddress('');
            AddressInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setErrorAddress(false);
        }

        if(des.length < 3){
            setErrorDes(true);
            setDes('');
            DesInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setErrorDes(false);
        }

        if(taxNumber.length < 8){
            setErrorTax(true);
            setTaxNumber('');
            TaxInput.current.focus();
            e.preventDefault();
            return;
        }
        else{
            setErrorTax(false);
        }

        if(!errorAddress && !errorDes && !errorEmail && !errorHost && !errorName && !errorTax)
        {
            const obj = {
                fullname: namebs,
                email: email,
                nameHost: namehost,
                address: address,
                description: des,
                taxNumber: taxNumber,
                userId: localStorage.getItem('userId')
            }
            console.log(obj);
            
            mainApi.post("/business/create", obj , { headers: headers })

            .then((result)=>{
                console.log(result.data);

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
                localStorage.setItem('role', '2');

                history.push('/bsdashboard');

            })
            .catch((err)=>{
                console.log(err);
                // if(err.response.data.error === "Sorry, we can't find your account with this email/ username.")
                // {
                //     setErrorEmail(true);
                //     setEmail('');
                //     EmailInput.current.focus();
                // }
                // else if(err.response.data.error === "Your email/ username or password is incorrect!"){
                //     setErrorPassword(true);
                //     setPassword('');
                //     PassInput.current.focus();
                // }
            })
            }
    
    }

    

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-40 p-b-40">
                    <span className="login100-form-title mb-4" style={{marginBottom: "20px"}}>
                        Register for Business
					</span>

                    {(handlePagi === 1) ? (
                        <>
                        <h3 className='title_input_login'>Business Name</h3>
                        <div className="wrap-input100 rs1 validate-input">
                            <input className="input100" type="text" placeholder="Bình Minh" ref={NameInput} value={namebs} onChange={(e) => setNameBs(e.target.value)} />
                            {errorName ? (
                            <div className='error__password login_psword'>
                                <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                                Tên doanh nghiệp quá ngắn
                            </div>
                            ) : (
                                ''
                            )}
                        </div>

                        <h3 className='title_input_login'>Name Host</h3>
                        <div className="wrap-input100 rs1 validate-input">
                            <input className="input100" type="text" placeholder="Trần Bình Minh" ref={NameHostInput} value={namehost} onChange={(e) => setNamehost(e.target.value)} />
                            {errorHost ? (
                            <div className='error__password login_psword'>
                                <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                                Tên quá ngắn
                            </div>
                            ) : (
                                ''
                            )}
                        </div>

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
                        </>
                    ) : ''}

                    
                    {(handlePagi === 2) ? (
                        <>
                        <h3 className='title_input_login'>Address</h3>
                        <div className="wrap-input100 rs1 validate-input">
                            <input className="input100" type="text" placeholder="112 Quận 1, TP.HCM" ref={AddressInput} value={address} onChange={(e) => setAddress(e.target.value)} />
                            {errorAddress ? (
                            <div className='error__password login_psword'>
                                <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                                Vui lòng kiểm tra lại mật khẩu
                            </div>
                            ) : (
                                ''
                            )}
                        </div>

                        <h3 className='title_input_login'>Tax Number</h3>
                        <div className="wrap-input100 rs1 validate-input">
                            <input className="input100" type="text" placeholder="Tax Number" ref={TaxInput} value={taxNumber} onChange={(e) => setTaxNumber(e.target.value)} />
                            {errorTax ? (
                            <div className='error__password login_psword'>
                                <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                                Mã số thuế không hợp lệ
                            </div>
                            ) : (
                                ''
                            )}
                        </div>

                        <h3 className='title_input_login'>Description</h3>
                        <textarea rows={5} cols={50} className='textarea_rating_1' ref={DesInput} value={des} placeholder='Cung cấp sân bóng' style={{height: "90px"}} onChange={(e) => setDes(e.target.value)}/>
                        {errorDes ? (
                        <div className='error__password'>
                            <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Mô tả quá ngắn
                        </div>
                        ) : (
                            ''
                        )}
                        </>
                    ) : ''}

                    <div className="container-login100-form-btn m-t-20">
                        {(handlePagi === 1) ? <button className="login100-form-btn" onClick={() => setHandlePagi(2)}> Next </button> : ''}
                        {(handlePagi === 2) ? (
                            <>
                                <button className="login100-form-btn" onClick={() => setHandlePagi(1)} style={{width: "70px", marginRight: "10px"}}> Prev </button>
                                <button className="login100-form-btn" onClick={onSubmit}> Register </button>
                            </>
                        ) : ''}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterBs;
