import { S } from "xmlchars/xml/1.0/ed5.js";
import { aiApiCallUsername } from "../utilities/aiApiCallUsername.js";
import { rndNumInLen } from "../scripts/encoder.js";

const genderlessEndings = [];

function addEndings(object) {
  const pattern = /[aeiou]er$/;

  if (object["male"]) {
    let maleKey = object["male"];

    for (let i = 0; i < 2; i++) {
      if (maleKey[i].endsWith("e")) {
        maleKey[i] += "r";
      }

      if (maleKey[i].endsWith("el")) {
        maleKey[i] = maleKey[i].slice(0, -1) + "ler";
      }

      if (pattern.test(maleKey[i])) {
        maleKey[i] = maleKey[i].slice(0, -2) + "r" + "er";
      } else {
        maleKey[i] += maleKey[i] + "er";
      }
    }
  }
  if (object["female"]) {
    let femaleKey = object["female"];

    for (let i = 0; i < 2; i++) {
      if (femaleKey[i].endsWith("e")) {
        femaleKey[i] += "";
      }

      if (femaleKey[i].endsWith("el")) {
        femaleKey[i] = femaleKey[i].slice(0, -1) + "le";
      }

      if (pattern.test(femaleKey[i])) {
        femaleKey[i] = femaleKey[i].slice(0, -2) + "r" + "e";
      } else {
        femaleKey[i] += femaleKey[i] + "e";
      }
    }
  }
  if (object["genderless"]) {
    let genderlessKey = object["genderless"];

    for (let i = 0; i < 2; i++) {
      if (genderlessKey[i].endsWith("e")) {
        genderlessKey[i] += "s";
      } else if (genderlessKey[i].endsWith("el")) {
        genderlessKey[i] = genderlessKey[i].slice(0, -1) + "les";
      } else if (pattern.test(genderlessKey[i])) {
        genderlessKey[i] = genderlessKey[i].slice(0, -2) + "r" + "es";
      } else {
        genderlessKey[i] += genderlessKey[i] + "es";
      }
    }
    genderlessKey[2] += genderlessEndings[rndNumInLen(genderlessEndings)]
  } console.log("addEndings result:", object);
  return object;
}
function splitCamelCase(str) {
  return str.match(/([A-Z][a-z]*)/g);
}

export async function genderbend(username) {
  let result = username[0];
  let [adj1, adj2, noun] = splitCamelCase(result);
  let apiString = adj1 + " " + adj2 + " " + noun;
  console.log(apiString);

  const sysContent = `I want you to translate ${apiString} to german. For the adjectives in ${apiString} I want you to return the german root word only. I want you to return the result as a JSON object where the key is the gender of the noun in ${apiString} Example: For "crazy red cucumber" the result I'm looking for would be a JSON object in the form of {"female": ["verückt", "rot", "Gurke"]}. The response should be the resulting object only.`;

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
