import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { faArrowRightFromBracket, faKey, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setActive } from '../Navbar/reduxNavbar/navbarSlice';

export default function AvatarLogin() {
  const history = useHistory();
  const dispatch = useDispatch();

  function HandleLogout() {
      if(localStorage.getItem("first") != null)
      {
        localStorage.removeItem('first');
      }
      dispatch(setActive("Login"));
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      history.push('/signin')
  }

  return (
    <li className="nav-item nav-avt">
        <div className='user-avatar-ctn'>
        <img src='https://media.vov.vn/sites/default/files/styles/large/public/2021-05/juneissue-korea-elle-rose-blackpink.jpeg' alt='Avatar' />
            <div className="dropdown-menu-1">
                <div className='menu-item name-user-menu'>Hi {localStorage.getItem('name')}</div>
                <Link to={`/profile`} className="menu-item"><i className="fas fa-user mr-2"></i>Profile</Link>
                <Link to={`/changepass`} className="menu-item"><FontAwesomeIcon className="mr-2" icon={faKey}></FontAwesomeIcon>Change Password</Link>
                <Link to={`/paymenthistory`} className="menu-item"><FontAwesomeIcon className="mr-2" icon={faStickyNote}></FontAwesomeIcon>History Payment</Link>
                <div onClick={HandleLogout}  className="menu-item"><FontAwesomeIcon className="mr-2" icon={faArrowRightFromBracket}></FontAwesomeIcon>Log Out</div>
            </div>
        </div>
    </li>
    
  )
}
