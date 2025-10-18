//funciton is a block of code that peforms a particular task


//fucntion keyword
function sayHello(){
    console.log("hello")
}

sayHello()      //calling of function



//difference between parameters and arguments


function add(a,b){      //in this situation 
    //where we input things inside a function
    //this is called ARGUMENTS


    console.log(a+b);
}

//here, these are called PARAMETERS,when values are passed
add(4,3)


function mult(a,b){
    console.log(a*b)
}
mult(2,4)

//all the above are bad coding practice, never do 
//console.log for the output 

function sub(a,b){
    return a-b

}
let answer= sub(5,1)
console.log('The subtraction of the 2 numbers is ', answer)



//gotta pass unlimited arguments 
function addNums(){
    //console.log(arguments)  //inside () is called object 
    let ans=0;
    for(let i=0;i<5;i++){
        ans=ans+arguments[i]
    }
    return ans
}

let result =addNums(1,2,3,4,5)
console.log(result)