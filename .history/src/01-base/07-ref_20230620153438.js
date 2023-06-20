import React, { Component } from 'react'

export default class App extends Component {
  a = 100

  render() {
    return (
      <div>
         <input ref="mytext"></input>
         <button onClick={()=>{
            console.log("click1",this.refs.mytext) //这里的this与render外保持一致，由于使用的是=>,保持和外部作用域一致
         }}>add1</button>
       
      </div>
    )
  }

  

 
  //React并不会真正的绑定事件到每一个具体《》的元素上，而是采用事件代理的模式:
}
