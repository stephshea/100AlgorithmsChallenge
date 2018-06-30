import { NumsEnum } from './example.enum';

type numExample = {num1: number, num2: number };

function add(num1: NumsEnum, num2: NumsEnum): number {
return num1 + num2;

}
console.log(add(NumsEnum.Num1, NumsEnum.Num2));

console.log(2 + 3);
