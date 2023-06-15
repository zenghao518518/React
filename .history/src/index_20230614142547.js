import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
//import './01-base/01-class组件'
//ReactDOM.render(<div>111111</div>,document.getElementById('root'))                    //);
import App from './01-base/01-class组件'
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>111111</div>);
root.render(<App>111111</App>);
