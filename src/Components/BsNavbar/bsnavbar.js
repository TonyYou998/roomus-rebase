import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

export default function BsNavbar() {

  return (
    <div className="container container__header px-0 px-lg-3">
    <nav className="main-nav navbar navbar-expand-lg navbar-light py-3 px-lg-0 tan__navbar">
        <Link className="navbar-brand" to={`/bsdashboard`}>
            <span className="font-weight-bold text-uppercase text-dark">ROOMUS FOR <span style={{color : '#2992D0'}}>BUSINESS </span> </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" style={{ color: '#2992D0' }}>
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item bs_nav_item">
                    <Link className="nav-link" to={`/`}>
                        Customer
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item bs_nav_item">
                    <Link className="nav-link" to={`/cart`}>
                        <i className="fas fa-user mr-1"></i>Profile
                    </Link>
                </li>
                <li className="nav-item bs_nav_item">
                    <Link className="nav-link" to={`/signin`}>
                    <FontAwesomeIcon className="mr-1" icon={faArrowRightFromBracket}></FontAwesomeIcon>
                       Log Out
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
</div>
  )
}
