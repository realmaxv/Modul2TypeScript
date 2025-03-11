import { selfConsole, overrideConsole } from "../utils/logger.ts";

overrideConsole();
export function sayHello() {
  let outputColor =
    "background-color:black;color:green; font-size:16px; font-style:Italic;";

  selfConsole("%c Intro-TS-Level-1_16 (Arithmetische Operatoren");
  let score: number = 5 + 5 * 10;
  selfConsole("Ergebnis: " + score);

  let scoreone = (5 + 5) * 10;
  selfConsole("Ergebnis: " + scoreone);

  let scoretwo = 0;
  scoretwo = scoretwo + 10;
  selfConsole("Ergebnis: " + scoretwo);

  scoretwo += 10;
  selfConsole("Ergebnis: " + scoretwo);

  let zahl = 1;
  zahl = zahl + 1;
  zahl += 1;

  zahl++;
  selfConsole("increment: " + zahl);

  zahl--;
  selfConsole("dekrement: " + zahl);
  selfConsole("%c Intro-TS-Level-1_13 (Operatoren) 😎", outputColor);

  // Addition
  let addition_operator: number = 1 + 1;
  selfConsole("addition: " + addition_operator);

  // Subtraktion
  let subtraktion_operator: number = 2 - 1;
  selfConsole("subtraktion: " + subtraktion_operator);

  // Multiplikation
  let multiplication_operator: number = 2 * 2;
  selfConsole("multiplication: " + multiplication_operator);

  // Division
  let division_operator: number = 4 / 2;
  selfConsole("division: " + division_operator);

  // Modulo: zeigt an, was der Rest sein würde.
  let modulo_operator: number = 14 % 5;
  selfConsole("modulus: " + modulo_operator);

  selfConsole("%c Intro-TS-Level-1_8 (Variablen) 😎", outputColor);

  let x: number = 20,
    y = 30,
    z = 10;

  function rechnenAll(x: number, y: number) {
    let plus: number = x + y,
      minus = x - y,
      minusy = y - x,
      mal = x * y,
      durch = x / y;

    return selfConsole(
      `Addition: ${plus}, \n Subtraktion: ${minus}, \n Subtraktion Y: ${minusy}, \n Multiplikation: ${mal}, \n Division: ${durch}, \n`
    );
  }

  rechnenAll(x, y);
  let resultOne: number = (x * y) / z;
  selfConsole("(x*y)/z= ", resultOne);

  let a: number = 15,
    b = 9;

  selfConsole("a % b =", a % b);

  let c: number = 20;

  let result: number = (a + b) * c;
  selfConsole("(a+b) * c = ", result);

  selfConsole(++a);

  selfConsole(--b);

  let result1: number = b - a;
  selfConsole(result1);

  selfConsole("Rest: ", result % result1);
}
