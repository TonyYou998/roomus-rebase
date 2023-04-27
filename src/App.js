import { Switch } from 'react-router-dom';
import UserTemplate from './containers/UserTemplate';
import BusinessTemplate from './containers/BusinessTemplate';
import { userRoutes, businessRoutes } from './routes';

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

const showBusinessLayout=(routes)=>{
  if(routes&& routes.length>0){
    return routes.map((item,index)=>{
      return(
        <BusinessTemplate
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
      {showBusinessLayout(businessRoutes)}
    </Switch>
  );
}

export default App;
