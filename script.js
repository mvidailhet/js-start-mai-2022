// Ce programme doit dire bonjour s'il reconnaît le nom, sinon "go away"
// Faire marcher avec "Antoine" et "Alex"
const userName = prompt("Quel est ton nom ?");

const lowerUserName = userName.toLowerCase();

const accceptedNames = ["paul", "mitch", "antoine", "alex"];

if (accceptedNames.includes(lowerUserName)) {
  console.log("Welcome, " + userName);
} else {
  console.log("Go away!");
}


/* if (
  lowerUserName === "paul" ||
  lowerUserName === "mitch" ||
  lowerUserName === "antoine" ||
  lowerUserName === "alex"
) {
  console.log("Welcome, " + userName);
} else {
  console.log("Go away!");
} */
