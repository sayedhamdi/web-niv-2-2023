

let name = 'khalil'
let age = 26

let name1 = "mohsen"
let age1 = 25



let p1 = {
    name: 'aziz',
    age: 24,
    adresse: {
        street: "rue abou baker al bakri",
        zip: 1013,
        country: 'tunisia',
        city: "tunis"
    },
    isMarried: false
}


let table = [1,2,3, { name:"kamel"},false,"mohsen",function (){
    console.log("yalla")
}];



//console.log(table[table.length-1])

function add1(x,y){
    console.log(`x+y = ${x+y}`)
}
function add(x ,y){
    if (isNaN(x) || isNaN(y))
        return 'error these are not number'
    return Number(x)+Number(y)
}
console.log(add('4a',6))


function soustraction1(x,y){
    console.log(`x-y = ${x-y}`)
    
}
function soustraction(x,y){
    return x-y 
}

function calculator(x,y,operator){
    let resultat = ""
    switch(operator){
        case "+": {
            resultat = add(x,y) 
            break;
        }
        case "-" : {
            resultat = soustraction(x,y) 
            break
        }

        default : console.log("false operator") 
    }

    return `resultat de x ${operator} y  = ${resultat}` 

}


function addMulitpleNumbers(...args){
    let resulat = 0
    for(let i=0;i<args.length;i++){
        if(!isNaN(args[i])){
            resulat +=Number(args[i])
        }else{
            return "your arguments must be of type number"
        }
    }
    return `result is ${resulat}`
}

console.log(addMulitpleNumbers(1,3,"4",6,11,'10'))


let personnes = [
    {
        firstName : 'ali',
        lastName:'ben ali',
        age : 17
    },
    {
        firstName : 'abir',
        lastName:'abir',
        age : 18
    },
    {
        firstName : 'ahmed',
        lastName:'mohsen',
        age : 20
    },
    {
        firstName : 'khedma',
        lastName: 'sakkat',
        age : 100
    },
    {
        firstName: 0,
        lastName : underfined,
        age : "hello"
    },
    {
        firstName : 'samira',
        lastName: 'double canon',
        age : 100
    },
    {
        firstName: 10,
        lastName : '',
        age : "hello"
    }
]


// function 1 ===> mineur trajaali laabed el mineur ==> resultat tableau
// function 2 ===> tchoufli thamech zouz abed andhom nafs laamor ==> resultat tableau
// function 3 ===> filter les champs incorrectes  ===> tableau ndhif 
// function 4 ===> search by firstname or lastname ==> return true or false