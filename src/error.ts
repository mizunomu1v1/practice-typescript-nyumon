const throwError = () => {
  throw new Error("エラーが発生しました");
};

try {
  console.log("エラー発生させるぞ！");
  throwError();
  console.log("エラー発生させました");
} catch (err) {
  console.log("catshのなか");
  console.log(err);
} finally {
  console.log("finallyのなか");
}
console.log("tryの後ろ");
