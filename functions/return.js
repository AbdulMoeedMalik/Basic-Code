
 // How to return a Function 

//  let p = x(); // Parentheses mean function wil be call . // undefined function

function sum(a,b) {
     let ret = a + b  ;
       console.log(ret);
      return ret;
}
sum(9 , 3) ;

// Default Paramerter
 
     function calc(a,b) {

        console.log(2*(a+b));
        return;  
     }
     calc(8,8)

// Rest Parameter  ...... allow to function accept any number of agrument 

function collectThings(x , ...y) {   // 3 dot mean it on rest parameter . Rest paramete must b last parameter 
        console.log(x);
        console.log(y);
          
}

collectThings(1,2,3,4,5,6,7,8)
