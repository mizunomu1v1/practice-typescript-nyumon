export class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }

  public filterOlder(users: readonly User[]): User[] {
    return users.filter((user) => user.#age > this.#age);
  }
}

const userBlow = new User("blow", 18);
const userRin = new User("rin", 19);
const userMariya = new User("mariya", 20);

const users: User[] = [];
users.push(userBlow, userRin, userMariya);

//　リンちゃんより年上だけフィルターされる(リンちゃんからできたオブジェクトなので、thisはもそこ基準)
console.log(userRin.filterOlder(users));
