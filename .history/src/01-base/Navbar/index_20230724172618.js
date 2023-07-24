import React, { Component } from 'react'

export default class Navbar extends Component {
  state = {
        //只能内部自己用的，外面无法改变
        }
        

  render() {
    console.log(this.props)
    let {title}= this.props

    return (
      <div>Navbar-{title}

      </div>
    )
  }
}
