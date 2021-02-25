
import { React, useEffect, useState } from "react";
import { Layout, Breadcrumb } from 'antd';
import "../../static/css/user.css"
import { isLogin } from '../../utils/auth';
import { HeaderRight } from '../headers/HeaderRight';
import { HeaderLeft } from '../headers/HeaderLeft';
import {HeaderAboutFeedBack} from '../headers/HeaderAboutFeedBack'
import PubSub from 'pubsub-js';

const { Header, Content, Footer } = Layout;

function Index(props) {

  //导航栏状态控制
  const [statusControl, setStatusControl] = useState(true);

  //登录状态
  const [loginSatus, setLogin] = useState(false);


  useEffect(
    () => {
    //检查登录态
    // verifyLogin();

    //设置当前登录态
    setLogin(isLogin());
     //导航栏状态控制订阅
     PubSub.subscribe("navControl", function(key,data){
      setStatusControl(data==1?false:true)

  });


    }, []
  );

  return (
    <Layout className="layout">
      <Header style={{
        backgroundColor: 'white',
        display: "inline-block"
        //   padding: '0px 100px'
      }} >
        <div className="logo" display='inline-block'>

          {/* 头部右侧组件 */}
          {statusControl? <HeaderLeft  />:  <HeaderAboutFeedBack />}
  

          {/* 头部右侧组件 */}
          <HeaderRight islogin={loginSatus} />

          {/* <span className="right-user-part">
            <a href="/feedbackOrBug" className="cd-popup-trigger1">意见反馈</a><span className="textline">|</span>
            <a href="/signup" className="cd-popup-trigger1" hidden={loginSatus}>注册</a><span className="textline" hidden={loginSatus}>|</span>
            <a href="/login" className="cd-popup-trigger0" hidden={loginSatus}>登录</a><span className="textline" hidden={loginSatus}>|</span>

            <span hidden={!loginSatus}>
            <Dropdown overlay={menu} trigger={['click']} >
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                苏宝伢 <DownOutlined />
              </a>
            </Dropdown>
            <span className="textline">|</span>
            </span>
            

            

            <a title="" href="tencent://message/?uin=657501873&amp;Site=sc.chinaz.com&amp;Menu=yes"><strong>«</strong> QQ在线</a><span className="textline">|</span>
            <a title="微信号" disabled="none">微信号：gdsuby</a>
          </span> */}
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
      {/* <Footer style={{ textAlign: 'center' }}>移动终端 Design ©2021 Created by 魔百和 自动化团队</Footer> */}
      <Footer style={{ textAlign: 'center' }}>Powered by 苏宝伢</Footer>

    </Layout>
  )
}

export default Index
