import { generateUser } from "../featureHtmlScripts/newUserGenerator.js";
import { rndNumInLen } from "../scripts/encoder.js";

const answerObj = {
  question1: {
    q1a1: ["temperatures", "weatherTypes"],
    q1a2: ["textures", "tastes"],
    q1a3: ["qualities", "sizes"],
    q1a4: ["speeds", "ages"],
  },
  question2: {
    q2a1: ["colors", "intensities"],
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
  } while (selectedAdjectiveGroups.length > 1 && adjective1 === adjective2); // Ensure adjective2 is different

  const noun = selectedNounGroups[rndNumInLen(selectedNounGroups)];

  // Pass the names of the arrays as strings to generateUser
  return generateUser(adjective1, adjective2, noun);
}
