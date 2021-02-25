import PageNotFound from "../views/PageNotFound";
import Release from "../views/Release";
import Updatelist from "../views/Updatelist";
import HomePage from "../views/admin/AdminPage";
import ContactMe from '../views/ContactMe';
import AutoTestPlan from "../views/AutoTestPlan";
// import Signup from "../views/user/Signup";
import Signup from "../views/user/Signup";
// import Login from "../views/user/Login"
import Login from "../views/user/Login";
import FeedbackOrBug from "../views/FeedbackOrBug"

export const commonRouters = [
    {
        path: '/', component: HomePage,
        exact: true
    },

    {
        path: '/autoTestPlan', component: AutoTestPlan,
        exact: true
    },
    {
        path: '/updatelist', component: Updatelist,
        exact: true
    },
    {
        path: '/contactMe', component: ContactMe,
        exact: true,
    },
    {
        path: '/feedbackOrBug', component: FeedbackOrBug,
        exact: true
    },
    {
        path: '/404', component: PageNotFound,
        exact: true,
    }
];


// 无需登录
export const mainRoutes = [

    {
        path: '/signup', component: Signup,
        exact: true,
    },
    {
        path: '/login', component: Login,
        exact: true,
    }
];

// 需要登录，暂时无需登录
export const adminRoutes = [
    {
        path: '/admin/release', component: Release,
    }
];
