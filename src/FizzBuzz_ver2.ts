// 引数を基にFizzBuzzを判定する
const getFizzBuzzString = (num: number): string => {
  let result: string = "";
  if (num % 3 === 0 && num % 5 === 0) {
    result = `FizzBuzz`;
  } else if (num % 3 === 0) {
    result = `Fizz`;
  } else if (num % 5 === 0) {
    result = `Buzz`;
  } else {
    result = `${num}`;
  }
  return result;
};

// 引数を基に連番の配列を作る
const sequence = (startNumber: number, endNumber: number): number[] => {
    const numberArr:number[] = [];
    for (let i: number = startNumber; i <= endNumber; i++){
        numberArr.push(i);
    }
    return  numberArr;
}

for (const num of sequence(1,100)) {
  const message = getFizzBuzzString(num);
  console.log(message);
}
