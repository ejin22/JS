//using     []


const students= ['eshaan', 'aryan', 'deepak']

console.log(students[1])

//we know that const cannot be changed but

const house=['me','him','her']
house[0]='you'
console.log(house)

//we changed the value there

//we cannot change the student array
//but we could change the values inside 

// Think of const house as a locked mailbox:
// The mailbox (house) itself can’t be replaced.
// But you can still put letters inside, take them out, or change what’s inside.


//if we want to add a value inside the arrya, we can use push
//it behaves like a stack ,it comes on the end


//arrays are not homogenour here
//we cant store any data type inside
const newArray=[1,'hi',2]
console.log(newArray)

console.log(newArray.indexOf('his'))