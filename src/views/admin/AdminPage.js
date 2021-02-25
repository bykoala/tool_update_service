import React from "react";
import adminbg from "../../assert/img/bp.png";

import { Card, Avatar } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function AdminPage() {
    return (
        (
            <Card
                style={{
                    width: 300,
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
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        ),
        (
            <Card>
                <img src={adminbg} alt="test" style={{ width: 1900 }}></img>
            </Card>
        )
    );
}

export default AdminPage;
