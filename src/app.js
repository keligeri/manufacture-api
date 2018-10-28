// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
  "presets": ["es2015",  "stage-0"]
});

module.exports = require('./server.js');
