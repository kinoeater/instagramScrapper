const puppeteer = require("puppeteer");

let url = "https://www.instagram.com";
const username = "***";
const password = "***";
async function instagram() {
  //const browser = await puppeteer.launch({ headless: false, devtools: true });
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    devtools: true,
  }); // slow down by 250ms
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', username);
  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');

  await page.waitForSelector('*[class="cq2ai"]');
  await page.goto("https://www.instagram.com/***/", {
    waitUntil: "networkidle2",
  });

  page.waitForTimeout(4000);
  // await page.goto("https://www.instagram.com/stories/***/");
  //await page.click('*[class="_7UhW9 "]');
  await page.click("*[data-testid='user-avatar']");
  debugger;
  await page.waitForSelector("aria-label='Close'");
  await page.evaluate(() =>
    document.querySelector(".y-yJ5").getAttribute("src")
  );

  //const stories =   await page.evaluate(() => Array.from(document.querySelectorAll(".y-yJ5")).map(d => d.getAttribute("src")));

  console.log(stories);
}
instagram();
