import React, {useState, useEffect } from 'react';
import { Form, Input, Upload, message, Button, Radio, Card, } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getRequest,postRequest } from "../utils/request";

function Release() {
    const [version, setVersion] = useState(null);
    const [md5, setMd5] = useState(null);
    const [fileSize, setFileSize] = useState(0);
    const [fileUrl, setFileUrl] = useState(null);
    const [hid, setHid] = useState(true)
    // useEffect(() => {  请求数据 }, [ ])    这种会在组件第一次加载的时候触发，以后不会
    // 当我们第二个参数传一个空数组[]时，相当于只在首次渲染的时候执行。
    //调用就接口，获取后台已存在的最新版本
    // const getRelease = (url) => {
    //     return fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             if (json.code == 10000) {
    //                 setVersion(json.version)
    //             } else if (json.code == 10001) {
    //                 console.log("请求失败")
    //             }
    //         })
    //         .catch(err => {
    //             console.log('异常！！！', err);
    //         })
    // }
  //请求当前系统上存在的最新版本号
    // useEffect(() => { getRelease("http://111.229.251.110:8088/release") }, [])
    // useEffect(() => { getRequest("/release",getLatestVersion)}, [])
    useEffect(
        () => {
            function getLatestVersion(ret){
                setVersion(ret.version)
            }
             getRequest("/release",getLatestVersion)
            }, [])

    let versionElement =  React.useRef();
    let contentElement =  React.useRef();
    let data = null
    const onFinish = (values: any) => {
        //通过ref取标签的值
        // data = JSON.stringify({
        //     "version": versionElement.current.props.value,
        //     "content": contentElement.current.resizableTextArea.props.value,
        // })

          data = JSON.stringify({
            "version": values.version,
            "content": values.content,
            "forced": values.forcUpdate,
            "size": parseFloat(fileSize),
            "md5": md5,
            "url": fileUrl,
            "classification":1   //图片归类：1:发布上传源文件；0:头像之类的图片文件
        })
        postRequest("/update", data)

      };

    const props = {
        name: "file",
        action: "http://192.168.40.138:8088/upload",
        headers: {
            authorization: "authorization-text",
        },
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                setMd5(info.file.response.md5)
                let size = (Math.round(info.file.response.size / 1024 / 1024 * 100) / 100)
                setFileSize(size)
                setFileUrl(info.file.response.url)
                message.success(`${info.file.name} file uploaded successfully`);
                setHid(false)
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const { TextArea } = Input;
    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
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
    return (
        <Card style={{padding: "10px",width: 1000,}}>
            <>
                <Form validateMessages={validateMessages} onFinish={onFinish} onReset={onReset}>
                    <Form.Item label='已有版本:'>
                        <Input disabled value={version}></Input>
                    </Form.Item>
                    <Form.Item name={'version'} label='当前版本:' rules={[{ required: true }]}   >
                         <Input ref={versionElement}/>
                    </Form.Item>
                    <Form.Item label='上传文件' name={'file'} rules={[{ required: true }]} >
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>
                                Click to Upload
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label='文件信息' hidden={hid}>

                        <span >文件url:</span>
                        <label id='furl' >{fileUrl}</label><br />
                        <span>文件大小:</span>
                        <label id='fsize'>{fileSize}MB</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span >md5:</span>
                        <label id='fmd5'>{md5}</label>
                    </Form.Item>
                    <Form.Item label='强制更新' name='forcUpdate'>
                        <Radio.Group onChange={onChange} name={'forced'} value={value} id='forced'>
                            <Radio value={0}>否</Radio>
                            <Radio value={1}>是</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label='更新内容' name={'content'} rules={[{ required: true }]}>
                        <TextArea rows={4} ref={contentElement}/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit'>
                            发布
                        </Button>
                        <Button htmlType='button'>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </>
        </Card>
    );
}

export default Release;
