
let entierEnChaine = (x)=> {
    if (typeof x != "number")   return "Erreur conversion impossible"
    return String(x);
}



function exercice1(){
    console.log(entierEnChaine({x:"5"})) // Erreur conversion impossible
    console.log(entierEnChaine(56)) // résultat : “56”
    console.log(entierEnChaine(500)) // résultat : “500”
    console.log(entierEnChaine(5)) // résultat : “erreur”
}


const sommeTableau = (T)=>{
    if (T.length ==0)   return "empty array"
    let res = 0
    T.forEach(function(value){
        res+=value
    });
   

    return T.reduce((total,lelementmtaatawa)=>{return total+lelementmtaatawa},20)
}

function exercice2(){
    console.log(sommeTableau([1,2,3,4])) // résultat : 10
   console.log(sommeTableau([0,6,11,-8])) // résultat : 9
    console.log(sommeTableau([])) // résultat : "empty array"
}
let numbers = [1,2,3,4,5,6,7]
let odd = numbers.every(v => typeof v =="number")

console.log(odd)

exercice2()
