import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {
constructor(){
  super()
  //axios 请求数据
  axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4252276")
       .then(res=>{console.log(res)})
       .catch(err=>{console.log(err)})
}

  render() {
    return (
      <div>Cinema</div>
    )
  }
}
