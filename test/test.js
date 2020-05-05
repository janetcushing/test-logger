const logger = require('../logger');
const Log = new logger();
const assert = require('assert');
Log.logDirectory = './test/logs';

Log.info('Connecting to MySQL');

let infoTest = Log.info('Conneciong to LySql');
assert(typeof infoTest === 'string');
console.log('check passed');

let errorTest = Log.error('Connectingggg');
assert(typeof errorTest === 'string');
assert(errorTest.indexOf('ERROR') > -1);
console.log('Check Passed');

try {
assert(errorTest === 'Object');
} catch(e){
    Log.error('ErrorTest is not an object');
}

