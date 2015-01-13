/**
* @fileoverview Rule to flag use of strings and objects in JSX attribute values
* @author Andrew Grauch
*/

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  return {
    'JSXAttribute': function(node) {
      if (node.value.type === 'Literal' && node.value.value.indexOf('{') >= 0 && node.value.value.indexOf('}') >= 0) {
        context.report(node, 'Attribute values should not contain javascript expressions wrapped in quotes');
      }
    }
  };
};
