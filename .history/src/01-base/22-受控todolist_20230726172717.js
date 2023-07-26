import React, { Component } from "react";
import "./css/01-index.css"
export default class App extends Component {
  a = 100;
  myref = React.createRef();
  state ={
        //  list:["aa","bb","cc"]
        mytext:"",
        list:[{
            id:1,
            mytest:"aaa",
            isChecked:false
        },
        {
            id:2,
            mytest:"bbb",
            isChecked:false
        },
        {
            id:3,
            mytest:"ccc",
            isChecked:false
        }
    ]
  }
  render() {
    return <div>
         
         <input value={this.state.mytext} 
           onChange={(evt) => {
            this.setState({
              mytext: evt.target.value,
            });
          }}
         ></input>
         <button onClick={this.handleClick2}>add2</button>
         <ul>
             {
                this.state.list.map((item,index)=>
                    <li key={item.id}>

                        <input type="checkbox" checked={this.state.list.isChecked}/>

                        {item.mytest}


                        {/* 富文本显示 */}
                        {/* <span dangerouslySetInnerHTML={
                          {
                            __html :item.mytest
                          }
                        }></span> */}

                        {/* <button onClick={this.handleDelClick.bind(this,index)}>Del</button> */}
                       
                        <button onClick={()=>this.handleDelClick(index)}>Del</button>
                    </li>
                    )
             }
         </ul>
         {this.state.list.length===0? <div>暂无代办事项1</div>:null}
         {this.state.list.length===0 && <div>暂无代办事项2</div>}
         <div className={this.state.list.length===0?'':'hidden'}>暂无代办事项3</div>
    </div>;
  }
  handleClick2=()=>{
    //console.log("click2",this.myref.current.value) //这里的this为代理对象undefined
    let newlist = [...this.state.list];
    newlist.push({
        id:Math.random()*1000000,
        mytest:this.state.mytext,
        isChecked:false
    });
    this.setState({
        list:newlist,
        mytext:""
    })

    //this.myref.current.value=""

  }

  handleDelClick=(index)=>{
    console.log("del-click",index)
    let newlist =[...this.state.list];//this.state.list.slice();//concat()
    newlist.splice(index,1)
    this.setState({
      list:newlist
  })
  }
}
