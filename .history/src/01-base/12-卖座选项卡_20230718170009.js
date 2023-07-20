import React, { Component } from 'react'

export default class App extends Component {
  state ={
      list:[
        {
            id:1,
            test:"电影"
        },
        {
            id:2,
            test:"影院"
        },
        {
            id:3,
            test:"电影"
        }
      ]

  }
  render() {
    return (
      <div>App

      </div>
    )
  }
}
