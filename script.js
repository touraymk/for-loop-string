/*Lag en funksjon som teller opp antall vokaler i en string 
ved hjelp av en for-løkke
Vokaler: a, e, i, o, u, y, æ, ø, å
Bruk en variabel for hver av vokalene feks let aCounter  = 0 
som plusses oppover dersom du finner bokstaven i tekststringen*/

const text = "Hei på deg!";

updateView(text);
function updateView(text) {
  let vowelsFound = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "y" ||
      char === "æ" ||
      char === "ø" ||
      char === "å"
    ) {
      vowelsFound += char + " ";
    }
  }

  document.getElementById("app").innerHTML =
    "I teksten: " + text + " Finner vi vokalene: " + vowelsFound.trim();
}
