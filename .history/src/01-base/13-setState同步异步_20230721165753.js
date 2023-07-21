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
           <button onClick={this.handleAdd3}>add3</button>
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
  //如果setTimeout间隔时间为0，则和上面效果相同，时间间隔最小为1，才会有异步效果
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
    }, 1);
  }
  handleAdd3 =()=>{
    //需要异步更新
     this.setState({
        count:this.state.count+1
     },()=>{console.log(this.state.count)})

     this.setState({
        count:this.state.count+1
     },()=>{console.log(this.state.count)})

     this.setState({
        count:this.state.count+1
     },()=>{console.log(this.state.count)})
     console.log(this.state.count)
  }
}
