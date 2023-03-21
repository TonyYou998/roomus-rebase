import HomePage from "../containers/UserTemplate/HomePage/home";
import ServicePage from "../containers/UserTemplate/ServicePage/service";

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
    }
]


export {userRoutes};