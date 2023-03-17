
// Register babel to transpile before our tests run
require("@babel/register")();

// Disable webpack feature that mocha does'nt understand
require.extensions['.css'] = function(){};
