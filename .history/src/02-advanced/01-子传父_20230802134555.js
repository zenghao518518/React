import React, { Component } from "react";

class Navbar extends Component {
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
    return <div>App</div>;
  }
}
