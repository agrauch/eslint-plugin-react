'use strict';

module.exports = {
  getJsxAttributeName: function(jxsAttribute) {
    var nameIdentifier = jxsAttribute.name;
    return nameIdentifier.type === 'JSXNamespacedName' ? nameIdentifier.name.name : nameIdentifier.name;
  }
};
