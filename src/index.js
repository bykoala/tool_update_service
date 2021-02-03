import { React, useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { mainRoutes, adminRoutes } from "./routes";
import { admin_nav_config } from "./components/config/adminpage_config";
import { homepage_nav_config } from "./views/config/homepage_config";
import "antd/dist/antd.css";

function LoginStatusManage() {
    const [login, setLogin] = useState(null);
    const [type, setType] = useState({}); 

    // setTimeout(()=>{
    //     setLogin(!login);
    // },5000);
    
    useEffect(() => {
        //检查登录态
        // verifyLogin();
        let loginStatus =false;
        //设置当前登录态
        setLogin(loginStatus);
    }, []);

    useEffect(() => {
        setType({
            config: login ? admin_nav_config : homepage_nav_config,
            routers: login ? adminRoutes : mainRoutes,
            login: login,
        });
    }, [login]);

    return <RouterFactory {...type} />;
}
function RouterFactory(props) {
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    render={(routeProps) => <App {...routeProps} {...props} />}
                />
                <Redirect to={mainRoutes[0].path} from="/" />
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<LoginStatusManage />, document.getElementById("root"));

// const mainRts = mainRoutes.map((route) => {
//     // return <Route key={route.path} path={route.path} component={route.component}/>  等同下面的写法
//     return <Route key={route.path} {...route} />;
// });

// ReactDOM.render(
//     <Router>
//         <Switch>
//             {/*访问到/admin的时候，所有管理后台页面都走app组件，把路由属性传递过去，通过app组件渲染页面 */}
//             <Route
//                 path='/admin'
//                 render={(routeProps) => <App {...routeProps} />}
//             />
//             {
//                 /* 无需登录 */
//                 mainRts
//             }
//             <Redirect to={mainRoutes[0].path} from='/' />
//             <Redirect to='/404' />
//         </Switch>
//     </Router>,
//     document.getElementById("root")
// );
reportWebVitals();
