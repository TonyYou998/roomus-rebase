import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { setActive } from '../Navbar/reduxNavbar/navbarSlice';

export default function BsNavbar() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const active = useSelector(state => state.navbar.active);
  
    const handlerActive = (value) => {
      dispatch(setActive(value));
    }

    function HandleLogout(){
    if(localStorage.getItem("first") != null)
      {
        localStorage.removeItem('first');
      }
      dispatch(setActive("Login"));
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
      if(localStorage.getItem('businessId') != null){
        localStorage.removeItem('businessId');
      }
      if(localStorage.getItem('businessName') != null){
        localStorage.removeItem('businessName');
      }
      
      history.push('/signin');
    }

  return (
    <div className="navbar__ctn bs_navbar_ctn">
        <div className="container container__header px-0 px-lg-3">
    <nav className="main-nav navbar navbar-expand-lg navbar-light py-3 px-lg-0 tan__navbar">
        <Link className="navbar-brand" to={`/bsdashboard`}>
            <span className="font-weight-bold text-uppercase text-logo" onClick={() => handlerActive('Dashboard')}>ROOMUS FOR <span style={{color : '#2992D0'}}>BUSINESS </span> </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item" onClick={() => handlerActive('Dashboard')}>
                    <Link className="nav-link" to={`/bsdashboard`} style={active === 'Dashboard' ? { color: '#ffcd1d' } : {color: 'white'}}>
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item bs_nav_item" onClick={() => handlerActive('Home')}>
                    <Link className="nav-link" to={`/`}>
                        Customer
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item bs_nav_item" onClick={() => handlerActive('Profile')}>
                    <Link className="nav-link" to={`/bsprofile`} style={active === 'Profile' ? { color: '#ffcd1d' } : {color: 'white'}}>
                        <i className="fas fa-user mr-1"></i>Profile
                    </Link>
                </li>
                <li className="nav-item bs_nav_item">
                    <div className="nav-link" onClick={HandleLogout}>
                    <FontAwesomeIcon className="mr-1" icon={faArrowRightFromBracket}></FontAwesomeIcon>
                       Log Out
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
    </div>
    
  )
}
