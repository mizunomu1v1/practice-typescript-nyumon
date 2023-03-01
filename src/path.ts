import fs from "fs";
import path from "path";
import url from "url";

// 実行中のファイルのパスを取得
const _filePath = url.fileURLToPath(import.meta.url);
const fileDir = path.dirname(_filePath);
console.log(fileDir); // E:\mizunomu1v1\work\practice-typescript-nyumon\dist

const filePath = path.join(fileDir,"../neko.txt");
console.log(filePath); // E:\mizunomu1v1\work\practice-typescript-nyumon\neko.txt

const file = fs.readFileSync(filePath, "utf8");
console.log(file);

// 一致結果のArrayを取得する
const num = (file.match(/neko/g) || []).length;
console.log(num);

//別解
let count = 0;
let currentIndex = 0;

while (true) {
  const nextindex = file.indexOf("neko", currentIndex);
  if (nextindex >= 0) {
    count++;
    currentIndex = nextindex + 1;
  } else {
    break;
  }
}
console.log(count);
