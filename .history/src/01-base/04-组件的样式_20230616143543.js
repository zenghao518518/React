import React, { Component } from 'react'

export default class App extends Component {
  render() {
    var myname="zenghao"
    var obj= {
         background:"yellow"
    }
    return (     
      <div>
        {10+10}-{myname}
        {10>20?'aaa':'bbb'}
        <div style={obj}>1111111</div>
        <div style={{background:"Red"}}>22222</div>
      </div>
      
    )
  }
}
