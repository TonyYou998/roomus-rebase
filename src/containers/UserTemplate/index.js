import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/navbar';
import { navbarStore } from '../../Components/Navbar/reduxNavbar/navbarStore';
import { shopStore } from '../../redux/reduxcshop/shopStore';

import { Provider } from 'react-redux';

 function UserLayout(props){
    return<>
      <Provider store={navbarStore}>
        <Navbar />
      </Provider>
        {props.children}
       <Footer/>
    </>
 }

 
 export default function UserTemplate({Component,...props}) {

   return (
    <Provider store={shopStore}>
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
    </Provider>
   );
 }
 