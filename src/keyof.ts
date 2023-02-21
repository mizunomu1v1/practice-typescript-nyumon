export type Human = {
  name: string;
  age: number;
};

// keyof HumanでHumanKeys型ができた！
// Humanオブジェクトはnameとageなので、keyof Humanは"name": "age"型の意味
// プロパティは文字列のリテラル型となる
type HumanKeys = keyof Human;

// 文字列"name"か"age"が代入可能
let key: HumanKeys = "name";
key = "age";
