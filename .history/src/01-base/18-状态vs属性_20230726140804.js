import React, { Component } from 'react'

class Child extends Component {
    render() {
      return (
        <div>
            Child-{this.props.text}

        </div>
      )
    }
  }

export default class App extends Component {
  state ={
    test:"1111111111"
  }

  render() {
    return (
      <div>
        <Child text={this.state.test}/>
      </div>
    )
  }
}
