import React, { Component } from 'react'

export default class App extends Component {
  state={
     text:"收藏"
  }
  render() {
    //var text="收藏"
    return (
      <div>
         <h1>欢迎来到react开发</h1>
         <button>{this.state.text}</button>
      </div>
    )
  }
}
