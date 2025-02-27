// Arrow Function 

// const add =function (x,y) {
//     console.log( x + y);
//     return;
// }

// add(9,8)

// const addTwo = (x,y) => {  // This is a Arrow function
//     console.log( x + y);
//     return;
// }

// add(9,8)


/* ******************* Arrow Funtion **************** */

   const user = {
     username : "Malik",
     price:999,
     welcomeMessage : function() {
        console.log(`${this.username} Welcome To My Website`); // this mean current contentious
         console.log(this);
         
    }
   }
//    user.welcomeMessage()
//     user.username ="Moeed"
//     user.welcomeMessage()

// function one (){
//     console.log(this);
    
// }

// one()


// const chai = function () {
//       let username = "Moeed"
//       console.log(this.username);
      
// }

// chai()

const two = () => {
    let username = "Moeed"
    console.log(this.username);
    
}

two()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

 /* 
 *************** You Use ARROW FUNCTION LIKE ****************
      () => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}

  */


 // Arrow Function Part 2 

 // 1. Syntax

//  const sayHello = () =>{
//     console.log("Heyy");
    
//  }

//   sayHello()

// const add = (a,b) => {
//     return a + b 
// }

// console.log(add( 4,5));

// const addOne = (a,b) =>  a + b 

// console.log(addOne( 4,5));

// 2. You can't use argument in Arrow Function 

// 3. Hoisting 

//  sayHey()
// function sayHey(params) {
//      console.log("Hi");
     
// }


const sayHey = (params) => {
     console.log("Hi");
     
}

sayHey()