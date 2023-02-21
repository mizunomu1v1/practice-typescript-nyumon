// オブジェクトのプロパティを名を受け取って中身を返す関数
// extendsを型引数の後ろにつけると、Kを必ずTの部分型にする制約がつく
// 今回は'type'型はsugarRushの部分型であれ！ということ
// 意味としては変なのkeyに持ってこないように。
export const cocktailGet = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  // オブジェクトの中のプロパティ値を取得する
  return obj[key];
};

type Cocktail = {
  adelhyde?: number;
  bronsonExtract?: number;
  powderedDelta?: number;
  flanergide?: number;
  karmotrine?: number;
  type: string[];
};

let karmotrine;
const setkarmotrine = (quantity: number) => {
  karmotrine = quantity;
};

setkarmotrine(4);
const sugarRush: Cocktail = {
  adelhyde: 2,
  powderedDelta: 1,
  karmotrine: karmotrine,
  type: ["甘め", "ガーリー", "ハッピー"],
};

const cocktailType = cocktailGet(sugarRush, "type");
// const get: <Cocktail, "type">(obj: Cocktail, key: "type") => string[]
console.log(`シュガーラッシュは${cocktailType}なカクテルです。`);
// [console]シュガーラッシュは甘め,ガーリー,ハッピーなカクテルです。

const karmotrineQuantity = cocktailGet(sugarRush, "karmotrine");
// const get: <Cocktail, "karmotrine">(obj: Cocktail, key: "karmotrine") => number | undefined
console.log(`カルモトリンは${karmotrineQuantity}%含まれています。`);
// [console]カルモトリンは4%含まれています。
