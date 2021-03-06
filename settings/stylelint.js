"use strict";

module.exports = {
  "extends": [
    "stylelint-config-sass-guidelines"
  ],
  "rules": {
    "color-hex-case": "upper",
    "font-weight-notation": "numeric",
    "indentation": [
      2, {
      "message": "Please use 2 spaces for indentation.",
      "severity": "warning"
      }
    ],
    "length-zero-no-unit": true,
    "max-line-length": 96,
    "max-nesting-depth": 2,
    "number-leading-zero": "never",
    "selector-class-pattern": [ "^[a-z0-9\\-\\_]+$", {
      "resolveNestedSelectors": [ true, {
        "message": "Selector should be written in lowercase with hyphens or underscores. (selector-class-pattern)"
      }]
    }],
    "selector-no-type": [ true, {
      "ignore": ["descendant"]
    }],
    "string-quotes": "double",
    "unit-blacklist": {
      "px": [
        "line-height",
        "font",
        "font-size"
      ],
      "rem": [ "font" ],
      "vmin": [
        "width",
        "height"
      ],
      "vmax": [
        "width",
        "height"
      ]
    },
    "at-rule-no-vendor-prefix": false
  }
}
