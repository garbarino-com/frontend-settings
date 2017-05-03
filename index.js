"use strict";

var autoprefixerOptions = require('./settings/autoprefixer');
var stylelintOptions =  require('./settings/stylelint');

// List of tools
// Each tool has a separate config file inside "./settings"
module.exports = {
  autoprefixer: autoprefixerOptions,
  stylelint: stylelintOptions
}
