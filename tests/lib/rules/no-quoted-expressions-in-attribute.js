/**
* @fileoverview Tests for no-quoted-expressions-in-attribute rule.
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
eslintTester.addRuleTest('lib/rules/no-quoted-expressions-in-attribute', {
  valid: [
    {
      code: 'React.renderComponent(<div />);',
      ecmaFeatures: { jsx: true }
    },
    {
      code: 'React.renderComponent(<div className="ok" />);',
      ecmaFeatures: { jsx: true }
    },
    {
      code: 'var ok = "ok"; React.renderComponent(<div className={ ok } />);',
      ecmaFeatures: { jsx: true }
    }
  ],
  invalid: [
    {
      code: 'var ok = "ok"; React.renderComponent(<div className="{ ok } not-ok" />);',
      errors: [{
        message: 'Attribute values should not contain javascript expressions wrapped in quotes',
        type: 'JSXAttribute'
      }],
      ecmaFeatures: { jsx: true }
    },
    {
      code: 'var notok = "not-ok"; React.renderComponent(<div className="{ notok }" />);',
      errors: [{
        message: 'Attribute values should not contain javascript expressions wrapped in quotes',
        type: 'JSXAttribute'
      }],
      ecmaFeatures: { jsx: true }
    }
  ]
});
