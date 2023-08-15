import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "yellow",width:"200px" }}>
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

class Sidebar extends Component {
    render() {
      return (
        <div style={{ background: "red" }}>
          <button>click</button>
          <span>navbar</span>
        </div>
      );
    }
  }

export default class App extends Component {
  render() {
    return <div>
        <Navbar/>
        <Sidebar/>
    </div>;
  }
}
