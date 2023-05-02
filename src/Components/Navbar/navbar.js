import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import AvatarLogin from '../Login/avatarlogin';
import { setActive } from './reduxNavbar/navbarSlice';
import Login from '../Login/login';

const Navbar = () => {
    const dispatch = useDispatch();
    
    const active = useSelector(state => state.navbar.active);
  
    const handlerActive = (value) => {
      dispatch(setActive(value));
      if(localStorage.getItem("first") != null)
      {
        localStorage.removeItem('first');
      }
    }


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
                    style={(active === 'Home' || localStorage.getItem("first")) ? { color: '#ffcd1d' } : {color: 'white'}} >Home </Link>
                </li>
                <li className="nav-item" onClick={() => handlerActive('Category')}>
                    <Link className="nav-link" to={`/shop`}
                    style={active === 'Category' ? { color: '#ffcd1d' } : {color: 'white'}}>
                        Shop
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                {localStorage.getItem('userId') ?
                (
                    <>
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
                    </>
                ) : ''
                }
                
                {localStorage.getItem('userId') ? <AvatarLogin /> : (<Login />)}
                
            </ul>
        </div>
        </nav>
        </div>
    </div>
    
  )
}

export default memo(Navbar);