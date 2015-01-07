'use strict';

module.exports = {
  rules: {
    'no-class-attribute': require('./lib/rules/no-class-attribute'),
    'no-props-without-proptypes': require('./lib/rules/no-props-without-proptypes')
  },
  rulesConfig: {
    'no-class-attribute': 2,
    'no-props-without-proptypes': 2
  }
};
