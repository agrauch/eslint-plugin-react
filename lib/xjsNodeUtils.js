'use strict';

module.exports = {
  getXjsAttributeName: function(xjsAttribute) {
    var nameIdentifier = xjsAttribute.name;
    return nameIdentifier.type === 'XJSNamespacedName' ? nameIdentifier.name.name : nameIdentifier.name;
  }
};
