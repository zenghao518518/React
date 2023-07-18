import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  myref = React.createRef();
  state ={
        //  list:["aa","bb","cc"]
        list:[{
            id:1,
            mytest:"aaa"
        },
        {
            id:2,
            mytest:"bbb"
        },
        {
            id:3,
            mytest:"ccc"
        }
    ]
  }
  render() {
    return <div>
         <input ref={this.myref}></input>
         <button onClick={this.handleClick2}>add2</button>
         <ul>
             {
                this.state.list.map((item,index)=>
                    <li key={item.id}>{item.mytest}
                        {/* <button onClick={this.handleDelClick.bind(this,index)}>Del</button> */}
                        <button onClick={()=>this.handleDelClick(index)}>Del</button>
                    </li>
                    )
             }
         </ul>
    </div>;
  }
  handleClick2=()=>{
    console.log("click2",this.myref.current.value) //这里的this为代理对象undefined
    let newlist = [...this.state.list];
    newlist.push({
        id:Math.random()*1000000,
        mytest:this.myref.current.value});
    this.setState({
        list:newlist
    })

  }

  handleDelClick=(index)=>{
    console.log("del-click",index)
    let newlist =[...this.state.list];//this.state.list.slice();//concat()

  }
}
