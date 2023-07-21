//组件渲染了两次
// react严格模式是为了在我们开发过程中帮助我们发现小bug,通过故意重复调生命周期函数让我们发现问题。
// 注意：这仅适用于开发模式。生产模式下生命周期不会被调用两次。
// 在react渲染组件中 ， 初始化的index.js文件里，存在一个<React.StrictMode>标签，
// 这个是react的一个用来突出显示应用程序中潜在问题的工具（严格模式）
import React, { Component } from "react";
import BetterScroll from 'better-scroll'
import axios from "axios";

export default class Cinema extends Component {
  //组件渲染了两次
  constructor() {
    super();
    //axios 请求数据
    //   axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4252276")
    //        .then(res=>{console.log(res)})
    //        .catch(err=>{console.log(err)})
    // }
    this.state = {
      cinemaList: [],
      bakcinemaList: [],
    };

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=184075",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16898322451821216457359361","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        console.log(res.data.data.cinemas);
       //在组件已经卸载时return，不去设置state：使用react组件this里面的updater属性上的isMounted方法判断组件是否存在，如果不存在，就return，不再去设置setState
        if (this.updater.isMounted(this)) {
          this.setState({
            bakcinemaList: res.data.data.cinemas,
            cinemaList: res.data.data.cinemas,
          });
        } else {
          return;
        }
        new BetterScroll(".wrapper") 
        // Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate 
        // this.setState({
        //   cinemaList: res.data.data.cinemas,
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <input onInput={this.handleInput}/>
        <div className="wrapper" style={{height:'500px',background:'yellow',overflow:'hidden'}}>
        <div className="content">
        {
          this.state.cinemaList.map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))
        }
        </div>
        </div>
      </div>
    );
  }

  handleInput=(event)=>
  {
    console.log("Input",event.target.value)
    var newlist=this.state.bakcinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())
                                         || item.address.toUpperCase().includes(event.target.value.toUpperCase())
                                       )
                
    //console.log(newlist)
    this.setState({
      cinemaList: newlist,
    } );
   //!!!同步非异步!!!!!这里的打印一般上面还没来得及跟新，状态不对
   console.log(this.state.cinemaList)

  }

 
}
