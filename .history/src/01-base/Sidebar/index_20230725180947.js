import React from "react";

export default function Sidebar(props) {
  console.log(props);
  let { bg, postion } = props;
  console.log(postion);

  var obj1 ={
    left:0
  }

  var obj2 ={
    right:0
  }
  return (
    <div
      style={{
        background: bg,
        width: "200px",
        position: "fixed",
        left:0,
        right:0
      }}
    >
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
  );
}
