const app = require('./app');
const { port } = require('./../config');

app.listen(port, () => {
  console.log('\x1b[32m%s\x1b[0m', `Booted and listening on port ${port}`); // eslint-disable-line
});
