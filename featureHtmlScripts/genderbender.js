import { aiApiCallUsername } from "../utilities/aiApiCallUsername.js";

// {
// "male": ["wütender", "würfelförmiger", "Papagei"],
// "female": ["wütende", "würfelförmige", "Papageie"],
// "genderless": ["wütendes", "würfelförmiges", "Papagei"]
// }

export async function genderbend(username) {
  function splitCamelCase(str) {
    return str.match(/([A-Z][a-z]*)/g);
  }

  let result = username[0];
  let [adj1, adj2, noun] = splitCamelCase(result);
  let apiString = adj1 + " " + adj2 + " " + noun;
  console.log(apiString);

  const sysContent = `I want you to translate ${apiString} to german in all 3 genders (so "male", "female" and "genderless") even if it does not make sense grammatically. Example: For "crazy red cucumber" the result I'm looking for would be a JSON object containing {"male": ["verrückter", "roter", "Gurker"], "female": ["verrückte", "rote", "Gurke"], "genderless": ["verrücktes", "rotes", "Gurk"]}. As you can see I want you to use the correct gender based endings for the adjectives and creatively invent a fitting one for the noun if it grammatically does not exist. Answer with the object only.`;

  try {
    const apiResultString = await aiApiCallUsername(apiString, sysContent);
    console.log("API Result before any modifications:", apiResultString);

    // Parse the string into an object
    const apiResult = JSON.parse(apiResultString);
    console.log("Parsed API Result:", apiResult);

    const maleKey = apiResult["male"];
    const femaleKey = apiResult["female"];
    const genderlessKey = apiResult["genderless"];

    console.log("Male Key:", maleKey);
    console.log("Female Key:", femaleKey);
    console.log("Genderless Key:", genderlessKey);

    if (maleKey && femaleKey && genderlessKey) {
      const male = maleKey[0] + " " + maleKey[1] + " " + maleKey[2];
      const female = femaleKey[0] + " " + femaleKey[1] + " " + femaleKey[2];
      const genderless =
        genderlessKey[0] + " " + genderlessKey[1] + " " + genderlessKey[2];
      return [male, female, genderless];
    } else {
      console.error(
        "One or more keys are undefined in the API response.",
        apiResult
      );
      return ["", "", ""];
    }
  } catch (error) {
    console.error("Error in API call or processing:", error);
    return ["", "", ""];
  }
}
