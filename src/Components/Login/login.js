import React from 'react'
import { useDispatch } from 'react-redux'
import { Link,redirect } from 'react-router-dom';

export default function Login() {
    const đispatch =useDispatch();
    const onRedirect = () => {

        sessionStorage.clear()

        // const action = deleteSession('');
        console.log("call rerirect");
        // mốt tính
        // dispatch(action)

    }
  return (
    
    <li className="nav-item" onClick={onRedirect}>
      <Link className="nav-link" to="/signin">
  
      </Link>
    </li>
  )
}
