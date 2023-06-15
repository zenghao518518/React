// class Test{
// constructor(){
//    this.a=1
// }
//  testa(){
//       console.log("testa")
//  }
 
// }

// class ChildTest extends Test{
  
//      testb(){
//         console.log("testb")
//      }
//     }

// var obja = new Test()
// obja.testa()
// console.log(obja.a)

// var objb = new ChildTest()
// objb.testa()
// objb.testb()
// console.log(objb.a)

import React from "react";
class App extends React.Component{
    render(){
        return <div>
            hello react Component
            <ul>
                <li>1111</li>
                <li>2222</li>
            </ul>
            </div>
    }
}

export default App