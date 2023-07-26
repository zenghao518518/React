import React from "react";

export default function Sidebar(props) {
  console.log(props);
  let { bg, postion } = props;
  console.log(postion);
  return (
    <div
      style={{
        background: bg,
        width: "200px",
        position: "fixed",
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
