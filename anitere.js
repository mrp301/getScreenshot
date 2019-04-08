const fs = require('fs');
const assert = require('assert');
const puppeteer = require('puppeteer');
const Jimp = require("jimp");

function pose() {
  return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}


async function getScreenShot (url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({
          width: 2000,
          height: 1000
        });
  var element = await page.$('#player-ctrl-block')
  //await page.mouse.click(400,100);
  //await page.mouse.click(103,200);
  await page.mouse.move(0, 0, { steps: 1 });
  await page.evaluate(() => {
    const video = document.querySelector('video');
    const btn = $("#player-ctrl-block")
    btn.click()
    video.play()
    //video.currentTime = 300
  });
  await pose()
  await pose()
  await console.log("loading....")
  var count = 1;
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await pose()
  await count++
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  var element = await page.$('#movie_player')
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()

  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  var element = await page.$('#movie_player')
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })

  await colorGet('screenshot'+ count +'.png', count)
  await count++
  await pose()
  await page.screenshot({
    path: 'screenshot'+ count +'.png',
  })
  await colorGet('screenshot'+ count +'.png', count)

  await browser.close();
  await console.log(' 🎉 ');
  return
}

function colorGet(data, count){
  var stop = 0
  Jimp.read(data, function (err, image) {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        //var rgb = String(this.bitmap.data[ idx + 0 ])+ "," + String(this.bitmap.data[ idx + 1 ])+ "," + String(this.bitmap.data[ idx + 2 ]);
        var rgb = this.bitmap.data[ idx + 0 ]+ "," + String(this.bitmap.data[ idx + 1 ])+ "," + String(this.bitmap.data[ idx + 2 ]);

        r = betweenR(this.bitmap.data[ idx + 0 ], 255)
        g = betweenG(this.bitmap.data[ idx + 1 ], 168)
        b = betweenB(this.bitmap.data[ idx + 2 ], 193)

        if(r && g && b) {
          if( stop === 0 ){
            image.write("mirai/"+ count +".png")
            stop = 1
            console.log(count +"：桃山みらいを保存")
            console.log("桃山みらい"+ count)
            count++
            return
          }
        }
      })
    })
  if(stop === 0 ){
    console.log(count+"：桃山みらいじゃない")
  }

}
//255,168,193
//231, 98, 145

//253.231,223
function betweenR (value, sample){
  var min = sample - 1
  var max = sample + 1
  //if( min<=value && max<=256 ) {
  if( value===255 ) {
    return true
  } else {
  return false
  }
}

function betweenG (value, sample){
  var min = sample - 1
  var max = sample + 1
  //if( 167<=min && max<=169 ) {
  if( value===168 ) {
    return true
  } else {
  return false
  }
}

function betweenB (value, sample){
  var min = sample - 1
  var max = sample + 1
  //if( min<=value && value<=max ) {
  if( value===193 ) {
    return true
  } else {
  return false
  }
}

function betweenD (value, sample){
  var min = sample - 1
  var max = sample + 4
  if( min<=value && value<=max ) {
    return true
  } else {
  return false
  }
}

getScreenShot(process.argv[2]);

//https://www.youtube.com/watch?v=Kt7U-1tPSMA&t=1026s
//プリチャン1
//https://www.youtube.com/watch?v=dieqknxURmg
