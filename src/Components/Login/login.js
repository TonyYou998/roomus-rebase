import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive } from '../Navbar/reduxNavbar/navbarSlice';

export default function Login() {
  const active = useSelector(state => state.navbar.active);
  const dispatch = useDispatch();
  const handlerActive = (value) => {
    dispatch(setActive(value));

    if(localStorage.getItem("first") != null)
    {
      localStorage.removeItem('first');
    }
  }

  return (
    <li className="nav-item" onClick={() => handlerActive('Login')}>
      <Link className="nav-link" to="/signin" style={active === 'Login' ? { color: '#ffcd1d' } : {color: 'white'}}>
        <i className="fas fa-user mr-1"></i>
        Login
      </Link>
    </li>
  )
}
