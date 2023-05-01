import { faEnvelope, faMailBulk, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { mainApi } from '../../../api';
// import UserAPI from '../API/UserAPI';
// import { addSession } from '../Redux/Action/ActionSession';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const EmailInput = useRef();
    const PassInput = useRef();

    const [user, setUser] = useState([])

    const [errorEmail, setErrorEmail] = useState(false)
    const [emailRegex, setEmailRegex] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const [redirect, setRedirect] = useState(false)

    const [checkPush, setCheckPush] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {

        const fetchData = async () => {

            // const response = await UserAPI.getAllData()

            // setUser(response)

        }

        fetchData()

    }, [])

    const onSubmit = () => {

        if (!email) {
            setErrorEmail(true);
            EmailInput.current.focus();
            return
        } else {
         
            if (!password) {
            
                setErrorEmail(false)
                setErrorPassword(true)
                return
            } else {
 
                setErrorPassword(false)

                if (!validateEmail(email)) {
                   
                    EmailInput.current.focus();
                    setEmailRegex(true)
                    return
                } else {
                    setEmailRegex(false)
                    // chổ này để làm cái dì vậy
                    // const findUser = user.find(value => {
                    //     return value.email === email
                    // })
                
                    // if (!findUser) {

                    //     setErrorEmail(true);
                    //     EmailInput.current.focus();
                    //     return
                    // } else {
                    //     setErrorEmail(false)

                    //     if (findUser.password !== password) {
                    //         setErrorPassword(true);
                    //         PassInput.current.focus();
                    //         return
                    //     } else {
                    //         setErrorPassword(false)

                    //         sessionStorage.setItem('id_user', findUser._id)

                    //         sessionStorage.setItem('name_user', findUser.fullname)
                            

                    //         // const action = addSession(sessionStorage.getItem('id_user'))
                    //         // dispatch(action)
                    //         console.log(email);
                    //         console.log(password);
                    //         mainApi.post("/user/login",{
                    //             username:email,
                    //             password,
                    //         })

                    //         setCheckPush(true)
                    //     }

                    // }

                    // 
// code mẫu call api đừng viết logic call api ở đây
// tạo 1 function call api login riêng rồi call function đó ở đây
// understand?
                    mainApi.post("/user/login",{
                        username:email,
                        password,
                    })
                    .then((result)=>{
                        console.log(result.data);

                    })
                    .catch((err)=>{
                        console.log(err);
                    })

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
                        Log In
					</span>

                    <h3 className='title_input_login'>Email</h3>

                    <div className="wrap-input100 validate-input" >
                        <input className="input100" type="text" placeholder="Email" ref={EmailInput} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {errorEmail ? (
                        <div className='error__password login_psword'>
                            <i class="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Vui lòng kiểm tra lại Email
                        </div>
                        ) : (
                            ''
                        )}
                        {emailRegex ? (
                        <div className='error__password login_psword'>
                            <i class="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
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
                            <i class="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                            Vui lòng kiểm tra lại mật khẩu
                        </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="container-login100-form-btn m-t-20">
                        {
                            redirect && <Redirect to={`/`} />
                        }
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