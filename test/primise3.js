//promiseAll

const promise1 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("primise1:Done!")
  },1000)
})

const promise2 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("primise2:Done!")
  },5000)
})

const promise3 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("primise3:Done!")
  },3000)
})

//resultは配列
//1つでもエラーになるとその時点で処理を終了する
Promise.all([promise1, promise2, promise3]).then((result)=>{
  result.forEach((value, index)=>{
    console.log(index +"："+ value)
  })
}).catch((e)=>{
})
