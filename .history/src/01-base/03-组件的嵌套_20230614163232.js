import React, { Component } from 'react'


class Navbar extends Component {
    render() {
     return(
        <div>
            Navbar
        </div>
     )
    }
  }
  class Swiper extends Component {
    render() {
     return(
        <div>
            Swiper 
        </div>
     )
    }
  }
  
  
    function Tabbar() {
     return(
        <div>
           <Tabbar1></Tabbar1>
        </div>
     )
    }
    
   const Tabbar1 = ()=><div>tabbar1</div>


export default class App extends Component {
  render() {
    return (
      <div>
          Component
          <Navbar></Navbar>
          <Swiper></Swiper>
          <Tabbar></Tabbar>
          
      </div>
    )
  }
}
