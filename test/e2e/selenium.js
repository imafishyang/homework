const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.baidu.com/');
    await driver.findElement(By.name('wd')).sendKeys('1234', Key.RETURN);
    await driver.wait(until.titleIs('1234_百度搜索'), 1000);
  } finally {
    await driver.quit();
  }
})();