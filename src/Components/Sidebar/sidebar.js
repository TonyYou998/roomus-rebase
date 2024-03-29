import { faArrowRightFromBracket, faHouse, faLock, faUser, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { setActive } from '../Navbar/reduxNavbar/navbarSlice';

const obj = [
    {
        heading: 'User Profile',
        link: '/profile',
        icon: faUser,
    },
    {
        heading: 'Change Password',
        link: '/changepass',
        icon: faLock,
    },
    {
        heading: 'Payment History',
        link: '/paymenthistory',
        icon: faRectangleList,
    },
]

function Sidebar() {
    const dispatch = useDispatch();
    const path = useLocation();
    const history = useHistory();

    function HandleLogout() {
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

    function BackToHome(){
        dispatch(setActive('Home'));
    }

    return (
        <div className='sidebar'>
            <Link to='/'>
            <div className='sidebar__logo'></div>
            </Link>
            <span className="font-weight-bold text-uppercase text-logo">ROOMUS</span>
            <ul className='sidebar__list'>
                {
                    obj.map((item, idx) => (
                        <li
                            key={idx}
                            className={`sidebar__item
                             ${path.pathname === item.link ? 'sidebar__item--actived' : ''}`}
                        >
                            <Link to={item.link} className='sidebar__item-link'>
                                <FontAwesomeIcon className='sidebar__item-icon'icon={item.icon} />
                                {item.heading}
                            </Link>
                        </li>
                    )
                    )

                }
                <li className='sidebar__item' onClick={BackToHome}>
                    <Link to='/' className='sidebar__item-link'>
                        <FontAwesomeIcon className='sidebar__item-icon'icon={faHouse} />
                        Back To Home
                    </Link>
                </li>
                
            </ul>

            <div className='sidebar__logout'>
                <div onClick={HandleLogout} className='sidebar__logout-link'>
                    <FontAwesomeIcon className='sidebar__item-icon-logout' icon={faArrowRightFromBracket} />
                    LOG OUT
                </div>
            </div>
        </div>
    )
}

export default Sidebar;