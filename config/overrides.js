'use strict';

const fs = require('fs');
const { overridesFile } = require('./paths');

let overrides = {};

if (fs.existsSync(overridesFile)) {
  overrides = require(overridesFile) || {};
}

module.exports = overrides;
