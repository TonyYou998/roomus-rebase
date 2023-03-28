import HomePage from "../containers/UserTemplate/HomePage/home";
import Login from "../containers/UserTemplate/LoginPage/Login";
import ServicePage from "../containers/UserTemplate/ServicePage/service";
import SignUp from "../containers/UserTemplate/SignUpPage/SignUp";
import DetailPage from "../containers/UserTemplate/DetailPage/detail";
import PaymentPage from "../containers/UserTemplate/PaymentPage/payment";

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
    },
    {
        exact:true,
        path:"/detail",
        Component:DetailPage
    },
    {
        exact:false,
        path:"/detail/payment",
        Component: PaymentPage
    }
]


export {userRoutes};