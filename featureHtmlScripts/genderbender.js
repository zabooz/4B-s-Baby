// import { S } from "xmlchars/xml/1.0/ed5.js";
import { aiApiCallUsername } from "../utilities/aiApiCallUsername.js";
import { rndNumInLen } from "../scripts/encoder.js";
import { capitalizeFirstLetter } from "./newUserGenerator.js";
function concKeys(array) {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += capitalizeFirstLetter(array[i]);
  }
  return result;
}
function checkKey(object) {
  const firstKey = Object.keys(object)[0];
  console.log("First Key:", firstKey);

  if (firstKey === "männlich" || firstKey === "der") {
    object["male"] = object[firstKey];
    delete object[firstKey];
    return object;
  } else if (firstKey === "weiblich" || firstKey === "die") {
    object["female"] = object[firstKey];
    delete object[firstKey];
    return object;
  } else if (
    firstKey === "neutral" ||
    firstKey === "sächlich" ||
    firstKey === "das"
  ) {
    object["neuter"] = object[firstKey];
    delete object[firstKey];
    return object;
  } else if (
    firstKey === "male" ||
    firstKey === "female" ||
    firstKey === "neuter"
  ) {
    return object;
  } else {
    console.log("gender not identifiable: ", firstKey);
    return null; // Return null or a default value
  }
}

const neuterEndings = [
  "phänomen",
  "onom",
  "omin",
  "ondrit",
  "achit",
  "exit",
  "hydrit",
  "olithe",
  "alt",
  "omit",
  "erit",
  "syllon", // e.g., Parasyllon, Macrosyllon
  "arion", // e.g., Baryon, Mesarion
  "mel", // e.g., Caramel, Mandel
  "cyte", // e.g., Erythrocyte, Leucocyte
  "steron", // e.g., Aldosteron, Progesteron
];
const maleEndings = [
  "osaurier",
  "otarier",
  "onaut",
  "ologe",
  "arzt",
  "mechaniker",
  "meister",
  "philosoph",
  "graph",
  "herr",
  "iskop", // e.g., Periskop, Teleskop
  "ator", // e.g., Terminator, Generator
  "okrat", // e.g., Bürokrat, Demokrat
  "ant", // e.g., Kommandant, Aspirant
  "ak", // e.g., Maniak, Monolak
];
const femaleEndings = [
  "matik",
  "nautik",
  "graphie",
  "dynamik",
  "therapie",
  "technologie",
  "onomie",
  "chemie",
  "logie",
  "urgie",
  "istik",
  "graphik",
  "phie",
  "metrie",
  "konomie",
  "iatrie",
  "kologie",
  "physik",
  "biologie",
  "analyse",
  "struktur",
  "theorie",
  "plastik", // e.g., Plastik, Thermoplastik
  "graphie", // e.g., Lithographie, Hagiographie
  "ästhetik", // e.g., Ästhetik, Kinästhetik
  "sphäre", // e.g., Atmosphäre, Lithosphäre
  "synapse", // e.g., Synapse, Polysynapse
];

function addEndings(object) {
  if (!object) {
    console.error("Received an invalid object");
    return ["", "", ""];
  }

  const genderKey = Object.keys(object)[0];
  const wordsArray = object[genderKey];

  if (!wordsArray || !Array.isArray(wordsArray) || wordsArray.length < 4) {
    console.error("Array is invalid or has insufficient elements:", wordsArray);
    return ["", "", ""];
  }
  const pattern = /[aeiou]er$/;

  if (object["male"]) {
    let maleKey = [...object["male"]]; // Deep copy of the array
    let maleToFemaleKey = [...object["male"]];
    let maleToNeuterKey = [...object["male"]];

    console.log("Initial maleKey:", maleKey);
    console.log("Initial maleToFemaleKey:", maleToFemaleKey);
    console.log("Initial maleToNeuterKey:", maleToNeuterKey);

    for (let i = 0; i < 2; i++) {
      if (maleKey[i].endsWith("e")) {
        maleKey[i] += "r";
      } else if (maleKey[i].endsWith("el")) {
        maleKey[i] = maleKey[i].slice(0, -1) + "ler";
      } else if (pattern.test(maleKey[i])) {
        maleKey[i] = maleKey[i].slice(0, -2) + "r" + "er";
      } else {
        maleKey[i] += "er";
      }
      if (maleToFemaleKey[i].endsWith("e")) {
        maleToFemaleKey[i] += "";
      } else if (maleToFemaleKey[i].endsWith("el")) {
        maleToFemaleKey[i] = maleToFemaleKey[i].slice(0, -1) + "le";
      } else if (pattern.test(maleToFemaleKey[i])) {
        maleToFemaleKey[i] = maleToFemaleKey[i].slice(0, -2) + "r" + "e";
      } else {
        maleToFemaleKey[i] += "e";
      }
      if (maleToNeuterKey[i].endsWith("e")) {
        maleToNeuterKey[i] += "s";
      } else if (maleToNeuterKey[i].endsWith("el")) {
        maleToNeuterKey[i] = maleToNeuterKey[i].slice(0, -1) + "les";
      } else if (pattern.test(maleToNeuterKey[i])) {
        maleToNeuterKey[i] = maleToNeuterKey[i].slice(0, -2) + "r" + "es";
      } else {
        maleToNeuterKey[i] += "es";
      }
    }
    maleToNeuterKey[2] += neuterEndings[rndNumInLen(neuterEndings)];
    maleToFemaleKey[3] += femaleEndings[rndNumInLen(femaleEndings)];
    maleToFemaleKey.splice(maleToFemaleKey.length - 2, 1);
    maleToNeuterKey.splice(maleToNeuterKey.length - 2, 1);
    maleKey.splice(maleKey.length - 1, 1);
    console.log(
      "male addEndings result:",
      maleKey,
      maleToFemaleKey,
      maleToNeuterKey
    );

    let maleKeyResult = concKeys(maleKey);
    let maleToFemaleKeyResult = concKeys(maleToFemaleKey);
    let maleToNeuterKeyResult = concKeys(maleToNeuterKey);
    return [maleKeyResult, maleToFemaleKeyResult, maleToNeuterKeyResult];
  }
  if (object["female"]) {
    let femaleKey = [...object["female"]]; // Deep copy of the array
    let femaleToMaleKey = [...object["female"]]; // Deep copy of the array
    let femaleToNeuterKey = [...object["female"]]; // Deep copy of the array

    for (let i = 0; i < 2; i++) {
      if (femaleKey[i].endsWith("e")) {
        femaleKey[i] += "";
      } else if (femaleKey[i].endsWith("el")) {
        femaleKey[i] = femaleKey[i].slice(0, -1) + "le";
      } else if (pattern.test(femaleKey[i])) {
        femaleKey[i] = femaleKey[i].slice(0, -2) + "r" + "e";
      } else {
        femaleKey[i] += "e";
      }
      if (femaleToMaleKey[i].endsWith("e")) {
        femaleToMaleKey[i] += "r";
      } else if (femaleToMaleKey[i].endsWith("el")) {
        femaleToMaleKey[i] = femaleToMaleKey[i].slice(0, -1) + "ler";
      } else if (pattern.test(femaleToMaleKey[i])) {
        femaleToMaleKey[i] = femaleToMaleKey[i].slice(0, -2) + "r" + "er";
      } else {
        femaleToMaleKey[i] += "er";
      }
      if (femaleToNeuterKey[i].endsWith("e")) {
        femaleToNeuterKey[i] += "s";
      } else if (femaleToNeuterKey[i].endsWith("el")) {
        femaleToNeuterKey[i] = femaleToNeuterKey[i].slice(0, -1) + "les";
      } else if (pattern.test(femaleToNeuterKey[i])) {
        femaleToNeuterKey[i] = femaleToNeuterKey[i].slice(0, -2) + "r" + "es";
      } else {
        femaleToNeuterKey[i] += "es";
      }
    }

    femaleToNeuterKey[3] += neuterEndings[rndNumInLen(neuterEndings)];
    femaleToMaleKey[3] += maleEndings[rndNumInLen(maleEndings)];
    femaleToMaleKey.splice(femaleToMaleKey.length - 2, 1);
    femaleToNeuterKey.splice(femaleToNeuterKey.length - 2, 1);
    femaleKey.splice(femaleKey.length - 1, 1);
    console.log(
      "female addEndings result:",
      femaleToMaleKey,
      femaleKey,
      femaleToNeuterKey
    );
    let femaleToMaleKeyResult = concKeys(femaleToMaleKey);
    let femaleKeyResult = concKeys(femaleKey);
    let femaleToNeuterKeyResult = concKeys(femaleToNeuterKey);
    return [femaleToMaleKeyResult, femaleKeyResult, femaleToNeuterKeyResult];
  }
  if (object["neuter"]) {
    let neuterKey = [...object["neuter"]]; // Deep copy of the array
    let neuterToMaleKey = [...object["neuter"]];
    let neuterToFemaleKey = [...object["neuter"]];

    for (let i = 0; i < 2; i++) {
      if (neuterKey[i].endsWith("e")) {
        neuterKey[i] += "s";
      } else if (neuterKey[i].endsWith("el")) {
        neuterKey[i] = neuterKey[i].slice(0, -1) + "les";
      } else if (pattern.test(neuterKey[i])) {
        neuterKey[i] = neuterKey[i].slice(0, -2) + "r" + "es";
      } else {
        neuterKey[i] += "es";
      }
      if (neuterToMaleKey[i].endsWith("e")) {
        neuterToMaleKey[i] += "r";
      } else if (neuterToMaleKey[i].endsWith("el")) {
        neuterToMaleKey[i] = neuterToMaleKey[i].slice(0, -1) + "ler";
      } else if (pattern.test(neuterToMaleKey[i])) {
        neuterToMaleKey[i] = neuterToMaleKey[i].slice(0, -2) + "r" + "er";
      } else {
        neuterToMaleKey[i] += "er";
      }
      if (neuterToFemaleKey[i].endsWith("e")) {
        neuterToFemaleKey[i] += "s";
      } else if (neuterToFemaleKey[i].endsWith("el")) {
        neuterToFemaleKey[i] = neuterToFemaleKey[i].slice(0, -1) + "les";
      } else if (pattern.test(neuterToFemaleKey[i])) {
        neuterToFemaleKey[i] = neuterToFemaleKey[i].slice(0, -2) + "r" + "es";
      } else {
        neuterToFemaleKey[i] += "e";
      }
    }
    neuterToMaleKey[3] += maleEndings[rndNumInLen(maleEndings)];
    neuterToFemaleKey[3] += femaleEndings[rndNumInLen(femaleEndings)];
    neuterToMaleKey.splice(neuterToMaleKey.length - 2, 1);
    neuterToFemaleKey.splice(neuterToFemaleKey.length - 2, 1);
    neuterKey.splice(neuterKey.length - 1, 1);
    console.log(
      "neuter addEndings result:",
      neuterToMaleKey,
      neuterToFemaleKey,
      neuterKey
    );
    let neuterKeyResult = concKeys(neuterKey);
    let neuterToMaleKeyResult = concKeys(neuterToMaleKey);
    let neuterToFemaleKeyResult = concKeys(neuterToFemaleKey);
    return [neuterToMaleKeyResult, neuterToFemaleKeyResult, neuterKeyResult];
  }
}
function splitCamelCase(str) {
  return str.match(/([A-Z][a-z]*)/g);
}

export async function genderbend(username) {
  let result = username[0];
  let [adj1, adj2, noun] = splitCamelCase(result);
  let apiString = adj1 + " " + adj2 + " " + noun;
  console.log(apiString);

  const sysContent = `I want you to translate the string "${apiString}" into their german root words, following these steps: 1.) Translate the string "${apiString}" into German. 2.) Extract the root words of each translated word, ensuring they are in their singular form. 4.) Create the plural form of the noun (third word). 5.) Return a JSON object where:
The key is the german article of value[2].
The value is an array where:
value[0] is the first translated word,
value[1] is the second translated word,
value[2] is the third translated word,
value[3] is the plural form of the third translated word. The response should be the resulting object only, with no additional text. Example: For the string "hot red duck", the expected output should be:
{
  "die": ["heiß", "rot", "Ente", "Enten"]
};`;

  try {
    const apiResultString = await aiApiCallUsername(apiString, sysContent);

    console.log("API Result before any modifications:", apiResultString);

    // Parse the string into an object
    let apiResult = JSON.parse(apiResultString);
    console.log("Parsed API Result:", apiResult);
    const checkedResult = checkKey(apiResult);
    console.log("New Key after checkKey:", checkedResult);
    console.log("Final API result object before addEndings:", checkedResult);
    const EndingsResult = addEndings(checkedResult);
    console.log("apiResult with addEndings:", EndingsResult);
    return EndingsResult;
  } catch (error) {
    console.error("Error in API call or processing:", error);
    return ["", "", ""];
  }
}
