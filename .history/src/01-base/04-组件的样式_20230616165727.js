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
        <div className='active'>2222222222222</div>
        <div id="myappp">2222222222222</div>
      </div>
      
    )
  }
}
