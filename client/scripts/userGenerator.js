import {colors, shapes, textures, sizes, emotions, tastes, sounds, temperatures, speeds, qualities, weatherTypes, instruments, fruits, animals, fantasyCreatures, vegetables, rpgClasses, fantasyRaces, occupations, vehicles, sports, tools, beverages, clothingItems, bodyParts, flowers, desserts, contentArray1, contentArray2} from './generator.data.js'
import { generateEncodingKey } from './encoder.js';

export function generateUser(adjective1, adjective2, selectedNoun) {
    
    let newUser = "";
    let randomAdjective1, randomAdjective2, randomNoun;
    if (adjective1 === 'random'){
        adjective1 = contentArray1[generateEncodingKey(contentArray1)]
    }
    if (adjective2 === 'random'){
        adjective2 = contentArray1[generateEncodingKey(contentArray1)]
    }
    if (selectedNoun === 'random'){
        selectedNoun = contentArray2[generateEncodingKey(contentArray2)]
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
        sports: sports, 
        tools: tools, 
        beverages: beverages, 
        clothingItems: clothingItems, 
        bodyParts: bodyParts, 
        flowers: flowers, 
        desserts: desserts
    };
    let selectedAdjectiveArray, selectedNounArray;

    // Function to generate a unique word from the array
    function getUniqueRandomWord(array, ...existingWords) {
        let randomWord;
        do {
            randomWord = array[generateEncodingKey(array)];
        } while (existingWords.includes(randomWord));
        return randomWord;
    }

    // Determine which array to select based on adjective1
    if (myArraysObj.hasOwnProperty(adjective1)) {
        selectedAdjectiveArray = myArraysObj[adjective1];
        randomAdjective1 = getUniqueRandomWord(selectedAdjectiveArray);
    } else if(adjective1 === "") {
        randomAdjective1 = "";
    } else {
        console.error(`Array for adjective1 "${adjective1}" not found.`);
        return;
    }

    // Determine which array to select based on adjective2
    if (myArraysObj.hasOwnProperty(adjective2)) {
        selectedAdjectiveArray = myArraysObj[adjective2];
        randomAdjective2 = getUniqueRandomWord(selectedAdjectiveArray, randomAdjective1);
    } else if(adjective2 === "") {
        randomAdjective2 = "";
    } else {
        console.error(`Array for adjective2 "${adjective2}" not found.`);
        return;
    }

    // Determine which array to select based on noun
    if (myArraysObj.hasOwnProperty(selectedNoun)) {
        selectedNounArray = myArraysObj[selectedNoun];
        randomNoun = getUniqueRandomWord(selectedNounArray, randomAdjective1, randomAdjective2);
    } else {
        console.error(`Array for noun "${selectedNoun}" not found.`);
        return;
    }

    newUser = `${randomAdjective1}${randomAdjective2}${randomNoun}`;
    console.log(newUser);
    return newUser;
}




