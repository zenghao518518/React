import React, { Component } from 'react'

export default class Navbar extends Component {
  state = {
        //只能内部自己用的，外面无法改变
        }
        

  render() {
    console.log(this.props)
    let {title,leftshow}= this.props

    return (
      
      <div>       
        {leftshow && <button>返回</button>}
        Navbar-{title}
        <button>Home</button>
      </div>
    )
  }
}
