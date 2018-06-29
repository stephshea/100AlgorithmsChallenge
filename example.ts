import { NumsEnum } from './example.enum';

const example: any[] = [1, 2, 3, 4, 5, true];

let ex2 = example.map(element => {
  return element +1;
});

function add(num1: NumsEnum, num2: NumsEnum): number {
return num1 + num2;

}
console.log(add(NumsEnum.Num1, NumsEnum.Num2));

console.log(2 + 3);
