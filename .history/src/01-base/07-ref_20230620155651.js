import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  myref = React.createRef()
  render() {
    return (
      <div>
         {/* <input ref="mytext"></input> */}
         <input ref={this.myref}></input>
         <button onClick={()=>{
            // console.log("click1",this.refs.mytext.value) //ref可以拿到真实的DOM节点
            console.log("click1",this.myref.value)
         }}>add1</button>
       
      </div>
    )
  }

  

 
  //React并不会真正的绑定事件到每一个具体《》的元素上，而是采用事件代理的模式:
}
