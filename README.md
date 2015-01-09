eslint-plugin-react
===
[ESLint](http://eslint.org) plugin to enforce [React](http://facebook.github.io/react/) best practices

###Caveat Emptor
This plugin relys on the [es6jsx](https://github.com/eslint/eslint/tree/es6jsx) branch of ESLint which is still in development and not production ready. See this [post](http://eslint.org/blog/2014/11/es6-jsx-support/) for more information.

###Installation
* clone this repository
* run `cd eslint-plugin-react && npm install && npm link`
* clone eslint@es6jsx with `git clone https://github.com/eslint/eslint --branch es6jsx --single-branch`
* run `cd eslint && npm install && npm link eslint-plugin-react`

HEAD of eslint@es6jsx has bug fixes for the no-unused-vars rule and does a better job of validating JSX than the version in the npm registry. With a clone of eslint, it is neccessary to link directly to this plugin to satisfy ESLink's plugin loading requirements.
