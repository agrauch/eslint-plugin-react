eslint-plugin-react
===
[ESLint](http://eslint.org) plugin to enforce [React](http://facebook.github.io/react/) best practices

###Caveat Emptor
This plugin relys on the to be released 0.12.0 version of ESLint and was developed using [HEAD](https://github.com/eslint/eslint)

###Installation
Clone and link this repository:
* `git clone https://github.com/agrauch/eslint-plugin-react`
* `cd eslint-plugin-react && npm install && npm link`

Clone ESLint, link the package, and link to this plugin to satisfy ESLint's plugin loading requirements
* `git clone https://github.com/eslint/eslint`
* run `cd eslint && npm install && npm link && npm link eslint-plugin-react`

###Configuring
See the README file in eslint/docs/configuring in the [eslint repository](https://github.com/eslint/eslint) for more information on
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
