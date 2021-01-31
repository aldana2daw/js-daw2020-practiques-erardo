$(document).ready(function () {
  $('div')
    .find('button')
    .filter('#boton1')
    .on('click', function () {
      $('select').find('option').first().remove();
      $('select').prepend('<option value="blanco">Blanco</option>');
      $('select').find('option').first().attr('selected', 'selected');
    });
});
