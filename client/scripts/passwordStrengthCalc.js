export function passwordStrength(pwd) {
  let result;
  let count = pwd.length * 2.5;

  const pointsForDiffrentSigns = 5;
  const malusForConsecutiveIdenticalSigns = 2;
  const malusForConsecutiveSigns = 1;
  const malusForRepeatedIdenticalSigns = 2;
  const malusForRepeatedSigns = 1;
  const malusForMissingSigns = 4;
  let missingSigns = 5;
  const repeatMalus = 3;
  let timesRepeated = 0;

  const weak = 20;
  const mediocre = 30;
  const strong = 40;
  const veryStrong = 50;

  if (sonderzeichen.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
    missingSigns--;
  }
  if (kleinbuchstaben.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
    missingSigns--;
  }
  if (grossbuchstaben.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
    missingSigns--;
  }
  if (zahlen.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
    missingSigns--;
  }



  for (let i = 0; i < pwd.length - 2; i++) {
    const charCodeOne = pwd.charCodeAt(i);
    const charCodeTwo = pwd.charCodeAt(i + 1);
    const charCodeThree = pwd.charCodeAt(i + 2);

    const charCodeOneCaseInsensitive = pwd.toLowerCase().charCodeAt(i);
    const charCodeTwoCaseInsensitive = pwd.toLowerCase().charCodeAt(i + 1);
    const charCodeThreeCaseInsensitive = pwd.toLowerCase().charCodeAt(i + 2);

    test = pwd.toLowerCase().slice(i,i+3)


    if (charCodeOne === charCodeTwo && charCodeThree === charCodeTwo) {
      count -= malusForRepeatedIdenticalSigns;
      timesRepeated++;
    } else if (
      charCodeOneCaseInsensitive === charCodeTwoCaseInsensitive &&
      charCodeTwoCaseInsensitive === charCodeThreeCaseInsensitive
    ) {
      count -= malusForRepeatedSigns;
      timesRepeated++;
    } else if (!sonderzeichen.some((z) => pwd[i].includes(z))) {
      if (
        charCodeOne + 1 === charCodeTwo &&
        charCodeTwo + 1 === charCodeThree
      ) {
        count -= malusForConsecutiveIdenticalSigns;
        timesRepeated++;
      } else if (
        charCodeOneCaseInsensitive + 1 === charCodeTwoCaseInsensitive &&
        charCodeTwoCaseInsensitive + 1 === charCodeThreeCaseInsensitive
      ) {
        count -= malusForConsecutiveSigns;
        timesRepeated++;
      }
    }


  }

  count -= Math.round((repeatMalus * timesRepeated) +(malusForMissingSigns*missingSigns))
  console.log(pwd, pwd.length, count, timesRepeated);

  count = count < 0 ? 0 : count



  if (count <= weak) {
    result = "weak";
  } else if (count < mediocre) {
    result = "mediocre";
  } else if (count < strong) {
    result = "strong";
  } else if (count < veryStrong) {
    result = "very strong";
  } else {
    result = "extremely strong";
  }

  document.getElementById("strengthResult").textContent = `Result: ${result} (${count.toFixed()})`;
}
const sonderzeichen = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "§",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];
const kleinbuchstaben = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const grossbuchstaben = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const zahlen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
