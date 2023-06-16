import React, { Component } from 'react'

export default class App extends Component {
  render() {
    var myname="zenghao"
    var obj={
      background:"Yellow",
      fontSize:"30px"

    }
    return (
      
      <div>
        {10+1}--{myname}
        {10>20?'aaa':'bbb'}
        <div style={obj}>1111111</div>
        <div style={{background:"Red"}}>2222222222222</div>
      </div>
      
    )
  }
}
