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
let price= products.filter(function(kamal){ //
    return kamal.price == 100
})
console.log(price)

let filenames =["index.html","hello.c","index.php", "kamal.java", "tamal.html", "nishanta.py"] //filter out file having file name html
//end with("html")
let htmlfiles = filenames.filter(function(t){
    return t.endsWith("html")
})
console.log(htmlfiles)



let books=[
    {
        name: "Rich Dad poor Dad",
        writer: "Robert",
        year: 1990
    },
    {
        name: "Think like a monk",
        writer: "Kamal Rai",
        year: 1990
    },
    {
        name: "Cashflow quadrant",
        writer: "Robert",
        year: 1995
    }
]
let filteredbook = books.filter(function(b){
    return b.writer=="Robert" && b.year>1992
})
console.log(filteredbook)


let num= [1,2,3,4,5]
let sum = num.reduce(function(accumulator,n){
    return accumulator +n
},0)
console.log(sum)
