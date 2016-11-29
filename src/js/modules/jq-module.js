var $ = require('../../../bower_components/jquery/dist/jquery.js');

module.exports = function(){
  $('.wellContainer').append('<div class="jqContainer">Bootstrap Container</div>');
  console.log("jq-module js");
  $('.desc').text("Web Starter project using gulpjs and bower for beginner command line interface (CLI) users");
};
