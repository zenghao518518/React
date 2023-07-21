import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {
constructor(){
  super()
  //axios 请求数据
//   axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4252276")
//        .then(res=>{console.log(res)})
//        .catch(err=>{console.log(err)})
// }
axios.get({
  url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4252276",
  headers:{
    'X-Client-Info':{"a":"3000","ch":"1002","v":"5.2.1","e":"16898322451821216457359361","bc":"110100"},
    'X-Host':'mall.film-ticket.cinema.list'
  }
})
.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})
}

  render() {
    return (
      <div>Cinema</div>
    )
  }
}
