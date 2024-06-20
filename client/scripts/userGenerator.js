import {colors, shapes, textures, sizes, emotions, tastes, sounds, temperatures, speeds, qualities, weatherTypes, instruments, fruits, animals, fantasyCreatures, vegetables, rpgClasses, fantasyRaces, occupations, vehicles, sports, tools, beverages, clothingItems, bodyParts, flowers, desserts} from './generatorData.js'
import { generateEncodingKey } from './scripts/encoder.js'
//Generates a user name based on select input

function generateUser(adjective1, adjective2, selectedNoun) {
    let newUser = "";
    
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
        fantasyRaces: fantasyCreatures, 
        occupations: occupations, 
        vehicles: vehicles, 
        sports: sports, 
        tools: tools, 
        beverages: beverages, 
        clothingItems: clothingItems, 
        bodyParts: bodyParts, 
        flowers: flowers, 
        desserts: desserts
    }
    let selectedAdjectiveArray, selectedNounArray;

    // Determine which array to select based on adjective1
    if (myArraysObj.hasOwnProperty(adjective1)) {
        selectedAdjectiveArray = myArraysObj[adjective1];
        const randomAdjective1 = selectedAdjectiveArray[generateEncodingKey(selectedAdjectiveArray)];
        
    } else {
        // Handle default case or error if needed
        console.error(`Array for adjective1 "${adjective1}" not found.`);
        return;
    }
    // Determine which array to select based on adjective2
    if (myArraysObj.hasOwnProperty(adjective2)) {
        selectedAdjectiveArray = myArraysObj[adjective2];
        const randomAdjective2 = selectedAdjectiveArray[generateEncodingKey(selectedAdjectiveArray)];
        
    } else {
        // Handle default case or error if needed
        console.error(`Array for adjective2 "${adjective2}" not found.`);
        return;
    }
    // Determine which array to select based on noun
    if (myArraysObj.hasOwnProperty(noun)) {
        selectedNounArray = myArraysObj[noun];
        const randomNoun = selectedNounArray[generateEncodingKey(selectedNounArray)];
        
    } else {
        // Handle default case or error if needed
        console.error(`Array for noun "${noun}" not found.`);
        return;
    }
    newUser = `${randomAdjective1} ${randomAdjective2} ${randomnoun}`;

    return newUser;
}




