import React, { Component } from 'react'

export default class App extends Component {

  render() {
    var text="收藏"
    return (
      <div>
         <h1>欢迎来到react开发</h1>
         <button>{text}</button>
      </div>
    )
  }
}
