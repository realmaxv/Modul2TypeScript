import './style.css';
// import * as FunctionsPartI from './Functions/main.ts';
// import * as Forms from './Forms/main.ts';
// import * as EventsOne from './Events/main.ts';
// import * as ArraysIModule from './Arrays /main.ts';
// import * as ArraysIIModule from './Arrays II/main.ts';
import * as TsIntro from './TS Intro/main.ts';
import * as Loops from './Loops/main.ts';

const consoleDiv = document.querySelector<HTMLDivElement>(".consoleOutput");
const outputDiv = document.querySelector<HTMLDivElement>('.output');
const lsEinfuehrung = document.querySelector<HTMLButtonElement>("#ts-Einführung");
const lsLoops = document.querySelector<HTMLButtonElement>("#ts-loops");


// const lsFunctions = document.querySelector<HTMLButtonElement>("#ts-functions");
// const lsForms = document.querySelector<HTMLButtonElement>("#ts-forms");
// const lsEvents = document.querySelector<HTMLButtonElement>("#ts-events");
// const lsArrays= document.querySelector<HTMLButtonElement>("#ts-arrays");
// const lsArrays2= document.querySelector<HTMLButtonElement>("#ts-arrays2");


lsEinfuehrung?.addEventListener('click', ()=>{

  if(outputDiv){

  outputDiv.innerHTML = `<h3>TS Intro</h3><br><button id="back" class="hidden">Reset</button> <br> <hr style="width: 100%">`;
  const backButton = document.getElementById("back");
    TsIntro.sayHello();


  if(backButton){
    setTimeout(() => backButton.classList.add("show"), 50);
  setTimeout(()=> outputDiv.classList.add("show"), 150);
  if (consoleDiv){
  setTimeout(()=> consoleDiv.classList.add("show"), 150);
  }
  backButton.addEventListener("click", () => {
    

history.go(0); // Lädt die Seite neu
});}
  
}
});

lsLoops?.addEventListener('click', ()=>{

  if(outputDiv){

  outputDiv.innerHTML = `<h3>Loops</h3> <br><button id="back" class="hidden">Reset</button> <br> <hr style="width: 100%">`;
  const backButton = document.getElementById("back");
    Loops.sayHello();


  if(backButton){
    setTimeout(() => backButton.classList.add("show"), 150);
  setTimeout(()=> outputDiv.classList.add("show"), 150);
  if (consoleDiv){
  setTimeout(()=> consoleDiv.classList.add("show"), 150);
  }
  backButton.addEventListener("click", () => {
    

history.go(0); // Lädt die Seite neu
});}
  
}
});




// lsFunctions?.addEventListener('click', ()=>{

//   if(outputDiv){
//    outputDiv.innerHTML = `<h3>Functions</h3> <br><button id="back" class="hidden">Reset</button> <br> <hr style="width: 100%">`;

//   const backButton = document.getElementById("back");
 
//   if(backButton){
//     setTimeout(() => backButton.classList.add("show"), 250);
//   setTimeout(()=> outputDiv.classList.add("show"), 150);

//   backButton.addEventListener("click", () => {
    

// history.go(0); // Lädt die Seite neu
// });}
  
// }
// });


// lsForms?.addEventListener('click', ()=>{

//   if(outputDiv){
//    outputDiv.innerHTML = `<h3>Forms</h3> <br><button id="back" class="hidden">Reset</button> <br> <hr style="width: 100%">`;

//   const backButton = document.getElementById("back");
 
//   if(backButton){
//     setTimeout(() => backButton.classList.add("show"), 250);
//   setTimeout(()=> outputDiv.classList.add("show"), 150);

//   backButton.addEventListener("click", () => {
    

// history.go(0); // Lädt die Seite neu
// });}
  
// }
// });

// lsEvents?.addEventListener('click', ()=>{

//   if(outputDiv){
//    outputDiv.innerHTML = `<h3>Events</h3> <br><button id="back" class="hidden">Reset</button> <br> <hr style="width: 100%">`;

//   const backButton = document.getElementById("back");
 
//   if(backButton){
//     setTimeout(() => backButton.classList.add("show"), 250);
//   setTimeout(()=> outputDiv.classList.add("show"), 150);

//   backButton.addEventListener("click", () => {
    

// history.go(0); // Lädt die Seite neu
// });}
  
// }
// });

// lsArrays?.addEventListener('click', ()=>{

//   if(outputDiv){
//    outputDiv.innerHTML = `<h3>Arrays I</h3> <br><button id="back" class="hidden">Reset</button> <br> <hr style="width: 100%">`;

//   const backButton = document.getElementById("back");
 
//   if(backButton){
//     setTimeout(() => backButton.classList.add("show"), 250);
//   setTimeout(()=> outputDiv.classList.add("show"), 150);

//   backButton.addEventListener("click", () => {
    

// history.go(0); // Lädt die Seite neu
// });}
  
// }
// });

// lsArrays2?.addEventListener('click', ()=>{

//   if(outputDiv){
//    outputDiv.innerHTML = `<h3>Arrays II</h3> <br><button id="back" class="hidden">Reset</button> <br> <hr style="width: 100%">`;

//   const backButton = document.getElementById("back");

//   if(backButton){
 
//     setTimeout(() => backButton.classList.add("show"), 250);
//   setTimeout(()=> outputDiv.classList.add("show"), 150);

//   backButton.addEventListener("click", () => {
    

// history.go(0); // Lädt die Seite neu
// });}
  
// }
// });
