import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
         <input></input>
         <button onClick={()=>{
            console.log("click1")
         }}>add</button>
      </div>
    )
  }

  handleClick(){
    console.log("click2")
  } 

}
