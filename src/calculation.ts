// type Human = {
//     height: number;
//     weight: number;
// };

// // const calcBMI = function(human: Human): number {
// //     return human.weight / human.height ** 2;
// // };

// // const calcBMI = (human: Human): number => {
// //     return human.weight / human.height ** 2;
// // };

// // const calcBMI = (human:Human): number =>{
// //     return human.weight / human.height ** 2;
// // };

// //分割代入するなら
// const calcBMI = ({weight,height}:Human): number =>{
//     return weight / height ** 2;
// };

// const uhyo: Human = {
//     height: 1.84,
//     weight: 72
// };

// console.log(calcBMI(uhyo));

type NumberObj = {
  num1: number;
  num2: number;
};

export const inputNum: NumberObj = {
  num1: 100,
  num2: 200,
};

const calculation = {
  //普通に書く
  numberMinus({ num1, num2 }: NumberObj): number { return num1 - num2;},
  //アロー関数式
  numberAdd: ({ num1, num2 }: NumberObj): number => num1 + num2,
};

console.log(`引き算結果は${calculation.numberMinus(inputNum)}です。`);
console.log(`足し算結果は${calculation.numberAdd(inputNum)}です。`);

