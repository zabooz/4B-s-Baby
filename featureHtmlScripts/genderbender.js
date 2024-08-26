import { aiApiCallUsername } from "../utilities/aiApiCallUsername.js";

// {
// "male": ["wütender", "würfelförmiger", "Papagei"],
// "female": ["wütende", "würfelförmige", "Papageie"],
// "genderless": ["wütendes", "würfelförmiges", "Papagei"]
// }
function addEndings(object, noun) {

  } 
  function splitCamelCase(str) {
    return str.match(/([A-Z][a-z]*)/g);
  }
  
export async function genderbend(username) {
  let maleEndings = [], femaleEndings = [], genderlessEndings = [];
  let result = username[0];
  let [adj1, adj2, noun] = splitCamelCase(result);
  let apiString = adj1 + " " + adj2 + " " + noun;
  console.log(apiString);
  
  const sysContent = `I want you to translate ${apiString} to german. For the adjectives in ${apiString} I want you to return the german root word only. I want you to return the result as a JSON object where the key is the gender of the noun in ${apiString} Example: For "crazy red cucumber" the result I'm looking for would be a JSON object in the form of {"female": ["verückt", "rot", "Gurke"]}. The response should be the resulting object only.`;


  
  try {
    const apiResultString = await aiApiCallUsername(apiString, sysContent);
    console.log("API Result before any modifications:", apiResultString);

    // Parse the string into an object
    const apiResult = JSON.parse(apiResultString);
    console.log("Parsed API Result:", apiResult);
let pattern = /[aeiou]er$/;

if (apiResult["male"]) {
    let maleKey = apiResult["male"];
    
    for (let i = 0; i < 2; i++) {
        if (maleKey[i].endsWith("e")) {
            maleKey[i] += "r";
        }

        if (maleKey[i].endsWith("el")) {
            maleKey[i] = maleKey[i].slice(0, -1) + "ler";
        }

        if (pattern.test(maleKey[i])) {
            maleKey[i] = maleKey[i].slice(0, -2) + "r" + "er";
        }
    }
}


      
      const maleString = maleKey[0] + "er" + maleKey[1] + "er" + maleKey[2];
      console.log("maleString:", maleString);
    }


    console.log("Male Key:", maleKey);
    console.log("Female Key:", femaleKey);
    console.log("Genderless Key:", genderlessKey);

    if (maleKey && femaleKey && genderlessKey) {
      const male = maleKey[0] + maleKey[1] + maleKey[2];
      const female = femaleKey[0] + femaleKey[1] + femaleKey[2];
      const genderless = genderlessKey[0] + genderlessKey[1] + genderlessKey[2];
      return [male, female, genderless];
    } else {
      console.error(
        "One or more keys are undefined in the API response.",
        apiResult
      );
      return ["", "", ""];
    }}
  } catch (error) {
    console.error("Error in API call or processing:", error);
    return ["", "", ""];
  }
}

