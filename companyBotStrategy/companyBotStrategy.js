function companyBotStrategy(trainingData) {
  let answerTime = 0;
  let correctness = 0;
  let botsAverageAnswerTime = 0;
  
  trainingData.forEach((data) => {
    if (data[1] === 1) {
      answerTime += data[0];
      correctness += data[1];
      botsAverageAnswerTime = (answerTime/correctness);
    }      
  });
    return botsAverageAnswerTime;
}
console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));

// for (let i = 0; i < trainingData.length; i++) {
  //     if (trainingData[i][1] > 0) {
  //       num1 += trainingData[i][0];
  //       num2 += trainingData[i][1];
  //       total = (num1/num2);
  //     }
  //     else { 
  //       total = 0;
  //     }
  //   } 