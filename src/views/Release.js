import React, {useState, useEffect } from 'react';
import { Form, Input, Upload, message, Button, Radio, Card, } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { postRequest } from "../utils/request";


function Release() {
    const [version, setVersion] = useState(null);
    const [md5, setMd5] = useState(null);
    const [fileSize, setFileSize] = useState(0);
    const [fileUrl, setFileUrl] = useState(null);
    const [hid, setHid] = useState(true)
    // useEffect(() => {  请求数据 }, [ ])    这种会在组件第一次加载的时候触发，以后不会
    // 当我们第二个参数传一个空数组[]时，相当于只在首次渲染的时候执行。

    //调用就接口，获取后台已存在的最新版本
    const getRelease = (url) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.code == 10000) {
                    setVersion(json.version)
                } else if (json.code == 10001) {
                    console.log("请求失败")
                }
            })
            .catch(err => {
                console.log('异常！！！', err);
            })
    }

    // const data = { md5: 'admin', size: 12 }
    // const data = { md5 :{fileUrl},version:  {fileUrl},filesize: parseFloat({fileUrl}),forced:parseInt({fileUrl}),
    // content:{fileUrl},url : {fileUrl}}
    // const data = JSON.stringify({
    //     "version":"version12",
    //     "content":"content",
    //     "forced":0,
    //     "size":{fileSize},
    //     "md5":parseFloat({md5}),
    //     "url":{fileUrl}
    // })

    const data = JSON.stringify({
        "version":"version12",
        "content":"content",
        "forced":0,
        "size":parseFloat("1.35"),
        "md5":"1234567899875451",
        "url":"http://ffffff",
        "classification":0
    })
    // const data = JSON.stringify({
    //     "version": version,
    //     "content": "content",
    //     "forced": 0,
    //     "size": parseFloat(fileSize),
    //     "md5": md5,
    //     "url": fileUrl
    // })

    let versionElement =  React.useRef();
    const update = (data) => {
        console.log("===============",versionElement.current.value)
        console.log("=======vvvv", data)
        postRequest("http://localhost:8088/update", data)
    }
    //    const update=(data) =>  {
    //         var md5 ={fileUrl};
    //         var version =  {fileUrl};
    //         var filesize = parseFloat({fileUrl});
    //         console.log(filesize)
    //         var forced = parseInt({fileUrl});
    //         var content = {fileUrl}.val();
    //         var url = {fileUrl}.text();
    //         $.ajax({
    //             url: "update",
    //             type: "post",
    //             dataType: "json",
    //             contentType: "application/json; charset=utf8",
    //             // async:false,//注意添加async：false 同步参数
    //             data:JSON.stringify({
    //                 "version":version,
    //                 "content":content,
    //                 "forced":forced,
    //                 "size":filesize,
    //                 "md5":md5,
    //                 "url":url
    //             }),
    //             success: function (responseText) {
    //                 if (responseText.code==10000){

    //                 }
    //             },
    //             error: function () {
    //                 console.log(responseText)
    //                 alert("发布失败了！");
    //             }
    //         });
    //      };






    // const update = (url) => {
    //     console.log("===========kaishile==================")
    //     let formData = new FormData();
    //     formData.append("name", "admin");
    //     formData.append("password", "admin123");
    //     let fetchOptions = {
    //         method:'POST',
    //         headers:{
    //             'Accept': 'application/json',
    //             //json形式
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     };
    //     fetch(url, fetchOptions)
    //     .then((response) => {
    //         return response.json()
    //     }).then((data)=>{
    //         console.log(data)
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // }
    const props = {
        name: "file",
        action: "http://localhost:8088/upload",
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
    const [value, setValue] = React.useState(0);
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    //请求当前系统上存在的最新版本号
    useEffect(() => { getRelease("http://localhost:8088/release") }, [])
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
    const handleSubmit = e => {
        console.log("onClick event")
        e.preventDefault();
    }
    return (
        <Card
            style={{
                padding: "10px",
                width: 1000,
            }}
        >
            <>
                <Form validateMessages={validateMessages} onSubmit={e => handleSubmit(e)}>
                    <Form.Item label='已有版本:'>
                        <Input disabled value={version}></Input>
                    </Form.Item>
                    <Form.Item name={['版本号', 'version']} label='当前版本:' rules={[{ required: true }]}   >
                        {/* <Input ref={(nowVersion)=>{
                            versionElement = nowVersion;
                        } */}
                         <Input ref={node => versionElement = node}/>
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
                    <Form.Item label='强制更新'>
                        <Radio.Group onChange={onChange} value={value} id='forced'>
                            <Radio value={0}>否</Radio>
                            <Radio value={1}>是</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label='更新内容' name={'更新内容'} rules={[{ required: true }]}>
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>

                        <Button type='primary' htmlType='submit' onClick={update}>
                            发布
                        </Button>




                        <Button htmlType='button' >
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </>
        </Card>
    );
}

export default Release;
