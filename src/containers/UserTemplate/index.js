 import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar';

 
 function UserLayout(props){
    return<>
    <Navbar>
    </Navbar>
        {props.children}
       
    </>
 }
 export default function UserTemplate({Component,...props}) {
  console.log(Component);
   return (
    <Route
    {...props}
    render={
      ({propsComponent})=>(
        <UserLayout>
          <Component {...propsComponent}/>
        </UserLayout>
      )
    }
  />
   );
 }
 