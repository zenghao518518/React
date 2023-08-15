import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red", width: "200px" }}>
        <button
          onClick={() => {
          
            console.log("子通知父， 让父的isSHow 取反。", this.props.event);
            this.props.event(); //调用父组件传来啊的回调函数
          }}
        >
          click
        </button>
        <span>navbar</span>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: "yellow" }}>
        <ul>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isshow: false,
  };

  handleEvent=()=>{
    console.log("父组件定义的event事件");
  }
  render() {
    return (
      <div>
        {/* 谁能让父组件函数执行 */}
        <Navbar
          event={this.handleEvent}
        />

        {/* 在父组件中的能使用，但是移到子组件中不能 */}
        {/* <button
          onClick={() => {
            this.setState({
              isshow: !this.state.isshow,
            });
          }}
        >
          click
        </button> */}

        {this.state.isshow && <Sidebar />}
      </div>
    );
  }
}
