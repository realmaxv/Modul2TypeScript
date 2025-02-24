import { selfConsole , overrideConsole } from "../utils/logger.ts";

overrideConsole();
export function sayHello (){

selfConsole("Klappt"); 
meetTime();
};




function meetTime(){



//For-Schleife
let sumOfNum: number= 0;
for(let index: number = 1; index <= 10; index++){
  
    sumOfNum += index;
  selfConsole(sumOfNum);
  if(index === 10){
   selfConsole(`End: ${sumOfNum}`);
    
  }
  
    
  
}


const arr = [1,2,3,4,6,7,89,21];

arr.forEach((num) => {
  selfConsole("Element meines Arrays: "+num);
  
});

selfConsole("");
const birds = [
  "Wellensittich",
  "Rabe",
  "Maise",
  "Specht",
  "🐧",
  "Drossel",
  "Amsel",
  "Tannenhäher",
  "🐧",
  "Adler",
  "Spatz",
];

let vogele= [];
for(let i = 0; i < birds.length; i++){
  if(birds[i] ===  "🐧"){
   vogele.push(birds[i]);
    continue;
  }
    selfConsole(birds[i], "Gefiltert: ", vogele);

}



}