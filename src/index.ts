export const startTime = performance.now();

// 第1引数：コールバック関数
// 第2引数：数値（ミリ秒数）
setTimeout(() => {
    const endTime = performance.now();
    console.log("タイマー呼ばれた");
    console.log(`${endTime - startTime}ミリ秒かかった`);
}, 3000);
console.log("タイマー設定");
