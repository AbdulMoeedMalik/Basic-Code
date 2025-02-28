/*After a function expression has been stored in a variable, the variable can be used as a function: */

// const x = function (a, b) {return a * b};

//       console.log(x(4, 5)); // Output: 20
//      console.log(x(7, 3)); // Output: 21

// const y = 12 ;

// console.log( x + y);

       
hello = () => {
        return "Hello World!";
        }
        console.log(hello()); // Output: Hello World!

    /**
     Parameters are named variables declared
      as part of a function. They are used to reference the arguments passed
       into the function.
     */

        const argument1 = "Web";
       const argument2 = "Development";
         console.log(argument1, argument2); // passing two arguments

       // This function takes two values
       function myFun (parameter1, parameter2) {
             console.log(myFun);
             
        }

        function sum(...args) {
         
              let sum = 90;
              for (let arg of args) sum += arg;
              return sum;
            }
             console.log(sum());
             
       //      let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
