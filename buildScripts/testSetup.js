// Not transpilled, must therefore use common JS and ES5

// register babel to transpile before tests run
require('babel-register')();

// Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function () {};
