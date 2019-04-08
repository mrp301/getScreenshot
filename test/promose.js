//promiseTest
console.log("5秒後に結果を返す")

//無名関数の戻り値としてpromiseオブジェクトを返すこともできる
new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve("完了")

    //意図的にエラーを返すこともできる
    //throw new Error('エラーメッセージ！');
  }, 5000)
}).then((result) => {
  console.log(result)
}).catch((e) => {
  //promise中のerrorをここでキャッチできる
  console.log(e)
})
