import { aiApiCallUsername } from "../utilities/aiApiCallUsername.js";
let adj1, adj2, noun;
let apiArray = [adj1, adj2, noun];
const configAi = {
  sysContent: `I want you to translate ${
    apiArray[0], apiArray[1], apiArray[2]} to german in all 3 genders (so "männlich", "weiblich" and "sächlich") even if it does not make sense grammatically. I want you to return the result to me as an array in the same order. Example: For ["crazy", "red", "cucumber"] the result I'm looking for would be an object containing {"männlich" = ["verrückter", "roter", "Gurker"], "weiblich" = ["verrückte", "rote", "Gurke"], "sächlich" = ["verrücktes", "rotes", "Gurk"]}. As you can see I want you to use the correct gender based endings for the adjectives and invent one for the noun if it grammatically does not exist.`,
};


export async function genderbend(username) {

    function splitCamelCase(str) {
    return str.match(/([A-Z][a-z]*)/g);
    }

    let result = username[0];
    let [adj1, adj2, noun] = splitCamelCase(result);
    let apiArray = [adj1, adj2, noun];
    const sysContent = configAi.sysContent;
    const apiResult = await aiApiCallUsername(apiArray, sysContent);

    console.log(apiResult)

}