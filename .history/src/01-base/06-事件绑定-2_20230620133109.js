import React, { Component } from 'react'

export default class App extends Component {
  a = 100

  render() {
    return (
      <div>
         <input></input>
         <button onClick={()=>{
            console.log("click1",this.a)
         }}>add1</button>
         <button onClick={this.handleClick2}>add2</button>
         <button onClick={this.handleClick3}>add3</button>
         <button onClick={()=>{this.handleClick4()}}>add4</button>
      </div>
    )
  }

  handleClick2(){
    console.log("click2")
  } 

  handleClick3=()=>{
    console.log("click3")
  } 

  handleClick4=()=>{
    console.log("click4")
  } 
}
