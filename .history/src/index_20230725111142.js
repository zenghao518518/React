import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
//import './01-base/01-class组件'
//ReactDOM.render(<div>111111</div>,document.getElementById('root'))                    //);
//import App from './01-base/01-class组件'
//import App from './01-base/02-函数式组件'
//import App from './01-base/03-组件的嵌套'
//import App from './01-base/04-组件的样式'
//import App from './01-base/05-事件绑定-1'
//import App from './01-base/06-事件绑定-2'
//import App from './01-base/07-ref'
//import App from './01-base/08-state'
//import App from './01-base/09-数组渲染'
//import App from './01-base/10-todolist'
//import App from './01-base/12-卖座选项卡'
//import App from './01-base/13-setState同步异步'
//import App from './01-base/14-betterScroll'
//import App from './01-base/15-betterscroll-cinema'
//import App from './01-base/16-prop'
import App from './01-base/17-props函数式组件'
//import App from './01-base/19-非受控'
//import App from './01-base/20-受控'
let root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<div>111111</div>);
root.render(<React.StrictMode><App></App></React.StrictMode>);
//root.render(<App></App>);
