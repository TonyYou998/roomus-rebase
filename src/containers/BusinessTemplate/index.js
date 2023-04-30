import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import BsNavbar from '../../Components/BsNavbar/bsnavbar';
import { navbarStore } from '../../Components/Navbar/reduxNavbar/navbarStore';
import { Provider } from 'react-redux';

 
 function BusinessLayout(props){
    return<>
    <Provider store={navbarStore}>
        <BsNavbar />
      </Provider>
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
 