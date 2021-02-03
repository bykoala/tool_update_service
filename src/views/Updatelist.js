import { Card, Descriptions, Divider, version } from "antd";
import { getRequest } from "../utils/request";
import React from 'react';
import { ConsoleSqlOutlined } from "@ant-design/icons";
import download from "../assert/img/download.png";
import { Input } from 'antd';
import { Drawer, Button } from 'antd';

class ShowUpdateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { TextArea } = Input;
    return (
      <>
        <div style={{
          "font-size": "20px",
          "letter-spacing": 0,
          "margin-right": "0px",
          "margin-bottom": "0px",
          "margin-left": "0px",
          "position": "relative"
        }}>
          {this.props.version} | {this.props.createTime} | {this.props.fileSize}MB |md5:{this.props.md5}
        </div>
        <div className="site-drawer-render-in-current-wrapper">
          <div style={{ marginTop: 16 }}>
            <Button type="primary" onClick={this.showDrawer}>
              版本特性
          </Button>
          <Button type="primary" >
            <a href={this.props.fileUrl}>下载</a>
              
          </Button>
          </div>
          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            style={{ position: 'absolute' }}
          >
            {this.props.content}
        </Drawer>
        </div>
        {/* <div className="pop" style={{display:"block"}}>
          <h5 className="pop_title">ffffff</h5>
          <p className="popcontent_item">
            content......
          </p>
          <div className="icon_close"></div>
        </div> */}









        <Divider> </Divider>
      </>
    )
  }
}

class Updatelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comps: [],
      data: {}
    }
  }
  componentWillMount() {
    getRequest("http://111.229.251.110:8088/getUpdateHistory", this.receiveData)
  }
  receiveData = (data) => {
    this.setState({
      data: data
    });

    const loopGetData = data;
    let compsbox = [];
    for (let k in loopGetData.data) {

      // let createTime
      compsbox.push(
        <ShowUpdateComponent
          version={loopGetData.data[k].Version}
          fileSize={loopGetData.data[k].Size}
          createTime={loopGetData.data[k].CreateTiem}
          md5={loopGetData.data[k].Md5}
          fileUrl={loopGetData.data[k].Url}
          content={loopGetData.data[k].Content} />
      );
    }
    this.setState({
      comps: compsbox
    });
  }

  render() {

    const MainComponent = () => <div>
      {/* <ShowUpdateComponent /> */}
      {this.state.comps}

    </div>
    const { comps } = this.state;
    return (
      <Card
        style={{
          padding: "10px",
          width: 1000,
        }}
      >
        <MainComponent key={comps} />
      </Card>
    )
  }


}
export default Updatelist