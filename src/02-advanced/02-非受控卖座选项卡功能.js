import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuocomponent/Film";
import Cinema from "./maizuocomponent/Cinema";
import Center from "./maizuocomponent/Center";
import Tabbar from "./maizuocomponent/Tabbar";
import Navbar from "./maizuocomponent/Navbar";

export default class App extends Component {
  state = {
   
    current:0
  };

  which() {
    // return("111111111111111111111")
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
       
      case 1:
        return <Cinema></Cinema>;
        
       
      case 2:
        return <Center></Center>;
        
      default:
       return null;
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Cinema></Cinema>}
        {this.state.current === 2 && <Center></Center>} */}
        <Navbar myevent={()=>{
            console.log("navbar")
            this.setState({
                current: 2
              });
        }}></Navbar>
        {this.which()}

        <Tabbar myevent={(index)=>{
            //父组件随子组件修改
            this.setState({
                current: index,
              });
        }} defaultValue={this.state.current}></Tabbar>
        {/* 只有第一次有用 */}
      </div>
    );
  }

  
}
