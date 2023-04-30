import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRightFromBracket, faKey, faStickyNote } from '@fortawesome/free-solid-svg-icons';

export default function AvatarLogin() {
  return (
    <li className="nav-item nav-avt">
        <div className='user-avatar-ctn'>
        <img src='https://media.vov.vn/sites/default/files/styles/large/public/2021-05/juneissue-korea-elle-rose-blackpink.jpeg' />
            <div className="dropdown-menu-1">
                <div className='menu-item name-user-menu'>Hi Khoi</div>
                <Link to={`/profile`} className="menu-item"><i className="fas fa-user mr-2"></i>Profile</Link>
                <Link to={`/changepass`} className="menu-item"><FontAwesomeIcon className="mr-2" icon={faKey}></FontAwesomeIcon>Change Password</Link>
                <Link to={`/paymenthistory`} className="menu-item"><FontAwesomeIcon className="mr-2" icon={faStickyNote}></FontAwesomeIcon>History Payment</Link>
                <Link to={`/signin`} className="menu-item"><FontAwesomeIcon className="mr-2" icon={faArrowRightFromBracket}></FontAwesomeIcon>Log Out</Link>
            </div>
        </div>
    </li>
    
  )
}
