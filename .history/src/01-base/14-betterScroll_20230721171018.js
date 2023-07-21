import React, { Component } from "react";

export default class App extends Component {
    state={
        list:[]
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.getData()}>click</button>
        <div className="wrapper">
          <ul className="content">
            {
                this.state.list.map(item=><li key={item}>{item}</li>)
            }

          </ul>
        </div>
      </div>
    );
  }

  getData(){
    var list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    this.setState({
        list:list
    })
  }
}
