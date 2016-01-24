# nw-react-app-boilerplate
An application boilerplate of nw.js(node-webkit) with React.js

## Requirements

* NodeJS
* NPM


## Install

    git clone "https://github.com/thevtm/nw-react-app-boilerplate" "your-directory"
    ./configure
    npm install


## Usage

`npm start` Compile and run app.

`npm run build` Compile and package app.


## Config

Configuration is done through the `package.json` and the gulp files (`./gulp`).

Set `$NODE_ENV` to `production` to enable production build/compilation.


## How to use nw's api
To call nw's api, it is necessary to use window.require, because browserify rewrites require statement.

ex) `var gui = window.require( 'nw.gui' );`
