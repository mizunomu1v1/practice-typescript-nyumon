numberCheak(9);

function numberCheak(num: number): void {

  if (num > 10) {
    console.log(`10以下を入力してください、入力された数字は${num}です。`);
    // 早期リターン
    return;
  }
  {
    //10以下の場合
    //正しい処理をこっちに書く
    console.log(`${num}は10以下です。`);
  }
}
