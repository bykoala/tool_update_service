import React from 'react'
import { Menu } from 'antd';
import { LinkOutlined, PieChartOutlined, DesktopOutlined, MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import * as routes from '../../routes';
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;
// const routes = mainRoutes.filter(route =>route.isShow);

function NavLine() {
  return (
    <Menu mode="horizontal">
{/*     
    style={{
      // padding: '0px 100px'
      // margin:'0 auto'
    }}>
      {/* {routes.map(route=>{
          return(
            <Menu.Item
            key={route.path}
            onClick={p =>this.props.history.push(p.key)}
            ></Menu.Item>
          );
        })} */}
      {/* <Menu.Item key="auto"  icon={<DesktopOutlined />}>
        自动化测试平台
        </Menu.Item>
      <Menu.Item key="release" icon={<AppstoreOutlined />} onClick="">
        发布平台
        </Menu.Item>
      <Menu.Item key="download" icon={<LinkOutlined />}>
        工具下载
        </Menu.Item>
      <SubMenu key="other" icon={<PieChartOutlined />} title="其他">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1" icon={<MailOutlined />}>联系我</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 1</Menu.Item>
          <Menu.Item key="setting:4">Option 2</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <Menu.Item key="tongzhi">
        <a href="http://tongzhi.wang" target="_blank" rel="noopener noreferrer">
          历程
          </a>
      </Menu.Item>  */}
    </Menu>
  )
}
// export default withRouter(NavLine)
export default NavLine
