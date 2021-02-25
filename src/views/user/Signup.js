import React from 'react'
import { Form, Input, Card, Radio, Tooltip, Select, Button, Row, Col, Checkbox, InputNumber } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { postRequestJson } from "../../utils/request";
import "../../static/css/user.css"

function Signup() {

    const { Option } = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 50 }}>
                <Option value=""></Option>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    let data = null
    const onFinish = (values: any) => {
        //通过ref取标签的值
        // data = JSON.stringify({
        //     "version": versionElement.current.props.value,
        //     "content": contentElement.current.resizableTextArea.props.value,
        // })
        data = JSON.stringify({
            "username": values.nickname,
            "password": values.password,
            "re_password": values.confirm,
            "email": values.email,
            "tel": (typeof(values.prefix) != "undefined"?values.prefix:"") + values.phone,
            "age": values.age,
            "gender": values.gender
        })
        postRequestJson("/signup", data)

    };
    //单选默认值
    const [value, setValue] = React.useState(null);
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    //表单验证
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    
    
    //注册页面
    const [signUser, setSignUser] = React.useState("");
    //注册页标签是否选中
    const [clickNextBtnNum, setClickNextBtnNum] = React.useState(0);
    const nextButton = (e) => {
        console.log(e.target.value);
        setSignUser(userNameElement.current.props.value);
        setClickNextBtnNum(clickNextBtnNum+1)
    };

    const previousButton = (e) => {
        console.log(e.target.value);
        setClickNextBtnNum(clickNextBtnNum-1)
    };

    let userNameElement = React.useRef();
    
    
    return (
        <Card style={{ width: 1000, align: "center", }}>
    
            <div id="main">
                <p className="top_title" style={{color: "#79ac21",fontSize:"20px"}}>做一个有身份的访客</p>
                        <Form validateMessages={validateMessages} onFinish={onFinish} onReset={onReset}>
                        <div id="wizard">
                            <ul id="status">
                            <li className={clickNextBtnNum==0?"active":""}><strong>1.</strong>创建账户</li>
                            <li className={clickNextBtnNum==1?"active":""} ><strong>2.</strong>填写联系信息</li>
                            <li className={clickNextBtnNum==2?"active":""}><strong>3.</strong>完成</li>
                        </ul>

                            <div className="items">
                                <div className="page" hidden={clickNextBtnNum==0?false:true}>
                                <h3>创建一个账户<br /><em>请填写您的注册账户信息，用于登录。</em></h3>
                                <Form.Item
                                    name="nickname"
                                    label={
                                        <span>
                                            用户名&nbsp;
                                            <Tooltip title="What do you want others to call you?">
                                                <QuestionCircleOutlined />
                                            </Tooltip>
                                        </span>
                                    }
                                    rules={[{
                                        required: true,
                                        message: 'Please input your nickname!',
                                        whitespace: true,
                                        min: 6
                                    }]}
                                >
                                    <Input maxLength={30} allowClear={true} ref={userNameElement}/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                            min: 8
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    label="确认密码"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('The two passwords that you entered do not match!');
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <div className="btn_nav">
                                    <input type="button" className="next right" value="下一步&raquo;" onClick={nextButton}/>
                                </div>
                            </div>
                                
                                <div className="page" hidden={clickNextBtnNum==1?false:true}>
                                <h3>填写联系信息<br /><em>请告诉我们您的联系方式。</em></h3>
                                <Form.Item
                                    name="email"
                                    label="邮&nbsp;&nbsp;&nbsp;&nbsp;箱"

                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input allowClear={true} />
                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    label="手机号"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input addonBefore={prefixSelector} maxLength={11} style={{ width: '100%' }} />
                                </Form.Item>
 
                                <Form.Item label="age" name={'age'} rules={[{ required: true }]}>
                                    <Form.Item name="age" noStyle >
                                        <InputNumber min={7} max={128} />
                                    </Form.Item>
                                    <span className="ant-form-text"></span>
                                </Form.Item>

                                <Form.Item label='gender' name='gender' rules={[{ required: true }]}>
                                    <Radio.Group onChange={onChange} name={'forced'} value={value} id='forced'>
                                        <Radio value={0}>女</Radio>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>未知</Radio>
                                    </Radio.Group>
                                </Form.Item>

                                <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="captcha"
                                                noStyle
                                                rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Button>Get captcha</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>

                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                        },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                        I have read the <a href="javascript:;">agreement</a>
                                    </Checkbox>
                                </Form.Item> 

                                <div className="btn_nav">
                                    <input type="button" className="prev" style={{float:"left"}} value="&laquo;上一步" onClick={previousButton}/>
                                    <input type="button" className="next right" value="下一步&raquo;" onClick={nextButton}/>
                                </div>
                            </div>
                                
                                <div className="page" hidden={clickNextBtnNum==2?false:true}>
                                <h3>完成注册<br /><em>点击确定完成注册。</em></h3>
                                {console.log("ref:",userNameElement.current)}
                                <h4>{signUser},欢迎您！</h4>
                                <p>请点击“确定”按钮完成注册。</p>
                                <br />
                                <br />
                                <br />
                                <div className="btn_nav">
                                    <input type="button" className="prev" style={{float:"left"}} value="&laquo;上一步" onClick={previousButton}/>
                                    {/* <input type="button" className="next right" id="sub" value="确定" /> */}
                                    <Form.Item {...tailLayout}>
                                        <Button type='primary' htmlType='submit'>
                                            确定
                                        </Button>
                                       
                                    </Form.Item>
                                </div>
                            </div>
                            
                            </div>
                            </div>
                   
                        </Form>
                
            </div>       
        </Card >
    )
}

export default Signup