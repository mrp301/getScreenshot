//asyncをつけると必ずPromiseオブジェクトを返す様になる。
//resovbe、regect以外の値をreturnした場合、resolveで返したことになる
//awaitは .then((resuot)=>{})を省略したものと考えて良さそう。

async function log(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("aaa")
    }, 3000)
  })
}
//Promiseの書き方
log().then((result)=> {
  console.log(result)
})
//awaitの書き方。結果は同じ
async function start(){
  //message undefind
  //console.log("await前："+ message)

  message = await log()
  //awaitの処理が完了するまでconsole.logは実行されない
  console.log("await後："+ message)
}

start()
