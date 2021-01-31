$(document).ready(function () {
  $('div')
    .find('button')
    .filter('#button1')
    .on('click', function () {
      $('body')
        .find('div')
        .eq(2)
        .append('<p>' + $('div').filter('.div').children().length + '</p>');
    });
});
