// ES 6 
let t = [1,2,3,4]
for (let i=0;i<t.length;i++){
    console.log(t[i])
}
// new for loop
for( value of t){
    console.log(value)
}

// high order methods
// array 



function sayHello (){
    console.log("hello aid mabrouk")
}
sayHello()
let sayHello1 = function(name){
    console.log("hello aid mabrouk 2 " +name )

}
sayHello1("ya samir")
let sayHello3 = (name) => "hello aid mabrouk 3 "+name

let aidMabrouk = sayHello3("ya kamel")
console.log(aidMabrouk)


let square = x => x*x
function square2(x){
    return x * x
}





let personnes = ["ahmed","ali","kamel","kais said","samir"]

function afficher(person){
    console.log(person)
}


let traitement = (person,index)=>{
    console.log( ` fel case ${index} aandi ${person}`)
}

//procedure ==> matrajaa chay
personnes.forEach(traitement)

let capitalizedNames = personnes.map(p=>
     p[0].toLocaleUpperCase() + p.slice(1)
)

let cap = personnes.map(function(p){
    return p[0].toLocaleUpperCase() + p.slice(1)
}
)



let numbers = [3,10,9,16,25,36,100,49]

let squareRootOfNumbers = numbers.map(v => Math.sqrt(v))

let numbersBiggerThan10 = numbers.filter(v => {
    if(v>10) return true
})
let numbersBiggerThan10_2 = numbers.filter(v=> v>10)
console.log(numbersBiggerThan10_2)



let cars = [
    {
        brand : "BMW",
        modele : "serie 3",
        hp : 110,
        year: 2011,
        price : 37000
    },
    {
        brand : "BMW",
        modele : "serie 5",
        hp : 160,
        year: 2011,
        price : 370000
    },
    {
        brand : "Ferrari",
        modele : "f50",
        hp : 500,
        year: 1980,
        price : 290000
    },
    {
        brand : "Mini",
        modele : "cooper",
        hp : 95,
        year: 2001,
        price : 16000
    },
    {
        brand : "citroen",
        modele : "c15",
        hp : 50,
        year: 2006,
        price : 1800
    },
]




let carsFrom00to10 = cars.filter(car => car.year <= 2010 && car.year >=2000)
let bmwCarsWithYear = cars
                    .filter(car => car.brand =="BMW")
                    .map(car=>({ year : car.year,price:car.price}))




let priceOfAllCars = cars.reduce((acc,car)=>acc+car.price,0)



console.log(priceOfAllCars)


cars.sort((car1,car2)=>car1.year - car2.year)


let T = [1,2,3,4]

let first = T[0]
let second = T[1]
// array destructuring
let [f,s] = T
console.log(f,s)
// spread operator
let array1 = [1,2,3,[1,2,3]]
let array2 = [99,100,101,102]
let result = [...array1,...array2]

let [firstt,...be9i]=  T

console.log(firstt,be9i)


let car = {
    manif : "Ford",
    model : "fiest",
    year : 2007,
    hp : 100
}

let f1 = {...car,year:2008 }
console.log(car,f1)








