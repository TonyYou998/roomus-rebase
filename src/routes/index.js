import HomePage from "../containers/UserTemplate/HomePage/home";
import Login from "../containers/UserTemplate/LoginPage/Login";
import ServicePage from "../containers/UserTemplate/ServicePage/service";
import SignUp from "../containers/UserTemplate/SignUpPage/SignUp";

const userRoutes=[
    {
        exact:true,
        path:"/",
        Component:HomePage,
    },
    {
        exact:true,
        path:"/shop",
        Component:ServicePage
    },
    {
        exact:false,
        path:"/signin",
        Component:Login
    },
    {
        exact:false,
        path:"/signup",
        Component:SignUp
    }
]


export {userRoutes};