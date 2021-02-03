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
      monitorStatus: 0,
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
         <div>
         {this.props.version} | {this.props.createTime} | {this.props.fileSize}MB |{this.props.md5}
         </div>
         <div className="site-drawer-render-in-current-wrapper">
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
          版本特性
          </Button>
        </div>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={false}
          getContainer={false}
          getContainer={Selectors}
          style={{ position: 'absolute' }}
        >
          fff
        </Drawer>
      </div>
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
    getRequest("http://localhost:8088/getUpdateHistory", this.receiveData)
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
          createTime={loopGetData.data[k].CreateTime}
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
        {/* {comps.map(comp => {
          return <MainComponent key={comp} />
        })} */}
        <MainComponent key={comps} />
      </Card>
    )
  }


}
export default Updatelist