import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Frame from "./components/Frame/Index";
import NavLineComponent from "./components/Nav/NavLineComponent";
import NoMatch from "./views/PageNotFound"

import PubSub from 'pubsub-js';



function App(props) {
    const { config, routers } = props;

    //导航栏状态控制
    const [statusControl, setStatusControl] = useState(true);

    useEffect(
        () => {
        //检查登录态
        // verifyLogin();
     
            //导航栏状态控制订阅
            PubSub.subscribe("navControl", function(key,data){
                setStatusControl(data==1?false:true)
        
            });
        }, []
    );
    
    if (config && routers) {
        
        return (
            
            <Frame>
                
                {statusControl? <NavLineComponent navConfig={config} />:""}
                <Switch>
                    {routers.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                render={(routeProps) => {
                                        return <route.component {...routeProps} />;
                                    }
                                }
                            />
                        );
                    })}
                   
                    {/* <Redirect to="/404" /> */} 
                    {/* 通过<a标签的href属性跳转至需要登录权限路由，每次都重定位至404，具体原因未明 */}
                    
                    <Route component={NoMatch}/>
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
