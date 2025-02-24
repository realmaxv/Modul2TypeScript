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
    console.log(`Endstand: ${sumOfNum}`);
    
  }
  
    
  
}







}