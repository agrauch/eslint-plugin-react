/**
* @fileoverview Rule to flag use of props without a propType declaration in React classes
* @author Andrew Grauch
*/

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  function findReactCreateClassCall() {
    var ancestors = context.getAncestors();
    var i, ancestor, callee;

    for (i = 0; i < ancestors.length; i++) {
      ancestor = ancestors[i];
      if (ancestor.type === 'CallExpression') {
        callee = ancestor.callee;
        if (callee.type === 'MemberExpression' &&
            callee.object.name === 'React' &&
            callee.property.name === 'createClass') {
          return ancestor;
        }
      }
    }
  }

  function findPropTypes(object) {
    var i, prop, name;

    for (i = 0; i < object.properties.length; i++) {
      prop = object.properties[i];
      name = prop.key.name || prop.key;

      if (name === 'propTypes') {
        return prop;
      }
    }
  }

  return {
    'MemberExpression': function(node) {
      var createClassCall;

      if (node.property.type === 'Identifier' && node.property.name === 'props') {
        createClassCall = findReactCreateClassCall();
        if (createClassCall && !findPropTypes(createClassCall.arguments[0])) {
          context.report(node, 'Do not use props without defining propTypes');
        }
      }
    }
  };
};
