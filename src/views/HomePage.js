import React from 'react'
import Frame from "./Frame/Index"
import homebg from "../assert/img/bp.png";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

/**
 * 
 * 
 */
// import {HOME_NAV_CONFIG} from './config/adminpage_config';
// import NavLineComponent from './Nav/NavLineComponent';

const { Meta } = Card;

function HomePage() {
  return (
    <Card
      style={{
        width: 300
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>,
    <Frame>
      {/* <NavLine></NavLine> */}
      {
        /**
         * 试试这种导航配置
         */
        // <NavLineComponent navConfig={HOME_NAV_CONFIG}/>
      }
      <Card>
        <img src={homebg} alt="test" style={{ width: 1900 }}></img>
      </Card>
    </Frame>
  )
}

export default HomePage
