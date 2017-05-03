"use strict";

module.exports = {
  "extends": [
    "stylelint-config-sass-guidelines"
  ],
  "rules": {
    "color-hex-case": "upper",
    "font-weight-notation": "numeric",
    "length-zero-no-unit": true,
    "max-line-length": 96,
    "max-nesting-depth": 2,
    "number-leading-zero": "never",
    "string-quotes": "double",
    "selector-class-pattern": [ "^[a-z0-9\\-\\_]+$", {
      "resolveNestedSelectors": [ true, {
        "message": "Selector should be written in lowercase with hyphens or underscores. (selector-class-pattern)"
      }]
    }],
    "unit-blacklist": {
      "px": [ "line-height", "font", "font-size" ],
      "rem": [ "font" ],
      "vmin": [ "width" ]
    },
    "at-rule-no-vendor-prefix": false
  }
}
