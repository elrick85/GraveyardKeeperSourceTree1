const {SOURCE_TOOLS} = require("./sourceTools");
const puppeteer = require('puppeteer');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const normalizeKey = (key) => {
  return key.replace(/\s/g, '_')
    .toLocaleLowerCase()
    .split('')
    .map((v, i) => i === 0 ? v.toUpperCase() : v)
    .join('')
    .replace('tier_ii', 'tier_II')
    .replace('tier_i', 'tier_I');
}

const createQueue = (arr, cb) => {
  return arr.reduce((res, v) => {
    res = res.then(() => cb(v));
    return res;
  }, Promise.resolve())
}

const data = [];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const queueItemCb = async (tool) => {
    try {
      console.log(tool.key)
      let normalizeKey1 = normalizeKey(tool.key);
      const url = `https://graveyardkeeper.gamepedia.com/${normalizeKey1}`;
      await page.goto(url);
      const imgLink = await page.evaluate(() => {
        const img = document.querySelector('.infoboxtable .infobox-centered .image img')
        if (img) {
          return img.src
        }
        return undefined;
      });

      data.push({
        key: tool.key,
        link: imgLink,
        normalizeKey: normalizeKey1,
        wiki: url
      })

      if(tool.items && tool.items.length) {
        await createQueue(tool.items, queueItemCb)
      }
    } catch (err) {
      console.error(err);
    }
  };

  await createQueue(SOURCE_TOOLS, queueItemCb);

  await browser.close();

  console.log('data', data);
  await writeFile('./server/data.json', JSON.stringify(data))
})();
