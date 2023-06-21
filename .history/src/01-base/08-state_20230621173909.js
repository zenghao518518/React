import React, { Component } from 'react'

export default class App extends Component {
  state={
    mytext:"收藏",
    myShow:true
  }
  render() {
    //var text="收藏"
    return (
      <div>
         <h1>欢迎来到react开发</h1>
         <button onClick={()=>{
            this.setState({
                //mytext:"取消收藏"
                myShow:!this.state.myShow
            })
            }}>{this.state.myShow?"收藏":"取消收藏"}</button>
      </div>
    )
  }
}
