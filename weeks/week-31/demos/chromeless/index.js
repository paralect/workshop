const { Chromeless } = require('chromeless');
const chromeless = new Chromeless();

(async () => {

  const screenshot = await chromeless
    .goto('https://www.paralect.com/')
    .wait('#carousel-container')
    .screenshot();

  console.log(screenshot);

  await chromeless.end();

})();
