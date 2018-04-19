const {Builder, By,  until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:30001/index/index');
    const countObj=driver.findElement(By.className('count'));
    const countNum = countObj.get_attribute('textContent');
    await driver.findElement(By.className('container')).click();
    
    driver.wait(countNum = countObj.get_attribute('textContent')-1, 1000);
  } finally {
    await driver.quit();
  }
})();