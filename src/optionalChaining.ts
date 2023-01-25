type GetTimeFunc = () => Date;

const useTime = (getTimeFunc: GetTimeFunc | undefined) =>{
  const timeOrUndefined = getTimeFunc;
  const time = timeOrUndefined?.();
  console.log(time);
};

const getTime = (): Date =>{
  return new Date();
};

console.log(useTime(undefined));
console.log(useTime(getTime));