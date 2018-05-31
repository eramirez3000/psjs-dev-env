// This file isn't transpiler, so must use Common and ES5

// Register bavel to transpiler our tests run.

require('babel-register');

// Disable webpack feature that Mocha doesn's understand.
require.extensions('.css') = function () {};
