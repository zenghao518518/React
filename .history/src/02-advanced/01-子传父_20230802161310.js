import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red", width: "200px" }}>
        <button>click</button>
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

  render() {
    return (
      <div>
        {/* <Navbar/> */}
        {/* 在父组件中的能使用，但是在子组件中不能 */}
        <button
          onClick={() => {
            this.setState({
              isshow: !this.state.isshow,
            });
          }}
        >
          click
        </button>
         
        {this.state.isshow && <Sidebar/>}
      </div>
    );
  }
}
