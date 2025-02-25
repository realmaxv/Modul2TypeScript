import { selfConsole , overrideConsole , outputTheme} from "../utils/logger.ts";
const loopme = document.querySelector<HTMLInputElement>("#eingabe");
const submit = document.querySelector<HTMLButtonElement>("#submit");
const consoleDiv = document.querySelector<HTMLDivElement>(".consoleOutput");
overrideConsole();

let clicked: boolean = false;

export function sayHello (){
  if(consoleDiv){
    consoleDiv.innerHTML="";
if(clicked === false){
outputTheme("Loops-TS-Level-2_2");

loopsTsLevel2_2();


}else{
  console.clear();
 

  outputTheme("Loops-TS-Level-2_2");
}
}

};









function loopsTsLevel2_2(){

let word: string;




submit?.addEventListener("click",()=>{

  clicked = true;

  let num = Number(loopme?.value);
  let test = ["L"];

for (let i = 1; i <= num ;i++){
test.push("O");
if(test.length > 50){
  test.push("\n")
}
}

word = test.join("");

selfConsole(word+"P");


})



};