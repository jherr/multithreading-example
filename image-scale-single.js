const jimp = require('jimp');

module.exports = (img) => new Promise(async (resolve, reject) => {
  console.log(`Starting ${img}`);
  const outImg = img.replace('.jpeg', '_small.jpeg');
  try {
    const imgObj = await jimp.read(img);
    imgObj
      .scale(0.1)
      .quality(60)
      .write(outImg);
    console.log(`Ending ${img}`);
    resolve(outImg);
  } catch (err) {
    reject(err);
  }
});
