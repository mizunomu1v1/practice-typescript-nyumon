// 芸人 オブジェクト
type Geinin = {
  name: string;
  age: number;
  combinationName?: string;
  office: string;
};

// 与えられた芸人オブジェクトからnameプロパティを取り出す関数
const getName = (geinin: Geinin): string => {
  return geinin.name;
};

//----------------------------------------------------------------

const geinins: Geinin[] = [
  {
    name: "堂前 透",
    age: 32,
    office: "吉本興業",
    combinationName: "ロングコートダディ",
  },
  {
    name: "兎",
    age: 34,
    office: "吉本興業",
    combinationName: "ロングコートダディ",
  },
  {
    name: "盛山 晋太郎",
    age: 37,
    office: "吉本興業",
    combinationName: "見取り図",
  },
  { name: "リリー", age: 38, office: "吉本興業", combinationName: "見取り図" },
  {
    name: "古川 彰悟",
    age: 32,
    office: "マセキ芸能社",
    combinationName: "サスペンダーズ",
  },
  {
    name: "依藤 たかゆき",
    age: 32,
    office: "マセキ芸能社",
    combinationName: "サスペンダーズ",
  },
  { name: "吉住 ", age: 33, office: "人力舎" },
  { name: "森本サイダー ", age: 33, office: "松竹芸能" },
];

//----------------------------------------------------------------


// 与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成
const names = geinins.map(getName);

console.log(`名前:`, names);

// 直接渡す場合
const names2 = geinins.map((geinin: Geinin): string => geinin.name);

console.log(`名前:`, names2);

// 条件に一致した要素をすべて返す
const pinGeininList = geinins.filter(
  (geinin: Geinin) => geinin.combinationName === undefined
);

console.log(`ピン芸人(filter):`, pinGeininList);

// 条件に一致した最初の要素を返す
const pinGeininList2 = geinins.find(
  (geinin: Geinin) => geinin.combinationName === undefined
);

console.log(`ピン芸人(find):`, pinGeininList2);
