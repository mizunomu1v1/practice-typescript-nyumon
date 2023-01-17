type FooBar = {
  foo: string;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const fooBarObj: FooBar = {
  foo: "hi",
};

const fooBarBazObj: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false,
};

// これはいいけど
const okObj: FooBar = fooBarBazObj;

// これはエラーなるよ
// 型 'FooBar' には 型 'FooBarBaz' からの次のプロパティがありません: bar, bazts(2739)
//const errObj: FooBarBaz = fooBarObj;

//-----------------------------------------

// type Animal = {
//     age: number;
// }

// type Human = {
//     age: number;
//     name: string;
// }

// type AnimalFamily = {
//     familyName: string;
//     mother: Animal;
//     father: Animal;
//     child: Animal;
// }

// type HumanFamily = {
//     familyName: string;
//     mother: Human;
//     father: Human;
//     child: Human;
// }

// const mother: Human = {
//     age: 34,
//     name: "さゆり"
// }

// const humanFamilyObj: HumanFamily = {
//     familyName: "cat",
//     mother: mother,
//     father: mother,
//     child: mother,
// }

// const animalObj: AnimalFamily = humanFamilyObj;

//-----------------------------------------

type HasName = {
    name: string
};

type HasNameAndAge = {
    name: string;
    age: number;
}

const fromAge = (age: number): HasNameAndAge => ({
    name: "盛山 晋太郎",
    age,
});

const f: (age: number) => HasName = fromAge;

const obj: HasName = f(100);
// console.log(obj);

//-----------------------------------------

const ShowName = (obj: HasName) =>{
    console.log(obj.name);
};

const g: (obj: HasNameAndAge) => void = ShowName;

g({
    name: "リリー",
    age: 38,
});