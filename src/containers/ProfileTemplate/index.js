import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/sidebar';

 function ProfileLayout(props){
    return<>
    <div className='profile_container'>
        <Sidebar />
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
 