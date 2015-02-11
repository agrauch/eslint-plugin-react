eslint-plugin-react
===
[ESLint](http://eslint.org) plugin to enforce [React](http://facebook.github.io/react/) best practices

###Caveat Emptor
This plugin relys on ESLint [0.14.1](http://eslint.org/blog/2015/01/eslint-0.14.1-released/)

###Installation
Add the this line to package.json in the project you wish to lint:
`"eslint-plugin-react": "git://github.com/agrauch/eslint-plugin-react#master"`

###Configuring
See [configuring ESLint](http://eslint.org/docs/configuring/) for more information on
settings for ES6 and JSX.

Your .eslintrc file should look something like this
```javascript
{
  "env": {
    "node": true
  },
  "plugins": ["react"],
  "ecmaFeatures": {
    "jsx": true,
    "objectLiteralShorthandMethods": true
  }
}
```
