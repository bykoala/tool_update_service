import React from 'react'
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export function HeaderRight(props) {

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="http://www.alipay.com/">消息中心</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="http://www.taobao.com/">设置</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            <a href="/logout" className="cd-popup-trigger0" hidden={!props.islogin}>退出</a>
          </Menu.Item>
        </Menu>
      );
    return (
        <span className="right-user-part">
        <a href="/feedbackOrBug" className="cd-popup-trigger1">意见反馈</a><span className="textline">|</span>
        <a href="/signup" className="cd-popup-trigger1" hidden={props.islogin}>注册</a><span className="textline" hidden={props.islogin}>|</span>
        <a href="/login" className="cd-popup-trigger0" hidden={props.islogin}>登录</a><span className="textline" hidden={props.islogin}>|</span>

        <span hidden={!props.islogin}>
        <Dropdown overlay={menu} trigger={['click']} >
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            苏宝伢 <DownOutlined />
          </a>
        </Dropdown>
        <span className="textline">|</span>
        </span>
        
        <a title="" href="tencent://message/?uin=657501873&amp;Site=sc.chinaz.com&amp;Menu=yes"><strong>«</strong> QQ在线</a><span className="textline">|</span>
        <a title="微信号" disabled="none">微信号：gdsuby</a>
      </span>
    )
}

// export default HeaderRight
