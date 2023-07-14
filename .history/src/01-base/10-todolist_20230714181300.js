import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  myref = React.createRef();
  state ={
        //  list:["aa","bb","cc"]
  }
  render() {
    return <div>
         <input ref={this.myref}></input>
         <button onClick={this.handleClick2}>add2</button>
         <ul>
             {
                this.state.list.map(item=>
                    <li key={item}>{item}</li>
                    )
             }
         </ul>
    </div>;
  }
  handleClick2=()=>{
    console.log("click2",this.myref.current.value) //这里的this为代理对象undefined
    let newlist = [...this.state.list];
    newlist.push(this.myref.current.value);
    this.setState({
        list:newlist
    })

  }
}
