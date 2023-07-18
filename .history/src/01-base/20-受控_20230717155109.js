import React, { Component } from 'react'

export default class App extends Component {
  state ={
      username:"zenghao"
  }
  
  render() {
    return (
      <div>
          <h1>登录页</h1>
          <input type="text"></input>
          <button onClick={()=>{
           
          }}>登录</button>
          <button onClick={()=>{
        
          }}>重置</button>
      </div>
    )
  }
}
