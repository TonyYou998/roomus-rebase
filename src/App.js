import { Switch } from 'react-router-dom';
import UserTemplate from './containers/UserTemplate';
import logo from './logo.svg';
import Navbar from './styled/components/Navbar/navbar';
import { userRoutes } from './routes';
const showUserLayout=(routes)=>{
  if(routes&& routes.length>0){
    return routes.map((item,index)=>{
      return(
        <UserTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.Component}
        />
         
      )

    });
  }


}
function App() {
  return (
    <Switch>
      {showUserLayout(userRoutes)}
    </Switch>
  );
}

export default App;
