import React, { Component } from 'react'

export default class App extends Component {
  render() {
    var obj={
      background:"Yellow"
    }
    return (
      
      <div>
        {10+1}
        {10>20?'aaa':'bbb'}
        <div style={obj}>1111111</div>
        <div style={{background:"Red"}}>222</div>
      </div>
      
    )
  }
}
