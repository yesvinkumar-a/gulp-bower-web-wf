var $ = require('../../bower_components/jquery/dist/jquery.js');
var sayHello = require('./modules/hello.js');
var jqmod = require('./modules/jq-module.js');
sayHello();
jqmod();
$('h1').text("Text form Jquery global scope");
