/* eslint-disable @typescript-eslint/no-var-requires */
const process = require('process');

const product = process.env.PRODUCT || 'demo';
const server = `./packages/${product}/dist/server/index`;

process.chdir(`packages/${product}`);

return require(server);
