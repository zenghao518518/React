import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
//import './01-base/01-class组件'
//ReactDOM.render(<div>111111</div>,document.getElementById('root'))                    //);
//import App from './01-base/01-class组件'
//import App from './01-base/02-函数式组件'
//import App from './01-base/03-组件的嵌套'
//import App from './01-base/04-组件的样式'
import App from './01-base/05-事件绑定-1'
let root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<div>111111</div>);
root.render(<App></App>);
