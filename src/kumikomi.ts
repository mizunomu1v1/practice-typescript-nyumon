// ...配列型は、その部分にその配列型の要素が任意個入ることを示す
type NumberAndStrings = [number, ...string[]];

const arr1: NumberAndStrings = [25, "blow", "rin", "maliya"];
// 0個もOK
const arr2: NumberAndStrings = [25];

// 別の型を展開できる
type Animals = ["neko", "inu", "usagi"];
type AnimalMember = ["alpaca", ...Animals];
// type AnimalMember = ["alpaca", "neko", "inu", "usagi"]

//---------------------

// T1にのプロパティをすべてReadonlyに
type T1 = Readonly<{
  name: string;
  age: number;
}>;

// T2のプロパティをすべてオプショナルに
type T2 = Partial<{
  name: string;
  age: number;
}>;

// T3のプロパティから一部をピックアップして新しいオブジェクト作る
type T3 = Pick<
  {
    name: string;
    age: number;
  },
  "age"
>;

// T4のプロパティから一部を取り除いた新しいオブジェクト作る
type T4 = Omit<
  {
    name: string;
    age: number;
  },
  "age"
>;

type Union = "te" | "st" | 1 | 2 | undefined;
// Unionからstring型のみ抜き出した新しいユニオン型作る
type T5 = Extract<Union, string>;

// Unionからstring型を取り除いた新しいユニオン型作る
type T6 = Exclude<Union, string>;

// Unionからundefined、nullを取り除いた新しいユニオン型作る
type T7 = NonNullable<Union>;