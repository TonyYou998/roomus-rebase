import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import BsNavbar from '../../Components/BsNavbar/bsnavbar';

 
 function BusinessLayout(props){
    return<>
    <BsNavbar>
    </BsNavbar>
        {props.children}
       <Footer/>
    </>
 }

 
 export default function BusinessTemplate({Component,...props}) {

   return (
    <Route
    {...props}
    render={
      ({propsComponent})=>(
        <BusinessLayout>
          <Component {...propsComponent}/>
        </BusinessLayout>
      )
    }
  />
   );
 }
 