
function centuryFromYear(year) {
    let century = year/100;
    if(Number.isInteger(century)){
        return Math.floor(century);
    }
    return Math.floor(century) + 1;
}    
console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
