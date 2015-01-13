/**
* @fileoverview Tests for no-props-without-proptypes rule.
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
eslintTester.addRuleTest('lib/rules/no-props-without-proptypes', {
  valid: [
    {
      code: 'React.createClass({ render: function() { return <div />} });',
      ecmaFeatures: { jsx: true }
    },
    {
      code: 'React.createClass({ propTypes: {}, render: function() { return <div className={ this.props.className } />} });',
      ecmaFeatures: { jsx: true }
    }
  ],
  invalid: [
    {
      code: 'React.createClass({ render: function() { return <div className={ this.props.className } />} });',
      errors: [{
        message: 'Do not use props without defining propTypes',
        type: 'MemberExpression'
      }],
      ecmaFeatures: { jsx: true }
    }
  ]
});
