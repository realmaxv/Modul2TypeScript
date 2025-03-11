import { selfConsole, overrideConsole } from "../utils/logger";
overrideConsole();
export function sayHello() {
  selfConsole("test");

  console.log("finish 😎");
}
