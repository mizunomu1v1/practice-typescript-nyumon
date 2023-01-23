const createUserArrow = (name: string, age: number):(message:string)=> string =>{
  return (message: string): string => `${name}(${age})「${message}」`;
}

function createUser(name: string, age: number) {
  return (message: string):string => {
    return `${name}(${age})「${message}」`;
  };
}

const getMessage = createUser("ブロウ", 18);
console.log(getMessage("ブロウちゃんだよ！"));
