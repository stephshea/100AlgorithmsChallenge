function alternatingSums(a) {
    var evenSum = 0;
    var oddSum = 0;
    a.forEach(function (element, index) {
        if (index % 2 === 0) {
            evenSum += element;
        }
        else {
            oddSum += element;
        }
    });
    return [evenSum, oddSum];
}
console.log(alternatingSums([50, 60, 60, 45, 70]));
