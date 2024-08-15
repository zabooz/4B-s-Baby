import {
    colors,
    shapes,
    textures,
    sizes,
    emotions,
    tastes,
    sounds,
    temperatures,
    speeds,
    qualities,
    weatherTypes,
    instruments,
    fruits,
    animals,
    fantasyCreatures,
    vegetables,
    rpgClasses,
    fantasyRaces,
    occupations,
    vehicles,
    food,
    tools,
    beverages,
    clothingItems,
    bodyParts,
    flowers,
    desserts,
    contentArray1,
    contentArray2,
    allAdjectives,
    allNouns,
  } from "../data/englishGenerator.data.js";
  import { rndNumInLen } from "/scripts/encoder.js";
  
  //Generates a random Username based on user input.
  export function generateUser(adjective1, adjective2, selectedNoun) {
    let newUser = "";
    let randomAdjective1, randomAdjective2, randomNoun;
  
    //Randomize select if user input = random.
    if (adjective1 === "random") {
      adjective1 = contentArray1[rndNumInLen(contentArray1)];
    }
    if (adjective2 === "random") {
      adjective2 = contentArray1[rndNumInLen(contentArray1)];
    }
    if (selectedNoun === "random") {
      selectedNoun = contentArray2[rndNumInLen(contentArray2)];
    }
    function capitalizeFirstLetter(str) {
      // Check if the input is not empty
      if (str.length === 0) return "";
  
      // Capitalize the first letter and concatenate with the rest of the string
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    const myArraysObj = {
      colors: colors,
      shapes: shapes,
      textures: textures,
      sizes: sizes,
      emotions: emotions,
      tastes: tastes,
      sounds: sounds,
      temperatures: temperatures,
      speeds: speeds,
      qualities: qualities,
      weatherTypes: weatherTypes,
      instruments: instruments,
      fruits: fruits,
      animals: animals,
      fantasyCreatures: fantasyCreatures,
      vegetables: vegetables,
      rpgClasses: rpgClasses,
      fantasyRaces: fantasyRaces,
      occupations: occupations,
      vehicles: vehicles,
      food: food,
      tools: tools,
      beverages: beverages,
      clothingItems: clothingItems,
      bodyParts: bodyParts,
      flowers: flowers,
      desserts: desserts,
      allAdjectives: allAdjectives,
      allNouns: allNouns,
    };
    let selectedAdjectiveArray, selectedNounArray;
  
    // Function to generate a unique word from the array
    function getUniqueRandomWord(array, ...existingWords) {
      let randomWord;
      do {
        randomWord = array[rndNumInLen(array)];
      } while (existingWords.includes(randomWord));
      return randomWord;
    }
  
    // Determine which array to select based on adjective1
    if (myArraysObj.hasOwnProperty(adjective1)) {
      selectedAdjectiveArray = myArraysObj[adjective1];
      randomAdjective1 = capitalizeFirstLetter(
        getUniqueRandomWord(selectedAdjectiveArray)
      );
    } else if (adjective1 === "") {
      randomAdjective1 = "";
    } else {
      console.error(`Array for adjective1 "${adjective1}" not found.`);
      return;
    }
  
    // Determine which array to select based on adjective2
    if (myArraysObj.hasOwnProperty(adjective2)) {
      selectedAdjectiveArray = myArraysObj[adjective2];
      randomAdjective2 = capitalizeFirstLetter(
        getUniqueRandomWord(selectedAdjectiveArray, randomAdjective1)
      );
    } else if (adjective2 === "") {
      randomAdjective2 = "";
    } else {
      console.error(`Array for adjective2 "${adjective2}" not found.`);
      return;
    }
  
    // Determine which array to select based on noun
    if (myArraysObj.hasOwnProperty(selectedNoun)) {
      selectedNounArray = myArraysObj[selectedNoun];
      randomNoun = capitalizeFirstLetter(
        getUniqueRandomWord(selectedNounArray, randomAdjective1, randomAdjective2)
      );
    } else {
      console.error(`Array for noun "${selectedNoun}" not found.`);
      return;
    }
  
      let handOverUser = `${randomAdjective1}${randomAdjective2}${randomNoun}`;
      
      //Filter out dashes/spaces.
      for (let i = 0; i < handOverUser.length; i++) {
          if (handOverUser[i] !== "-" && handOverUser[i] !== " ") {
              newUser += handOverUser[i];
          }
      }
      return [newUser,selectedNoun,adjective1,adjective2]
  }
  