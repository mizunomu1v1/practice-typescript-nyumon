type HasAge = {
  age: number;
};

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const getPrice = (customer: HasAge): number => {
  if (customer instanceof User) {
    if (customer.name === "blow") {
      return 0;
    }
  }
  return customer.age < 18 ? 1000 : 1800;
};

const age: HasAge = {
  age: 18,
};
console.log(getPrice(age));

const userBlow = new User("blow",18);
console.log(getPrice(userBlow));

const userRin = new User("rin",18);
console.log(getPrice(userRin));