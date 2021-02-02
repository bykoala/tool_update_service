import { Card, Descriptions, Divider, version } from "antd";
import { getRequest } from "../utils/request";
import React from 'react';
class ShowUpdateComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentShouldUpdate(){
    console.log("showupdate===========",this.props)
  }
  render() {
    return (
      <Descriptions title="更新列表" column="2">
        <Descriptions.Item label="版本号">{this.props.version}</Descriptions.Item>
        <Descriptions.Item label="文件大小">{this.props.fileSize}</Descriptions.Item>
        <Descriptions.Item label="更新日期">{this.props.creatTime}</Descriptions.Item>
        <Descriptions.Item label="MD5值">{this.props.md5}
        </Descriptions.Item>
        <Descriptions.Item label="下载">{this.props.fileUrl}</Descriptions.Item>
        <Descriptions.Item label="更新内容">{this.props.content}</Descriptions.Item>
      </Descriptions>
    )
  }
}

class Updatelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      comps: [],
      data:{}
     }
    //  this.printData=this.printData.bind(this)
  }
  componentWillMount() {
    getRequest("http://localhost:8088/getUpdateHistory", this.receiveData)
  }
  receiveData=(data)=> {
    // this.state.data=data
    this.setState({
      data: data
    });

    const loopGetData = this.state.data.data;
    const test = () => {
      let compsbox = [];
      // for(let i=0;i<Object.keys(testMap).length;i++){ }
      for (let v in loopGetData) {
        <ShowUpdateComponent 
        version={loopGetData[v].Version} fileSize="tes文件大小t" 
        creatTime="tes更新日期tt" md5="tesMD5值t" 
        fileUrl="te下载tt" content="t更新内容tt">
        </ShowUpdateComponent>
        // 譬如：我现在取到version的数据：testMap[v].Version
        compsbox = compsbox.concat([Date.now()])
      }
      this.setState({
        comps: compsbox
      });
    }
    test()
  }
 
  render() {
   
    const MainComponent = () => <div>
      <ShowUpdateComponent/>
      <Divider></Divider>
    </div>
    const { comps } = this.state;
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
        {/* <button onClick={test}>加组件</button> */}
      </Card>
    )
  }

 
}
export default Updatelist
