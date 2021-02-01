import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { adminRoutes, mainRoutes } from "./routes";
import Frame from "./components/Frame/Index";
// import NavLine from "./components/Nav/NavLine";
import NavLineComponent from "./components/Nav/NavLineComponent";
// import { admin_nav_config } from "./components/config/adminpage_config";

function App(props) {
    const { config, routers } = props;

    if (config && routers) {
        return (
            <Frame>
                <NavLineComponent navConfig={config} />
                <Switch>
                    {routers.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                render={(routeProps) => {
                                    return <route.component {...routeProps} />;
                                }}
                            />
                        );
                    })}
                    <Redirect to="/404" />
                </Switch>
            </Frame>
        );
    } else {
        return <div>loading...</div>;
    }
}
// function App() {
//     return (
//         <Frame>
//             {/* <NavLine><h1>我是app组件</h1></NavLine> */}
//             <NavLineComponent navConfig={ADMIN_NAV_CONFIG} />

//             <Switch>
//                 {adminRoutes.map((route) => {
//                     return (
//                         <Route
//                             key={route.path}
//                             path={route.path}
//                             exact={route.exact}
//                             render={(routeProps) => {
//                                 return <route.component {...routeProps} />;
//                             }}
//                         />
//                     );
//                 })}
//                 <Redirect to='/404' />
//             </Switch>
//         </Frame>
//     );
// }

export default App;
