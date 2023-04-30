import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../Logout/logout';
import Login from "../Login/login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import AvatarLogin from '../Login/avatarlogin';
import { setActive } from './reduxNavbar/navbarSlice';

const Navbar = () => {
    const [nameUser, setNameUser] = useState(false);
    const [loginUser, setLoginUser] = useState(false);
    const dispatch = useDispatch()
    
    const active = useSelector(state => state.navbar.active);
  
    const handlerActive = (value) => {
      dispatch(setActive(value));
    }


    //Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của Session vẫn còn thì nó sẽ tiếp tục
    // đưa dữ liệu vào Redux
    // if (sessionStorage.getItem('id_user')){
    //     // const action = addSession(sessionStorage.getItem('id_user'))
    //     // dispatch(action)
    // }else{
    //     //Đưa idTemp vào Redux temp để tạm lưu trữ
    //     sessionStorage.setItem('id_temp', 'abc999')
    //     // const action = addUser(sessionStorage.getItem('id_temp'))
    //     // dispatch(action)
    // }
    

    //Get IdUser từ redux khi user đã đăng nhập
    // var idUser = useSelector(state => state.Session.idUser)
    let idUser="1";

    //Get idtemp từ redux khi user chưa đăng nhập
    // var idTemp = useSelector(state => state.Cart.id_user)

    // console.log(idUser)

    // console.log(idTemp)

    // useEffect(() => {
    //     if (!idUser){
    //         setLoginUser(true) 
    //         setNameUser(true)
    //     }else{
    //         setLoginUser(true) 
    //         setNameUser(true)
    //     }
    // }, [idUser]);


  return (
    <div className="navbar__ctn">
        <div className="container container__header px-0 px-lg-3">
    <nav className="main-nav navbar navbar-expand-lg navbar-light py-3 px-lg-0 tan__navbar">
        <Link className="navbar-brand" to={`/`}>
            <span className="font-weight-bold text-uppercase text-logo" onClick={() => handlerActive('Home')}>ROOMUS</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item" onClick={() => handlerActive('Home')}>
                    <Link className="nav-link" to={`/`} 
                    style={active === 'Home' ? { color: '#ffcd1d' } : {color: 'white'}} >Home </Link>
                </li>
                <li className="nav-item" onClick={() => handlerActive('Category')}>
                    <Link className="nav-link" to={`/shop`}
                    style={active === 'Category' ? { color: '#ffcd1d' } : {color: 'white'}}>
                        Shop
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={() => handlerActive('Dashboard')}>
                    <Link className="nav-link" to={`/bsdashboard`}>
                        <FontAwesomeIcon className='mr-1' icon={faBuilding}/>For Business
                    </Link>
                </li>
                <li className="nav-item" onClick={() => handlerActive('Favorite')}>
                    <Link className="nav-link" to={`/favorite`} style={active === 'Favorite' ? { color: '#ffcd1d' } : {color: 'white'}}>
                        <i className="fa fa-heart mr-1"></i>Favorite
                    </Link>
                </li>
                <AvatarLogin />
                {/* {nameUser ? (<Name />) : ''} */}
                {/* {loginUser ? <AvatarLogin /> : (<Login />)} */}
                
                
            </ul>
        </div>
        </nav>
        </div>
    </div>
    
  )
}

export default memo(Navbar);