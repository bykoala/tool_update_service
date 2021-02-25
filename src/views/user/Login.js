import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { postRequestJson } from "../../utils/request";
import {setToken} from "../../utils/auth"
import "../../static/css/user.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };

        let data = null
        const onFinish = (values: any) => {
            console.log('Success:', values);
           
            data = JSON.stringify({
                "username": values.username,
                "password": values.password,
              
            })
            postRequestJson("/login", data,isLogin)

        };
        const isLogin = function (ret) {
            // ret = JSON.parse(ret);
            // console.log("callback:",typeof(ret))
            setToken(ret)
        }

        return (
            <Card style={{ width: 1000, align: "center", }}>
                <div id="main">
                    <p className="top_title" style={{ color: "#79ac21", fontSize: "20px" }}>验证您的身份之登录</p>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >

                        <div id="wizard">
                            <ul id="status">
                                <li className="active">登录账户</li>
                            </ul>

                            <div className="items">
                                <div className="page" >
                                    <h3>验证您的身份<br /><em>请填写您的账户信息，点击"登录"按钮。</em></h3>
                                    <Form.Item
                                        label="用户名"
                                        name="username"
                                        rules={[{ required: true, message: '请输入用户名!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="密码"
                                        name="password"
                                        rules={[{ required: true, message: '请输入密码!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                        <Checkbox>记住我</Checkbox>
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                    </Form.Item>
                                    <em>还是白户？<a href="/signup">立即注册</a></em>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </Card>



        )
    }

}


export default Login
