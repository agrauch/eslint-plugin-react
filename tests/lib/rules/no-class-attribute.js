/**
* @fileoverview Tests for no-class-attribute rule.
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
eslintTester.addRuleTest('lib/rules/no-class-attribute', {
  valid: [
    {
      code: 'React.renderComponent(<div />);',
      ecmaFeatures: { jsx: true }
    },
    {
      code: 'React.renderComponent(<div className="ok" />);',
      ecmaFeatures: { jsx: true }
    }
  ],
  invalid: [
    {
      code: 'React.renderComponent(<div class="not-ok" />);',
      errors: [{
        message: 'Use className attribute rather than class',
        type: 'JSXAttribute'
      }],
      ecmaFeatures: { jsx: true }
    }
  ]
});
