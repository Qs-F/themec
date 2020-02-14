import { Custom, Themec } from '../themec'
import Color = require('color')
import puppeteer = require('puppeteer-core')

(async () => {
  const browser = await puppeteer.launch({executablePath: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe'})
  const page = await browser.newPage()
  
  const tc = await page.evaluate(() => {

    class Awesome {
      ToCSS(): string {
        return 'white'
      }
    }

    let tc: Themec = new Themec(Color('#00a0c8'))
    let awesome = new Awesome()
    tc.customs.push(new Map<string, Custom>().set('awesome', awesome))

    return tc
  })

  console.log(tc)

  await browser.close();
})()
