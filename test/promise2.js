function thowMessage(waitTime) {
  //改行なしでコンソールを出力
  process.stdout.write(waitTime +"ms後にログを出力します")
  //関数の戻り値としてpromisepオブジェクトを生成する
  var currentTime = 1000
  timer = setInterval(() => {
    process.stdout.write(".")
    currentTime+= 1000
    if (currentTime > waitTime ) {
      clearInterval(timer)
    }
  }, 1000)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("")
      resolve(waitTime +"経過しました")
    }, waitTime)
  })
}

//第３引数=timeoutの時間
thowMessage(process.argv[2]).then((result) => {
  console.log(result)
})
