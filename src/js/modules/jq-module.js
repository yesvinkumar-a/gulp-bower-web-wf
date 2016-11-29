var $ = require('../../../bower_components/jquery/dist/jquery.js');

module.exports = function(){
  $('.wellContainer').append('<div class="jqContainer well">hello world!...!</div>');
  console.log("jq-module js");
}
