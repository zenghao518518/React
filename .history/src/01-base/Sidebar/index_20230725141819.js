import React from 'react'

export default function Sidebar(props) {
  console.log(props) 
  let {bg} = props
  return (
    <div  style={{background:bg,width:"200px"}}>
        <ul>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
        </ul>
    </div>
  )
}
