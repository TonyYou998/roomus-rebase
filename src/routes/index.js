import HomePage from "../containers/UserTemplate/HomePage/home";
import Login from "../containers/UserTemplate/LoginPage/Login";
import ServicePage from "../containers/UserTemplate/ServicePage/service";
import SignUp from "../containers/UserTemplate/SignUpPage/SignUp";
import DetailPage from "../containers/UserTemplate/DetailPage/detail";
import PaymentPage from "../containers/UserTemplate/PaymentPage/payment";
import bsdashboard from "../containers/BusinessTemplate/BsDashboardPage/bsdashboard";

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
        path:"/detail/:id",
        Component:DetailPage
    },
    {
        exact:false,
        path:"/payment/:id",
        Component: PaymentPage
    }
]

const businessRoutes=[
    {
        exact:true,
        path:"/bsdashboard",
        Component:bsdashboard,
    },
    {
        exact:true,
        path:"/bsdashboard/listroom",
        Component:bsdashboard,
    },

]


export {userRoutes, businessRoutes}