const fs = require('fs-extra');
const path = require('path');

const targSrc  = path.join(__dirname, '..', 'build');
const targDest = path.join(__dirname, '..', '..', '..', 'public', 'home');

;(async () => {
  await fs.remove(targDest);
  await fs.move(targSrc, targDest);
})();