// primitive 


// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// Reference (non prmiitive)

// Array, Objects, functions

let arr = [12,3,"a"]
console.log(typeof arr) // type is object

const myfunc = function (){
    console.log("Hello")
}

console.log(typeof myfunc) // it's type is object funciton