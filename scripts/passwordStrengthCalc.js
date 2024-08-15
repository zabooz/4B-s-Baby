

export async function passwordStrength(pwd) {
  let result;
  let count = pwd.length * 1.5;
  const pointsForDiffrentSigns = 5;
  const malusForConsecutiveIdenticalSigns = 2;
  const malusForConsecutiveSigns = 1;
  const malusForRepeatedIdenticalSigns = 2;
  const malusForRepeatedSigns = 1;

  let usedWords = 0;

  const repeatMalus = 3;
  let timesRepeated = 0;

  const weak = 20;
  const mediocre = 30;
  const strong = 40;
  const veryStrong = 50;

  const checkIfWord = async (pwd) => {
    pwd = pwd.toLowerCase();

    let startIndex = 0;
    for (let i = 0; i < pwd.length; i++) {
      const pwdSlice = pwd.slice(startIndex, i + 3);
      try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${pwdSlice}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("word not found", response.Error);
        if (response.ok) {
          usedWords = 10;

          break;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  if (sonderzeichen.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
  }
  if (kleinbuchstaben.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
  }
  if (grossbuchstaben.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
  }
  if (zahlen.some((z) => pwd.includes(z))) {
    count += pointsForDiffrentSigns;
  }

  for (let i = 0; i < pwd.length - 2; i++) {
    const charCodeOne = pwd.charCodeAt(i);
    const charCodeTwo = pwd.charCodeAt(i + 1);
    const charCodeThree = pwd.charCodeAt(i + 2);

    const charCodeOneCaseInsensitive = pwd.toLowerCase().charCodeAt(i);
    const charCodeTwoCaseInsensitive = pwd.toLowerCase().charCodeAt(i + 1);
    const charCodeThreeCaseInsensitive = pwd.toLowerCase().charCodeAt(i + 2);

    if (charCodeOne === charCodeTwo && charCodeThree === charCodeTwo) {
      count -= malusForRepeatedIdenticalSigns;
      timesRepeated++;
    } else if (
      charCodeOneCaseInsensitive === charCodeTwoCaseInsensitive &&
      charCodeTwoCaseInsensitive === charCodeThreeCaseInsensitive
    ) {
      count -= malusForRepeatedSigns;
      timesRepeated++;
    } else if (!sonderzeichen.some((z) => pwd[i].includes(z))) {
      if (
        charCodeOne + 1 === charCodeTwo &&
        charCodeTwo + 1 === charCodeThree
      ) {
        count -= malusForConsecutiveIdenticalSigns;
        timesRepeated++;
      } else if (
        charCodeOneCaseInsensitive + 1 === charCodeTwoCaseInsensitive &&
        charCodeTwoCaseInsensitive + 1 === charCodeThreeCaseInsensitive
      ) {
        count -= malusForConsecutiveSigns;
        timesRepeated++;
      }
    }
  }

  await checkIfWord(pwd);

  count -= repeatMalus * timesRepeated + usedWords;
  console.log(pwd, pwd.length, count, timesRepeated, "Userwords: ", usedWords);

  count = count < 0 ? 0 : count;

  let color;

  if (count <= weak) {
    result = 1;
    color = "red";
  } else if (count < mediocre) {
    result = 2;
    color = "orange";
  } else if (count < strong) {
    result = 3;
    color = "yellow";
  } else if (count < veryStrong) {
    result = 4;
    color = "green";
  } else {
    result = 5;
    color = "green";
  }

  for (let i = 0; i < 5; i++) {
    document.getElementById("strengthBar").children[i].style.backgroundColor =
      "white";
  }

  for (let i = 0; i < result; i++) {
    document.getElementById("strengthBar").children[i].style.backgroundColor =
      color;
  }

  return { result };
}


