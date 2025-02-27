function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1 , number2) {
//        console.log( number1 + number2);
       
// }

function addTwoNumbers(number1 , number2) {

    // let result = number1 + number2
    // return result
     return number1 + number2
}

const result = addTwoNumbers (3,4)

//    console.log("Result : " , result);
   
function loginUserMessage(username) {
        if (username === undefined) {
            console.log("Please Enter Username");
            return
        }
        return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(val1 , val2 ,  ...num1 ) {
      return num1
}

// console.log(calculateCartPrice(300 , 400 , 500 , 6000));


const user = {
    username:"Moeed",
    price:199

}

function handleObject(anyobject) {
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
      
}

// handleObject(user);

handleObject({
    username:"Malik",
    price:399
})

const newArray = [200 ,300 ,4000 ,6000]

function returnSecondValue(getArray) {
     return getArray[1]
}

console.log(returnSecondValue(newArray));
