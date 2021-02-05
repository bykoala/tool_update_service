import { Card } from "antd";
import { getRequest } from "../utils/request";
import React from 'react';
// import { ConsoleSqlOutlined } from "@ant-design/icons";
// import download from "../assert/img/download.png";
import { Input } from 'antd';
import { Drawer, Button } from 'antd';

class ShowUpdateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      hid: true,
      hidCount: 0,
    }
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  showMd5 = () => {
    this.setState({
      hidCount: this.state.hidCount + 1,
      hid: this.state.hidCount % 2 === 0 ? false : true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <div className="site-drawer-render-in-current-wrapper" disable="inline-block" style={{
          "position": "relative",
          "height": "200px",
          "padding": " 48px",
          "overflow": "hidden",
          "text-align": "center",
          "background": "#fafafa",
          "border": " 1px solid #ebedf0",
          "border-radius": "2px",
        }}>

          <div style={{
            "margin-top": "30px",
          }}>

            <span disable="inline-block" style={{
              "font-size": "20px",
              "letter-spacing": 0,
              // "margin-right": "0px",
              "margin-left": "-100px",
              "position": "relative",
              "font-family": "PingFangSC-Regular, Microsoft Yahei, Tahoma,sans-serif"
            }}>
              {this.props.version} | {this.props.createTime} | {this.props.fileSize}MB |
          <span onClick={this.showMd5}
                style={{
                  "font-weight": "bold"
                }}
              > md5
          </span>
              <Button type="primary" style={{ marginLeft: "10px" }} disable="inline-block">
                <a href={this.props.fileUrl}>下载</a>
              </Button>
              <Button type="primary" onClick={this.showDrawer} style={{ marginLeft: "10px" }} disable="inline-block">
                版本特性
          </Button>
              <h3 hidden={this.state.hid} style={{ marginRight: "190px",marginTop:"10px" ,"color":"#747d8c"}} >{this.props.md5}</h3>
            </span>
          </div>

          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            getContainer={false}
            style={{ position: 'absolute' }}
          >
            {this.props.content}
          </Drawer>
        </div>
        {/* <Divider> </Divider> */}
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
  // componentWillMount() {
  //   getRequest("/getUpdateHistory", this.receiveData)
  // }

  componentDidMount() {
    getRequest("/getUpdateHistory", this.receiveData)
  }
  receiveData = (data) => {
    this.setState({
      data: data
    });

    const loopGetData = data;

    let compsbox = [];
    for (let k in loopGetData.data) {
      //时间切割
      let createTime = loopGetData.data[k].CreateTime.slice(0, 10)
      compsbox.push(
        <ShowUpdateComponent
          version={loopGetData.data[k].Version}
          fileSize={loopGetData.data[k].Size}
          createTime={createTime}
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