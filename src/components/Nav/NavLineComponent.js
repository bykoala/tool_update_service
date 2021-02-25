import React from 'react'
import { Menu } from 'antd';
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;

function NavLineComponent(props) {
    const itemClickHandle = (e) => {
       
        let path = "/";
        try {
            path = e.item.props.datapath || "/";
         
        } catch (error) {
            path = "/404";
            console.log("fetch path fail~~~");
        }
        props.history.replace(path);
    }
    const createItmes = (config) => {
        return config.map(item => {
            if (item.items) {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {
                            item.items.map((subitem, idx) => {
                                return (
                                    <Menu.ItemGroup key={idx} title={item.group[idx].title} >
                                        {
                                            createItmes(subitem)
                                        }
                                    </Menu.ItemGroup>
                                );
                            })
                        }
                    </SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.key} icon={item.icon} datapath={item.path} disabled={item.disabled} onClick={itemClickHandle}>
                        {item.label}
                    </Menu.Item>
                );
            }
        })
    }
    return (
        <Menu mode="horizontal">
            {
                createItmes(props.navConfig)
            }
        </Menu>
    );
}
export default withRouter(NavLineComponent);