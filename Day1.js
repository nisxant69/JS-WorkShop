// let time="9:45";
// console.log("Time "+time);
// console.log(`Time ${time}`);    //STRING LITERAL


// //ARRAY
var array=[0,1,2,3,4,5,6,7,8,9]
// console.log(array)
let a=array 


// a.pop()          //Delete elements at last
// a.push(25);      //Adds Element to last
// a.unshift(2)    //Adds  1 Element to First   
// a.unshift(2,3,4)    //Adds multiple  Element to First   
// a.splice(2,5);   //Delete Elemts  
a.splice(0,20,"a","e","i","o","u");   //Delete Elemts  but also add new elmt at the position

let x = a.slice("a","i");

// let v=a.slice(0,5) //store the value from index 2 to 5.
// console.log(v)
console.log(array)
console.log(a)

// let evenNUm=[2,4,6,8,10,12];
// let result=evenNUm.slice(3,6)
// console.log(result)

// array[0]=99; //updates array
// console.log(array)
 let message= "My name is nishanta khadka";

let newmessage = message.split(" ")
console.log(newmessage)
//OBJECT

let me={
    name:"Nishant",
    age:12,
    address:"Itahari"
}
// console.log(me.name.length)

// console.log(me.name);




// splice modiifes original array while slice doesnt