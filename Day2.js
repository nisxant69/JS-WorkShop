//Object Methods
let pudel={
    name:"Tumit",
    age:20,
    address:"Itahari",
}

//ADD KEY_VALUE PAIR INTO OBJECT
pudel.college="GPLC";
pudel.hobby="Eating"
console.log(pudel.college);
console.log(pudel.hobby);


//List keys and values inside an Object
let keys=Object.keys(pudel)
console.log(keys)
console.log(Object.keys(pudel))
console.log(Object.values(pudel))

//No. of item in array
let arr=[1]
console.log(arr.length) //.length property ho

//Method ma () use hunxa property ma hudaina



// LOOPS and CONDITIONALS
for(let a=1;a<10;a++){
    console.log(pudel.name)
}

while(0){
    console.log("Tamal");
}

//Ternary Operator
let a=5;
a==5 ? console.log("True") : console.log("False")

//Short Circuit
let isRaining=true;
isRaining && console.log("Pardaixa")

//ELigibility Check
let age=18;
if(age>=18){
    console.log("Eligible to Cast Vote")
} else{
    console.log("Sorry You're not eligible")
}

age>=18?console.log("Eligible to Vote") : console.log("Not Eligible")


let isEligible=true;
if(age>=18) {
    isEligible=true
} else{
    isEligible=false
}

isEligible && console.log("Eligible For Casting Vote")


//Else IF

if(age>=20){
    console.log("Age is bigger than 20")
} else if(age>10){
    console.log("Age is bigger than 10")
} else{
    console.log("Age is smaller than 10")
}

let temp=25
if(temp>=30){
    console.log("Hot Weather")
} else if(temp>10){
    console.log("Normal Weather")
} else{
    console.log("Cold Weather")
}

//LOOP

let nums=[1,2,3,4,5,6,7,8,9,10]
for(let num of nums){
    console.log(num)
}


let days=["sun","mon","tues","wednes","thurs","fri","satur"];
for(let data of days){
    console.log("Today is "+data+"day")
    console.log(`Today is ${data}day\n`)
}

let datas=[
    {
        name:"tamal",
        age:22
    },
    {
        name:"Bye",
        age:19
    }
]


for(let bata of datas){
    console.log(`My name is ${bata.name}`)
}
console.log(`My name is ${datas[0].name}`)

let fruits=[
    {
        name :["apple","mango"]
    }
]
console.log(fruits[0].name[1]);