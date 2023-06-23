// commentaire fi ligne

/* 
    commentaire
    ala 
    barcha 
    lines
    kima
    chkoun
    yahki
    conversation
    messenger
    haka
    belehi maach
    tabaath
    message
    vocale
*/

// primitive types

let x = 5; // integer ==> ghalet ==> number
let pi = 3.14; // double
let y = 3.33333333333333333 // longdouble
let char = 'A' // char wala string
let name = "ahmed mohsen"; // string
let isSkhouna = true // boolean 
let moyennet = [2,11,0,20] // list array object 
let ahmedMohsen 
let person = {
    name:"mohsen",
    age : 23
} //  dictionnaire wala object 



// mutability and immutability
let a = [1,2,3]

let b = a

b.push(4)

console.log(`a is ${a} and b is ${b}`)



// double equals vs triple equals javascript

let t = [1,2]

let t1 = t
t1.push(3)

console.log(t == t1)



let notes = [12,16,17,11,8,15]

// afficher les notes
function afficherNotes(){
    for (let i=0;i<notes.length;i++){
        console.log(`t[${i}]=${notes[i]}`)
    }
}
afficherNotes()
// exercice 1 
    // afficher la moyenne
    // afficher min 
    // afficher max
    // afficher note li lezem naadihom fel controle (<10)

// exercice 2 : 
    // moshen 
    // => nehsom 
    // créer une fonction qui prend en parametre une chaine
    // la fonction doit inverser la chaine

 // exercice 3 : 
    //créer une fonction qui calcule les solutions d'une eqaution 
    // second degrée ax2 + bx + c 
        // Delta = b * b - (4 * a * c)

        // if delta negatif ==> pas de solution

        // delta = 0  ==> solution double x = -b/2 * a 

        // deux solution x1 = (-b-racine(delta)) / (2 * a) 
        //               x2 = (-b+racine(delta)) / (2 * a) 

        console.log(" square root of 9 is" + Math.sqrt(9))



function reverseString(str){
    // traitement
    return str
} 

reverseString("mohsen")

for(let i=0;i<notes.length;i++){

}

