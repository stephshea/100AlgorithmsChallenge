function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let dif: number = Math.abs(inputArray[i] - inputArray[i + 1]);
            maxDiff = dif > maxDiff ?  dif : maxDiff;  
    }
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 9, 5]));