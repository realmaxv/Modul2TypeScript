// src/utils/logger.ts
const consoleDiv = document.querySelector<HTMLDivElement>(".consoleOutput");

// Funktion zum Loggen in die eigene "Konsole"
export function selfConsole(...args: any[]) {
    const message = args.map(arg => typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg).join(" ");
    if(consoleDiv){
    consoleDiv.innerHTML += `<div>${message}</div>`;
    consoleDiv.scrollTop = consoleDiv.scrollHeight; // Automatisch nach unten scrollen
}
}

// Standard-Konsole überschreiben
export function overrideConsole() {
    console.log = selfConsole;
    console.error = (...args: any[]) => selfConsole("❌ ERROR:", ...args);
    console.warn = (...args: any[]) => selfConsole("🌪️ WARNUNG:", ...args);
}

