export type T1 = {
  tag: "undefined";
  number?: number;
};
export type T2 = {
  tag: "number";
  number: number;
};

type Opetion = T1 | T2;

const objT1: T1 = {
  tag: "undefined",
};
const objT2: T2 = {
  tag: "number",
  number: 0,
};


const getNumber = <T>(element: T, opetion: Opetion) => {
  if (opetion.tag === "undefined") {
    return;
  }
  console.log(element);
};

getNumber(objT1.number, objT1);
getNumber(objT2.number, objT2);
