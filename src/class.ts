export class User {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空に出来ません");
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name}(${this.age})「${message}」`;
  }
}

const userBlow = new User("ブロウ", 18);
console.log(userBlow.getMessage("ブロウちゃんだよ！"));


// ★書き換え前
// export type User = {
//   name: string;
//   age: number;
// }

// function createUser(name: string, age: number): User {
//   if(name === ""){
//     throw new Error("名前は空に出来ません");
//   }
//   return {name, age}
// }

// function getMessage(user: User, message: string): string {
//   return `${user.name}(${user.age})「${message}」`;
// }

// const userBlow = createUser("blow", 18);
// console.log(getMessage(userBlow, "ブロウちゃんだよ！"))