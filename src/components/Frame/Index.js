import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import logo from '../../assert/img/logo.png'
const { Header, Content, Footer } = Layout;

function index(props) {
    return (
    <Layout className="layout">
    <Header style={{
          backgroundColor:'white',
        //   padding: '0px 100px'
      }}>
      <div className="logo"  display='inline-block'>
        <img src={logo}></img>
        <span style={{
          margin:"20px",
          "font-size":"20px",
          "font-weight":"600"
        }}>魔百和自动化后管平台</span>
      </div>
      <div>
      
      </div>
     
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item></Breadcrumb.Item>
        <Breadcrumb.Item></Breadcrumb.Item>
        <Breadcrumb.Item></Breadcrumb.Item> */}
      </Breadcrumb>
      <div className="site-layout-content">{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>移动终端 Design ©2021 Created by 魔百和 自动化团队</Footer>
  </Layout>
    )
}

export default index
