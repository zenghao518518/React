import React, { Component } from 'react'

export default class App extends Component {
  state ={
      username:"zenghao"
  }
  
  render() {
    return (
      <div>
          <h1>登录页</h1>
          <input type="text" value={this.state.username} 
           onChange={(evt)=>{
            console.log("onChange",evt.target.value)
            this.setState({
              username:evt.target.value
            })
           }} 
           onInput={(evt)=>{
            console.log("onInput",evt.target.value)
            this.setState({
              username:evt.target.value
            })
           }}></input>
          <button onClick={()=>{
            console.log(evt.target.value)
          }}>登录</button>
          <button onClick={()=>{
             this.setState({
              username:""
            })
          }}>重置</button>
      </div>
    )
  }
}
