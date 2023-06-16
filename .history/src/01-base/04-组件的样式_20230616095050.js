import React, { Component } from 'react'

export default class App extends Component {
  render() {
    var myname="zenghao"
    return (     
      <div>
        {10+10}-{myname}
        {10>20?'aaa':'bbb'}
        <div>1111111</div>
      </div>
      
    )
  }
}
