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
           }} 
           onInput={()=>{

           }}></input>
          <button onClick={()=>{
           
          }}>登录</button>
          <button onClick={()=>{
        
          }}>重置</button>
      </div>
    )
  }
}
