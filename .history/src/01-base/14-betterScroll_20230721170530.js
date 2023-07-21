import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.getData()}>click</button>
        <div class="wrapper">
          <ul class="content">

          </ul>
        </div>
      </div>
    );
  }

  getData(){
    var list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  }
}
