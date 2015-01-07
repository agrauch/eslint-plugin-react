/**
* @fileoverview Rule to flag use of string literals for JSX style attributes rather than objects
* @author Andrew Grauch
*/

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var xjsNodeUtils = require('../xjsNodeUtils');

module.exports = function(context) {
  return {
    'XJSAttribute': function(node) {
      var name = xjsNodeUtils.getXjsAttributeName(node);

      if (name === 'style' && node.value.type === 'Literal') {
        context.report(node, 'Use an oject for the style attribute rather than a string');
      }
    }
  };
};
