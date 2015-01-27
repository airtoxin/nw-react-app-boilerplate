# nw-react-app-boilerplate
An application boilerplate of nw.js(node-webkit) with React.js

# How to develop
1. `npm i`
2. `gulp`
3. open application in build directory
4. add some react component and styles
5. `gulp`
6. reload application
7. iterate4~6

# How to use nw's api
To call nw's api, it is necessary to use window.require, because browserify rewrites require statement.

ex) `var gui = window.require( 'nw.gui' );`
