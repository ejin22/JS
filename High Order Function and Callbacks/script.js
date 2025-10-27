//a function that takes a function as an argument 


function add(a,b, cb)   {
    let result = a+b
    cb(result)
}

add(2,4,function(val){
    console.log(val)
})