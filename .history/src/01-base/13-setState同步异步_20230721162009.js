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
  }

  handleAdd2 =()=>{
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
  }
}
