import React, { Component } from 'react'

export default class App extends Component {
  a = 100

  render() {
    return (
      <div>
         <input></input>
         <button onClick={()=>{
            console.log("click1",this.a) //这里的this与render外保持一致，由于使用的是=>,保持和外部作用域一致
         }}>add1</button>
         <button onClick={this.handleClick2.bind(this)}>add2</button>
         <button onClick={this.handleClick3}>add3</button>
         
         <button onClick={()=>{
            this.handleClick4() //由于使用的是=>,保持和外部作用域一致
            }}>add4</button> 

      </div>
    )
  }

  handleClick2(){
    console.log("click2",this)
  } 

  handleClick3=()=>{
    console.log("click3",this)//由于使用的是=>,保持和外部作用域一致
  } 

  handleClick4=()=>{
    console.log("click4",this)
  } 
}
