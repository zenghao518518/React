import React, { Component } from 'react'
import "./css/02-maizuo.css"
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'

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
        {
             this.state.current===0 && <Film></Film>

        }
         {
             this.state.current===0 && <Cinema></Cinema>

        }
         {
             this.state.current===0 && <Center></Center>

        }
        

        

       
      
        <ul>
            {
                this.state.list.map((item,index)=>
                  <li key={item.id} className={this.state.current===index?'active':''} 
                  onClick={()=>{this.handleClick(index)}}>{item.test}</li>
                )
            }
        </ul>

      </div>
    )
  }

  handleClick(index){
    this.setState({
        current:index
    })
  }
}
