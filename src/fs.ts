import * as fs  from "fs";

const file = fs.readFileSync("./neko.txt", 'utf8');

console.log(file);

// 一致結果のArrayを取得する
const num = (file.match( /neko/g ) || [] ).length ;
console.log(num);

//別解
let count = 0;
let currentIndex = 0;

while(true){
   const nextindex = file.indexOf("neko",currentIndex);
   if(nextindex >= 0){
    count++;
    currentIndex = nextindex +1;
   }else{
    break;
   }
}
console.log(count);