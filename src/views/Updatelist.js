import React, {useState, useEffect } from 'react';
import { Card,Descriptions  } from "antd";

function Updatelist() {
  
  let desc = (
    //version,content,url,forced,size,md5,create_time
    <Descriptions title="更新列表" column="2">
    <Descriptions.Item label="版本号">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="文件大小">1810000000</Descriptions.Item>
    <Descriptions.Item label="更新日期">Hangzhou, Zhejiang</Descriptions.Item>
  
    <Descriptions.Item label="MD5值">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="下载">empty</Descriptions.Item>
    <Descriptions.Item label="更新内容">empty</Descriptions.Item>
  </Descriptions>);
  const [data, setData] = useState(null);
  //调用就接口，获取后台已存在的最新版本
  const getUpdateList = (url) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()
    )
      .then(json => {
        
        if (json.code == 10000) {
          console.log(json.data)
          //[{},{}]
          console.log(json.data[0])
          //{Version: "v1.0.0", Content: "xxxxxxxxxxx",  Status: 0}
          setData(json.data[0]['Version'])
        } else if (json.code == 10001) {
          console.log("请求失败")
        }
      })
      .catch(err => {
        console.log('异常！！！', err);
      })
  }

  //请求当前系统上存在的最新版本号
  useEffect(() => { getUpdateList("http://localhost:8088/getUpdateHistory") }, [])

  return (
    <Card
      style={{
        padding: "10px",
        width: 1000,
      }}
    >
      {data}
     {desc}
     
    </Card>
  )
}

export default Updatelist
