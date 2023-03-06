import { createInterface } from 'readline';
// import { readFile } from "fs";

// console.log("1.読み込みを開始します");
// readFile("./neko.txt", () => {
//     console.log("3.読み込みました");
// });
// console.log("2.読み込みを開始しました");

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("文字を入力してください",(line)=>{
console.log(`${line}が入力されました`);
rl.close();
});