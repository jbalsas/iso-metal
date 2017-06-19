const jsdom = require("jsdom");
const { JSDOM } = jsdom

const { document } = (new JSDOM()).window;

/**
 * Access to a dom implementation is currently needed for 
 * metal.js to work on the server. 
 * 
 * Comment the following declarations to see the dependencies 
 * the framework has on browser and DOM APIs
 */
global.document = document;
global.window = document;

const Component = require('metal-component').Component;
const ListJSX = require('./lib/ListJSX').ListJSX;
const ListSoy = require('./lib/ListSoy').ListSoy;

console.log(Component.renderToString(ListJSX));
console.log(Component.renderToString(ListSoy));