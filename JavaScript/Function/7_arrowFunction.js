//Function Statement
function username (firstName, lastName){
    const fullName = firstName + lastName
    console.log("My name is", firstName + lastName)
    return fullName
}
username("Mickey", 19)

//Function Expression
const userGame=function(firstName, lastName){
    const fullName = firstName + lastName
    console.log("My name is", firstName + lastName)
    return fullName
} 
userGame("Mickey", 18)

//Arrow Function
const character=(firstName, lastName)=>{
    const fullName = firstName + lastName
    console.log("Name is", fullName)
    return fullName
}
character("Mickey", "Barnes")

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Bob"));