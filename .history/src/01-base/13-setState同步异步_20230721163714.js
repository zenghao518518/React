import React, { Component } from 'react'

export default class App
 extends Component {
    state ={
        count:1
    }
  render() {
    return (
      <div>
          {this.state.count}
           <button onClick={this.handleAdd1}>add1</button>
           <button onClick={this.handleAdd2}>add2</button>
      </div>
    )
  }
  handleAdd1 =()=>{
    //需要异步更新
     this.setState({
        count:this.state.count+1
     })

     this.setState({
        count:this.state.count+1
     })

     this.setState({
        count:this.state.count+1
     })
     console.log(this.state.count)
  }
  //如果setTimeout间隔时间为0，则和上面效果相同
  handleAdd2 =()=>{
    setTimeout(() => {
        //需要异步更新
     this.setState({
        count:this.state.count+1
     })

    
     console.log(this.state.count)
    }, 0);
    setTimeout(() => {
        //需要异步更新
     this.setState({
        count:this.state.count+1
     })

    
     console.log(this.state.count)
    }, 0.01);
  }
}
