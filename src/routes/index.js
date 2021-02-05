import PageNotFound from "../views/PageNotFound";
import Release from "../views/Release";
import Updatelist from "../views/Updatelist";
import HomePage from "../views/admin/AdminPage";
import ContactMe from '../views/ContactMe';
import AutoTestPlan from "../views/AutoTestPlan";

// 无需登录
export const mainRoutes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path:'/autoTestPlan',
        component:AutoTestPlan,
        exact:true
    },
    {
        path: '/updatelist',
        component: Updatelist,
        exact: true
    },
    {
        path: '/ContactMe',
        component: ContactMe,
    },
    {
        path: '/404',
        component: PageNotFound,
        exact: true,
    }
];

// 需要登录，暂时无需登录
export const adminRoutes = [{
    path: '/',
    component: HomePage,
    exact: true
},
    {
    path: '/admin/release',
    component: Release,
},
{
    path:'/autoTestPlan',
    component:AutoTestPlan,
    exact:true
},
{
    path: '/updatelist',
    component: Updatelist,
    exact: true
},
{
    path: '/404',
    component: PageNotFound,
    exact: true,
}];