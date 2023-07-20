import React, { Component } from 'react'
import "./css/02-maizuo.css"
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
            test:"我的"
        }
      ],
      current:0
  }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.list.map((item,index)=>
                  <li key={item.id} className={this.state.current===index?'active':''}>{item.test}</li>
                )
            }
        </ul>

      </div>
    )
  }
}
