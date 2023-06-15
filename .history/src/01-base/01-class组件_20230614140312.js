class Test{
constructor(){
   this.a=1
}
 testa(){
      console.log("testa")
 }
 
}

class ChildTest extends Test{
  
     testb(){
        console.log("testb")
     }
    }

var obj = new Test()
obj.testa()
console.log(obj.a)

