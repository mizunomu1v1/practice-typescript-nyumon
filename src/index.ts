// 型引数
export type Opetion<T> =
  | {
      tag: "none";
    }
  | {
      tag: "some";
      value: T;
    };

export const none: Opetion<undefined> = {
  tag: "none",
};
export const four: Opetion<number> = {
  tag: "some",
  value: 4,
};

export const getNumber = (obj: Opetion<number>) => {
  //   if (opetion.tag === "some") {
  //     console.log(opetion.value);
  //   }
  if (isSome(obj)) {
    console.log(obj.value);
  }
};

//opetionが{tag: "some",value: T}ならtrue
export const isSome = <T>(
  opetion: Opetion<T>
): opetion is { tag: "some"; value: T } => {
  return opetion.tag === "some";
};

export const doubleOption = (obj: Opetion<number>) => {
  return mapOption(obj, (x) => x * 2);
};

export const mapOption = <T, U>(
  obj: Opetion<T>,
  callback: (value: T) => U
): Opetion<U> => {
  return obj.tag === "some"
    ? { tag: obj.tag, value: callback(obj.value) }
    : obj;
};

export const mapOptionSwitch = <T, U>(
  obj: Opetion<T>,
  callback: (value: T) => U
) => {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
};

console.log(doubleOption(none));
console.log(doubleOption(four));

// getNumber(none);
// getNumber(four);