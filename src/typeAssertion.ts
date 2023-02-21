type Animal = {
  tag: "animal";
  species: string;
};
type Human = {
  tag: "human";
  name: string;
};
export type User = Animal | Human;

const getNamesIfAllHuman = (users: readonly User[]): string[] | undefined => {
  // everyメソッドは配列の要素にすべて合致すればt、しなければf
  if (users.every((user) => user.tag === "human")){
    // as Human[]をつけないとエラーなる
    return (users as Human[]).map((user) => user.name)
  }
  return undefined;
};
