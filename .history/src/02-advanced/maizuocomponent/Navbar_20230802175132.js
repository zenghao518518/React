import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div  style={{ background: "yellow" , width: "200px" }}>
        <button>back</button>
        <span>卖座电影</span>
        <button>center</button>
      </div>
    )
  }
}
