//组件渲染了两次
// react严格模式是为了在我们开发过程中帮助我们发现小bug,通过故意重复调生命周期函数让我们发现问题。
// 注意：这仅适用于开发模式。生产模式下生命周期不会被调用两次。
// 在react渲染组件中 ， 初始化的index.js文件里，存在一个<React.StrictMode>标签，
// 这个是react的一个用来突出显示应用程序中潜在问题的工具（严格模式）
import React, { Component } from "react";
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
      cinemaList: []
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
        this.setState({
          cinemaList: res.data.data.cinemas,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
      
          {
          this.state.cinemaList.map((item) => 
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          )
          }
        
      </div>
    );
  }
}
