let products =[
    {
        name: "apple",
        price: 200,
        quantity: 2
    },
    {
        name: "banana",
        price: 230,
        quantity: 5
    },
    {
        name: "mango",
        price: 100,
        quantity: 3
    }
]
 
let totalprice = products.map(function(tamal){
    return{
        // name: tamal.name,
        // price: tamal.price,
        // quantity: tamal.quantity,

        //same kura (...) ley ni garxa 
        ...tamal,
        total: tamal.price * tamal.quantity
    }
})
console.log(totalprice)