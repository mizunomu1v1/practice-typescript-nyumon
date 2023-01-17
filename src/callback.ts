// // 配列と関数を受け取って、各要素に対して関数を実行する
// function map(array: number[], callback: (array: number) => number): number[] {
//   let numberArray: number[] = [];
//   for (const num of array) {
//     numberArray.push(callback(num));
//   }
//   return numberArray;
// }

// 配列と関数を受け取って、各要素に対して関数を実行する
// T型で受け取り、U型で返す
function map<T,U>(array: T[], callback: (value: T) => U): U[] {
  let numberArray: U[] = [];
  for (const i of array) {
    numberArray.push(callback(i));
  }
  return numberArray;
}

const date = [1, 1, 2, 3, 5, 8, 13];
export const result = map(date, (x) => x * 10);
console.log(result);

const date2 = [1, -3, -2, 8, 0, -1];
const result2: boolean[] = map(date2, (x) => x >= 0);
console.log(result2);


