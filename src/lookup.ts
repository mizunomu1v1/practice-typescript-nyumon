export type Human = {
  type: "human";
  name: string;
  age: number;
};

/**
 * ageをセットする関数
 *  @param human Human
 *  @param age 　lookup型（number） 実際はHuman型のageプロパティの型
 * 　　　　　　　…元の型が変わってもこれならOK。
 */
const setAge = (human: Human, age: Human["age"]) => {
  return {
    ...human,
    age,
  };
};

const blow: Human = {
  type: "human",
  name: "blow",
  age: 18,
};

const blow2 = setAge(blow, 19);
console.log(blow2);
