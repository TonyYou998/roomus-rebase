 import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../../styled/components/Navbar/navbar'
 
 function UserLayout(props){
    return<>
    <Navbar>
        {props.children}
    </Navbar>
       
    </>
 }
 export default function UserTemplate({Component,...props}) {
   return (
    <Route
    {...props}
    render={
      (propsComponent)=>(
        <UserLayout>
          <Component {...propsComponent}/>
        </UserLayout>
      )
    }
  />
   );
 }
 