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
import ProfilePage from "../containers/ProfileTemplate/ProfilePage/profilepage";
import ChangePass from "../containers/ProfileTemplate/ChangePass/changepass";
import PaymentHistory from "../containers/ProfileTemplate/PaymentHis/paymenthis";
import TeamPage from "../containers/UserTemplate/TeamPage/team";
import BsService from "../containers/BusinessTemplate/BsServicePage/bsservice";
import RegisterBs from "../containers/UserTemplate/RegisterBusiness/registerbs";

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
        path:"/detail/:idservice",
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
    },
    {
        exact:false,
        path:"/team",
        Component: TeamPage
    },
    {
        exact:true,
        path:"/rgbusiness",
        Component: RegisterBs
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
        path:"/bsdashboard/:category",
        Component:BsService,
    },
    {
        exact:true,
        path:"/bsdashboard/:category/listroom/:idlist",
        Component:bslistservice,
    },
    {
        exact:true,
        path:"/bsprofile",
        Component: bsprofile,
    },

]

const profileRoutes=[
    {
        exact:true,
        path:"/profile",
        Component:ProfilePage,
    },
    {
        exact:true,
        path:"/changepass",
        Component:ChangePass,
    },
    {
        exact:true,
        path:"/paymenthistory",
        Component:PaymentHistory,
    },
]


export {userRoutes, businessRoutes, profileRoutes}