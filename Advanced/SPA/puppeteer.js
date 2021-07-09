// Basic example of crawling a SPA with Puppeteer.
// Usage:
// $ node puppeteer.js
// https://github.com/puppeteer/puppeteer
// https://andrejsabrickis.medium.com/scrapping-the-content-of-single-page-application-spa-with-headless-chrome-and-puppeteer-d040025f752b
const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5000/about/');
    await page.waitForSelector('#app', { timeout: 1000 });

    // const body = await page.evaluate(() => {
    //   return document.querySelector('body').innerHTML;
    // });
    // console.log(body);

    const html = await page.content();
    console.log(html);

    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
