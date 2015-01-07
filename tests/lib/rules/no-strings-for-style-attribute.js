/**
* @fileoverview Tests for no-strings-for-style-attribute rule.
* @author Andrew Grauch
*/
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require('eslint'),
ESLintTester = require('eslint-tester');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);
eslintTester.addRuleTest('lib/rules/no-strings-for-style-attribute', {
  valid: [
{
  code: 'React.renderComponent(<div />);',
  settings: { ecmascript: 6, jsx: true }
},
{
  code: 'React.renderComponent(<div style={{display: "block"}} />);',
  settings: { ecmascript: 6, jsx: true }
}
],
invalid: [
{
  code: 'React.renderComponent(<div style="display: block" />);',
  errors: [{
    message: 'Use an oject for the style attribute rather than a string',
    type: 'XJSAttribute'
  }],
  settings: { ecmascript: 6, jsx: true }
}
]
});
