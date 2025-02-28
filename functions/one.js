/* 
******************  Function Terminologies ************************************
     1) Function & Method
     2) Declaration & Defination 
     3) Arguments & Parameters
     4) Callback & Higher Order Function
*/
 // ****************** Functions & Method ***********************

 function printMe() {
    console.log('printing.....');
    
 }

 printMe()

 function printThis(param) {
     console.log(param);
     
 }

 printThis('Moeed')

 const printMeAgain = function (a,b) {
     console.log(a,b);
     
 }
 printMeAgain( 20 ,30);



 /**
  *What is this?

    In JavaScript, the this keyword refers to an object.

    The this keyword refers to different objects depending on how it is used:

    In an object method, this refers to the object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), apply(), and bind() can refer this to any object.
  */


 
