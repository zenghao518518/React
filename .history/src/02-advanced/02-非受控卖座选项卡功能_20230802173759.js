import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuocomponent/Film";
import Cinema from "./maizuocomponent/Cinema";
import Center from "./maizuocomponent/Center";
import Tabbar from "./maizuocomponent/Tabbar";

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

        {this.which()}

        <Tabbar myevent={(index)=>{
            this.setState({
                current: index,
              });
        }}></Tabbar>
      </div>
    );
  }

  
}
