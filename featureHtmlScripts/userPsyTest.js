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
  allNouns,
} from "/data/englishGenerator.data.js";
import { generateUser } from "../featureHtmlScripts/newUserGenerator.js";
import { rndNumInLen } from "../scripts/encoder.js";
/*Pick whatever appeals to your the most without thinking about it too much
1. Which food group appeals to you the most?
    a. fruits&vegetables
    b. beverages
    c. desserts
    d. food in general
2. What activity do you like the most?
    a. drawing - colors
    b. working with your hands - shapes/textures
    c. acting - emotions/qualities
    d. music - sounds/speeds
3. What is most important to you?
    a. not being hot or cold - temperatures
    b. being comfortable - textures
    c. knowing yourself - qualities/sizes
    d. time is of the essence - speeds
4. What do you prefer?
    a. instruments
    b. flowers
    c. vehicles
    d. tools
5. What interests you the most?
    a. animals
    b. fantasyCreatures
    c. fantasyRaces
    d. none of the above - occupations*/

const answerObj = {
  question1: {
    q1a1: "temperatures",
    q1a2: "textures",
    q1a3: ["qualities", "sizes"],
    q1a4: "speeds",
  },
  question2: {
    q2a1: "colors",
    q2a2: ["shapes", "textures"],
    q2a3: ["emotions", "qualities"],
    q2a4: ["sounds", "speeds"],
  },
  question3: {
    q3a1: ["fruits", "vegetables"],
    q3a2: "beverages",
    q3a3: "desserts",
    q3a4: "food",
  },
  question4: {
    q4a1: "instruments",
    q4a2: "flowers",
    q4a3: "vehicles",
    q4a4: "tools",
  },
  question5: {
    q5a1: "animals",
    q5a2: "fantasyCreatures",
    q5a3: "fantasyRaces",
    q5a4: "occupations",
  },
};

export function generateQuizResult() {
  const selectedAdjectiveGroups = [];
  const selectedNounGroups = [];

  // Loop over the questions
  for (let i = 1; i <= 5; i++) {
    const selectedAnswer = document.querySelector(
      `input[name="question${i}"]:checked`
    );

    if (selectedAnswer) {
      const answerKey = selectedAnswer.id;

      // Retrieve the corresponding group names (as strings) from the answerObj using the ID
      const groups = answerObj[`question${i}`][answerKey];

      // Distribute groups into adjective or noun categories
      if (i < 3) {
        if (Array.isArray(groups)) {
          selectedAdjectiveGroups.push(...groups);
        } else {
          selectedAdjectiveGroups.push(groups);
        }
      } else {
        if (Array.isArray(groups)) {
          selectedNounGroups.push(...groups);
        } else {
          selectedNounGroups.push(groups);
        }
      }
    } else {
      console.log(`No option selected for question ${i}`);
    }
  }

  // Randomly select the names of the adjective1, adjective2, and noun arrays
  const adjective1 =
    selectedAdjectiveGroups[rndNumInLen(selectedAdjectiveGroups)];
  let adjective2;
  do {
    adjective2 = selectedAdjectiveGroups[rndNumInLen(selectedAdjectiveGroups)];
  } while (adjective1 === adjective2); // Ensure adjective2 is different

  const noun = selectedNounGroups[rndNumInLen(selectedNounGroups)];

  // Pass the names of the arrays as strings to generateUser
  return generateUser(adjective1, adjective2, noun);
}

// const testObj = {
//   colors: {
//     creative: true,
//     vibrant: true,
//     elegant: true,
//   },
//   shapes: {
//     creative: true,
//     symmetrical: true,
//     elegant: true,
//     dynamic: false,
//     versatile: true,
//   },
//   textures: {
//     creative: false,
//     elegant: false,
//     dynamic: true,
//     exotic: true,
//   },
//   sizes: {
//     dynamic: true,
//     versatile: false,
//     elegant: false,
//     creative: false,
//     exotic: false,
//   },
//   emotions: {
//     intense: true,
//     dynamic: true,
//     creative: false,
//     elegant: false,
//     exotic: false,
//   },
//   tastes: {
//     exotic: true,
//     dynamic: false,
//     creative: false,
//     elegant: false,
//     versatile: false,
//   },
//   sounds: {
//     melodic: true,
//     dynamic: true,
//     creative: true,
//     elegant: true,
//     exotic: false,
//   },
//   temperatures: {
//     dynamic: true,
//     versatile: false,
//     creative: false,
//     elegant: false,
//     exotic: false,
//   },
//   speeds: {
//     dynamic: true,
//     versatile: false,
//     creative: false,
//     elegant: false,
//     exotic: false,
//   },
//   qualities: {
//     versatile: true,
//     creative: true,
//     dynamic: false,
//     elegant: false,
//     exotic: false,
//   },
//   weatherTypes: {
//     dynamic: true,
//     exotic: false,
//     creative: false,
//     elegant: false,
//     versatile: false,
//   },
//   instruments: {
//     versatile: true,
//     creative: true,
//     melodic: true,
//     elegant: true,
//     dynamic: false,
//   },
//   fruits: {
//     exotic: true,
//     creative: false,
//     versatile: false,
//     elegant: false,
//     dynamic: false,
//   },
//   animals: {
//     exotic: true,
//     dynamic: true,
//     creative: false,
//     versatile: false,
//     elegant: false,
//   },
//   fantasyCreatures: {
//     creative: true,
//     exotic: true,
//     dynamic: false,
//     elegant: false,
//     versatile: false,
//   },
//   vegetables: {
//     versatile: false,
//     exotic: false,
//     creative: false,
//     elegant: false,
//     dynamic: false,
//   },
//   rpgClasses: {
//     versatile: true,
//     creative: true,
//     dynamic: true,
//     exotic: false,
//     elegant: false,
//   },
//   fantasyRaces: {
//     exotic: true,
//     creative: true,
//     dynamic: false,
//     elegant: false,
//     versatile: false,
//   },
//   occupations: {
//     versatile: true,
//     creative: true,
//     dynamic: false,
//     elegant: false,
//     exotic: false,
//   },
//   vehicles: {
//     dynamic: true,
//     versatile: true,
//     elegant: true,
//     creative: false,
//     exotic: false,
//   },
//   food: {
//     exotic: true,
//     creative: false,
//     versatile: false,
//     elegant: false,
//     dynamic: false,
//   },
//   tools: {
//     versatile: true,
//     creative: true,
//     dynamic: false,
//     elegant: false,
//     exotic: false,
//   },
//   beverages: {
//     exotic: true,
//     creative: false,
//     versatile: false,
//     elegant: false,
//     dynamic: false,
//   },
//   clothingItems: {
//     elegant: true,
//     creative: true,
//     exotic: false,
//     dynamic: false,
//     versatile: false,
//   },
//   bodyParts: {
//     versatile: false,
//     dynamic: true,
//     exotic: false,
//     elegant: false,
//     creative: false,
//   },
//   flowers: {
//     elegant: true,
//     exotic: true,
//     creative: false,
//     dynamic: false,
//     versatile: false,
//   },
//   desserts: {
//     exotic: true,
//     creative: true,
//     elegant: false,
//     dynamic: false,
//     versatile: false,
//   },
// };
