/**
* @fileoverview Rule to flag use of class attribute rather than className in JSX elements
* @author Andrew Grauch
*/

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var jsxNodeUtils = require('../jsxNodeUtils');

module.exports = function(context) {
  return {
    'JSXAttribute': function(node) {
      var name = jsxNodeUtils.getJsxAttributeName(node);

      if (name === 'class') {
        context.report(node, 'Use className attribute rather than class');
      }
    }
  };
};
