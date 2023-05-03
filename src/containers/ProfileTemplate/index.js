import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/sidebar';
import { navbarStore } from '../../Components/Navbar/reduxNavbar/navbarStore';
import { Provider } from 'react-redux';

 function ProfileLayout(props){
    return<>
    <div className='profile_container'>
        <Provider store={navbarStore}> <Sidebar /> </Provider>
        {props.children}
    </div>
    </>
 }

 
 export default function ProfileTemplate({Component,...props}) {

   return (
    <Route
    {...props}
    render={
      ({propsComponent})=>(
          <ProfileLayout>
            <Component {...propsComponent}/>
          </ProfileLayout> 
      )
    }
  />
   );
 }
 