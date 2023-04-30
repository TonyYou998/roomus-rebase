import HomePage from "../containers/UserTemplate/HomePage/home";
import Login from "../containers/UserTemplate/LoginPage/Login";
import ServicePage from "../containers/UserTemplate/ServicePage/service";
import SignUp from "../containers/UserTemplate/SignUpPage/SignUp";
import DetailPage from "../containers/UserTemplate/DetailPage/detail";
import PaymentPage from "../containers/UserTemplate/PaymentPage/payment";
import bsdashboard from "../containers/BusinessTemplate/BsDashboardPage/bsdashboard";
import bslistservice from "../containers/BusinessTemplate/BsListServicePage/bslistservice";
import bsprofile from "../containers/BusinessTemplate/BsProfilePage/bsprofile";
import FavoritePage from "../containers/UserTemplate/FavoritePage/favorite";
import HistoryPM from "../containers/UserTemplate/HistoryPM/history";

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
    },
    {
        exact:false,
        path:"/favorite",
        Component: FavoritePage
    },
    {
        exact:false,
        path:"/history",
        Component: HistoryPM
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
        Component:bslistservice,
    },
    {
        exact:true,
        path:"/bsprofile",
        Component: bsprofile,
    },

]


export {userRoutes, businessRoutes}