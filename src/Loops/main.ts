import { selfConsole , overrideConsole , outputTheme} from "../utils/logger.ts";
const loopme = document.querySelector<HTMLInputElement>("#eingabe");
const submit = document.querySelector<HTMLButtonElement>("#submit");
overrideConsole();
export function sayHello (){


outputTheme("Loops-TS-Level-2_2");

loopsTsLevel2_2();
};









function loopsTsLevel2_2(){

let word: string;




submit?.addEventListener("click",()=>{
  let num = Number(loopme?.value);
  let test = ["L"];
for (let i = 1; i <= num ;i++){
test.push("O");

}

word = test.join("");

selfConsole(word+"P");

})};