
export function sayHello (){

    let outputColor = "background-color:black;color:green; font-size:16px; font-style:Italic;";





    console.log("%c Intro-TS-Level-1_16 (Arithmetische Operatoren) 😎",outputColor);
    let score: number = 5 + 5 * 10;  
console.log('Ergebnis: ' + score);

let scoreone = (5 + 5) * 10;  
console.log('Ergebnis: ' + scoreone);


let scoretwo = 0;  
scoretwo = scoretwo + 10;  
console.log('Ergebnis: ' + scoretwo);


scoretwo += 10;  
console.log('Ergebnis: ' + scoretwo)

let zahl = 1;  
zahl = zahl + 1;  
zahl += 1;

zahl++;  
console.log('increment: ' + zahl);


zahl--;  
console.log('dekrement: ' + zahl);
console.log("%c Intro-TS-Level-1_13 (Operatoren) 😎",outputColor);


// Addition
let addition_operator: number = 1 + 1;
console.log('addition: ' + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log('subtraktion: ' + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log('multiplication: ' + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log('division: ' + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log('modulus: ' + modulo_operator);


console.log("%c Intro-TS-Level-1_8 (Variablen) 😎",outputColor);


let x: number = 20,
  y = 30,
  z = 10;


function rechnenAll(x:number,y:number){

    let plus: number = x+y,
     minus = x-y,
     minusy = y-x, 
     mal = x*y,
     durch = x/y;


     return console.log(`Addition: ${plus}, \n Subtraktion: ${minus}, \n Subtraktion Y: ${minusy}, \n Multiplikation: ${mal}, \n Division: ${durch}, \n`);
     

}

rechnenAll(x,y);
let resultOne: number = (x * y) / z;
console.log("(x*y)/z= ", resultOne);

let a: number = 15,
  b = 9;

console.log("a % b =", a % b);

let c: number = 20;

let result: number = (a + b) * c;
console.log("(a+b) * c = ", result);


console.log(++a);

console.log(--b);

let result1: number = b - a;
console.log(result1);

console.log("Rest: ", result % result1);
console.log("%c ---------------------------------END----------------------------- ",outputColor);

   return 'Öffne die Konsole, um die Ausgabe der ausgeführten Aufgaben zu sehen 😇';

};
