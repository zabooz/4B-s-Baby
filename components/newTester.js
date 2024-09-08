export const newTester = (password) => {
  const options = {
    translations: zxcvbnts["language-en"].translations,
    graphs: zxcvbnts["language-common"].adjacencyGraphs,
    dictionary: {
      ...zxcvbnts["language-common"].dictionary,
      ...zxcvbnts["language-en"].dictionary,
    },
  };
  zxcvbnts.core.zxcvbnOptions.setOptions(options);
  const result = zxcvbnts.core.zxcvbn(password);
  console.log(result);
  displayResult(result);
};




const displayResult = (result) => {
  
  const baseStatsDiv = document.getElementById("baseStats");

  const baseStats = [
    {
      stat: "password",
      value: result.password
    },
    {
      stat: "calcTime",
      value: result.calcTime
    },
    {
      stat: "guesses",
      value: result.guesses
    },
    {
      stat: "score",
      value: result.score
    }
  ];
  
  baseStats.forEach((item) => {
    baseStatsDiv.innerHTML += `<p>${item.stat}: <span>${item.value}</span></p>`;

  })



    const crackTime = document.getElementById("crackTime");

    const crackTimesDisplay = [
      {
        method: "offlineFastHash",
        time: result.crackTimesDisplay.offlineFastHashing1e10PerSecond
      },
      {
        method: "offlineSlowHash",
        time: result.crackTimesDisplay.offlineSlowHashing1e4PerSecond
      },
      {
        method: "onlineNoThrottle",
        time: result.crackTimesDisplay.onlineNoThrottling10PerSecond
      },
      {
        method: "onlineThrottle",
        time: result.crackTimesDisplay.onlineThrottling100PerHour
      }
    ];


  crackTimesDisplay.forEach((item) => {
    crackTime.innerHTML += `<p>${item.method}: <span>${item.time}</span></p>`;

  })

  const feedback = document.getElementById("feedback");

  const feedbackDisplay = [
    {
      type: "warning",
      message: result.feedback.warning
    },
    {
      type: "suggestions",
      message: result.feedback.suggestions
    }
    ]

  feedbackDisplay.forEach((item) => {
    if(item.type === "suggestions"){
      item.message.forEach((suggestion) => {  
        feedback.innerHTML +=`<p>${item.type}: <span>${suggestion}</span></p>`
      })
    }else{
      feedback.innerHTML += `<p>${item.type}: <span>${item.message}</span></p>`;
    }
  })


  const sequence = document.getElementById("sequence");
  const keys = ["guesses","pattern","token"]

  result.sequence.forEach((item) => {
    

    for (const key in item) {
      if(keys.includes(key))
        sequence.innerHTML += `<p>${key}: <span>${item[key]}</span></p>`
    }
  })

};