export type User = {
  name: string;
  age: number;
  premiunUser: boolean;
};

export const date: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

export const users: User[] = [];
export const dateObj = date.split("\n");

for (let i = 0; i < 3; i++) {
  const arr = dateObj[i + 1].split(",");

  const obj = {
    name: arr[0],
    age: parseInt(arr[1]),
    premiunUser: Boolean(Number(arr[2])),
  };
  users.push(obj);
}

console.log(users);

for (const user of users) {
  if (user.premiunUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
  }
}
