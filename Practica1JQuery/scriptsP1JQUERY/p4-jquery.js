$(document).ready(function () {
  $('body').find('ul').eq(2).find('li').first().css('background-color', 'red');
  $('body').find('ul').eq(0).find('li').last().css('background-color', 'blue');
  $('body').find('ul').eq(1).find('li').eq(2).css('background-color', 'yellow');
});
