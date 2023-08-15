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

        <button
          onClick={() => {
            this.setstate({
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
