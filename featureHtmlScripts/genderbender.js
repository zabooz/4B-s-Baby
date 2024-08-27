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
      if (maleToFemaleKey[i].endsWith("el")) {
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
    maleToFemaleKey[3] += femaleEndings[rndNumInLen(femaleEndings)];
    maleToFemaleKey.splice(maleToFemaleKey.length - 2, 1);
    maleToNeuterKey[2] += neuterEndings[rndNumInLen(neuterEndings)];
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
      if (femaleKey[i].endsWith("el")) {
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

    femaleToMaleKey[3] += maleEndings[rndNumInLen(maleEndings)];
    femaleToMaleKey.splice(femaleToMaleKey.length - 2, 1);
    femaleToNeuterKey[2] += neuterEndings[rndNumInLen(neuterEndings)];
    femaleToNeuterKey.splice(femaleToNeuterKey.length - 2, 1);
    femaleKey.splice(femaleKey.length - 1, 1);
    console.log(
      "female addEndings result:",
      femaleKey,
      femaleToMaleKey,
      femaleToNeuterKey
    );
    let femaleKeyResult = concKeys(femaleKey);
    let femaleToMaleKeyResult = concKeys(femaleToMaleKey);
    let femaleToNeuterKeyResult = concKeys(femaleToNeuterKey);
    return [femaleKeyResult, femaleToMaleKeyResult, femaleToNeuterKeyResult];
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
    neuterToMaleKey.splice(neuterToMaleKey.length - 2, 1);
    neuterToFemaleKey[3] += femaleEndings[rndNumInLen(femaleEndings)];
    neuterToFemaleKey.splice(neuterToFemaleKey.length - 2, 1);
    neuterKey.splice(neuterKey.length - 1, 1);
    console.log(
      "neuter addEndings result:",
      neuterKey,
      neuterToMaleKey,
      neuterToFemaleKey
    );
    let neuterKeyResult = concKeys(neuterKey);
    let neuterToMaleKeyResult = concKeys(neuterToMaleKey);
    let neuterToFemaleKeyResult = concKeys(neuterToFemaleKey);
    return [neuterKeyResult, neuterToMaleKeyResult, neuterToFemaleKeyResult];
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

  const sysContent = `I want you to translate ${apiString} to german. I want you to return the german root word only. I want you to return the result as a JSON object where the key is the correct german grammatical gender male, female or neuter of the translated third word in ${apiString} and the value is an array with value[0] being the first translated word, value[1] being the second translated word, value[2] being the third translated word and value[3] being the german plural of the noun in value[2]. Example: For "crazy red duck" the result I'm looking for would be a JSON object in the format of {"female": ["verückt", "rot", "Ente", "Enten"]}. The response should be the resulting object only.`;

  try {
    const apiResultString = await aiApiCallUsername(apiString, sysContent);

    console.log("API Result before any modifications:", apiResultString);

    // Parse the string into an object
    let apiResult = JSON.parse(apiResultString);
    console.log("Parsed API Result:", apiResult);
    apiResult = addEndings(apiResult);
    console.log("apiResult with addEndings:", apiResult);
    return apiResult;
  } catch (error) {
    console.error("Error in API call or processing:", error);
    return ["", "", ""];
  }
}
