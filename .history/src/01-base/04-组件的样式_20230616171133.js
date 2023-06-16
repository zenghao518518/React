import React, { Component } from 'react'
import './css/01-index.css' //导入css模块，webpack的支持
export default class App extends Component {
  render() {
    var myname="zenghao"
    var obj={
      backgroundColor:"Yellow",
      fontSize:"30px"

    }
    return (
      
      <div>
        {10+1}--{myname}
        {10>20?'aaa':'bbb'}
        <div style={obj}>1111111</div>
        <div style={{background:"Red"}}>2222222222222</div>
        {
        //React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体
        }
        <div className='active'>2222222222222</div>
        <div id='myappp'>2222222222222</div>
        <label htmlFor="username">用户名:</label>
        <input type="text" id="username" />

      </div>
      
    )
  }
}
