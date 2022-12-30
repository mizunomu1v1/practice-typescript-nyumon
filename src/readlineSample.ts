import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('数値を入力してください:',(line)=>{
    // console.log(`${line}が入力されました`);
    const num = Number(line);
    console.log(num+1000);
    rl.close();
})