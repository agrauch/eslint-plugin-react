/**
* @fileoverview Rule to flag use of class attribute rather than className in JSX elements
* @author Andrew Grauch
*/

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  return {
    'XJSAttribute': function(node) {
      var nameIdentifier = node.name;
      var name = nameIdentifier.type === 'XJSNamespacedName' ? nameIdentifier.name.name : nameIdentifier.name;

      if (name === 'class') {
        context.report(node, 'Use className attribute rather than class');
      }
    }
  };
};
