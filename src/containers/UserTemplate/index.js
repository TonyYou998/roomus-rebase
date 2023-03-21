 import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/navbar';

 
 function UserLayout(props){
    return<>
    <Navbar>
    </Navbar>
        {props.children}
       <Footer/>
    </>
 }
 export default function UserTemplate({Component,...props}) {

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
 