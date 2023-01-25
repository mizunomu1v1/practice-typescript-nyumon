type Human = Animal & {
  name: string;
};

type Animal = {
  species: string;
};

export const getName = (human: Human)=>{
  return human.name;
};

export const getSpecies = (animal: Animal)=>{
  return animal.species;
};

type mystery = Animal & Human;
const mystery = {
  name: "yes",
  species: "usagi"
} 

const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
console.log(mysteryFunc(mystery));