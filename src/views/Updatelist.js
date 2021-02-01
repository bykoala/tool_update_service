import React, {useState, useEffect } from 'react';
import { Card,Descriptions, Divider  } from "antd";

class Updatelist extends React.Component{
  constructor(props) {
    super(props);
    this.state = {comps : []}
}
  render(){
    let desc = (
      <Descriptions title="更新列表" column="2">
      <Descriptions.Item label="版本号">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="文件大小">1810000000</Descriptions.Item>
      <Descriptions.Item label="更新日期">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="MD5值">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
      <Descriptions.Item label="下载">empty</Descriptions.Item>
      <Descriptions.Item label="更新内容">empty</Descriptions.Item>
    </Descriptions>
    );
    const MainComponent = () => <div>
      {desc}
      <Divider></Divider>
    </div> 
    const {comps } = this.state;
    const testMap = {type:"Fiat", model:500, color:"white"};
    const test = ()=>{
      for(let i=0;i<Object.keys(testMap).length;i++){
        console.log("aaaaaaaaaaaaa")
        this.setState({comps: comps.concat([Date.now()])})
      }
    }
        return (
          <Card
          style={{
            padding: "10px",
            width: 1000,
          }}
        >
           {comps.map(comp => {
                    return <MainComponent key={comp} />
                })}
            <button onClick={test}>加组件</button>
         
        </Card> 
  )
  }
}
export default Updatelist
