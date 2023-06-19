import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
         <input></input>
         <button onClick={()=>{
            console.log("click")
         }}>add</button>
      </div>
    )
  }
}
