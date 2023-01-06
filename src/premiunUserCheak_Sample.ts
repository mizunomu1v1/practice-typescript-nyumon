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
const lines = date.split("\n");

for (const line of lines) {
  if (line === "") {
    continue;
  }
  const [name, ageString, premiunUserString] = line.split(",");
  const age = parseInt(ageString);
  const premiunUser = premiunUserString === "1";

  users.push({
    name,
    age,
    premiunUser,
  });
}

for (const user of users) {
  if (user.premiunUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
  }
}
