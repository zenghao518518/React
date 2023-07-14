import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  myref = React.createRef();
  render() {
    return <div>
         <input ref={this.myref}></input>
         <button onClick={this.handleClick2}>add2</button>
    </div>;
  }
  handleClick2(){
    console.log("click2",this) //这里的this为代理对象undefined
  }
}
