'use strict';

module.exports = {
  rules: {
    'no-class-attribute': require('./lib/rules/no-class-attribute'),
    'no-props-without-proptypes': require('./lib/rules/no-props-without-proptypes'),
    'no-quoted-expressions-in-attribute': require('./lib/rules/no-quoted-expressions-in-attribute'),
    'no-strings-for-style-attribute': require('./lib/rules/no-strings-for-style-attribute')
  },
  rulesConfig: {
    'no-class-attribute': 2,
    'no-props-without-proptypes': 2,
    'no-quoted-expressions-in-attribute': 2,
    'no-strings-for-style-attribute': 2
  }
};
