$(document).ready(function () {
  //Insertar inicio y links de volver a inicio
  //let $inicio = $('<a href="#"></a>');
  //let $link = $('<a href="#">Back to the top</a>');
  //$('body').prepend($inicio);
  //$('div.chapter').find('p').after($link);

  //Punto 2 Insert before
  //$('div.chapter').find('.footnote').insertBefore('div#footer');

  //Punto 3 crear lista e insertar elementos
  //let listaNumerada = $('<ol></ol>');
  //$('div').find('#footer').before(listaNumerada);

  //$('.footnote').each(function () {
  // $('ol').append('<li>' + $(this).context.outerHTML + '</li>');
  //});

  //Punto 2 y 3 encadenados:
  let listaNumerada = $('<ol></ol>');
  //Una sentencia en
  $('div')
    .find('#footer')
    .before(function () {
      $(this).before(listaNumerada);
      $('.footnote').each(function () {
        $('ol').append('<li>' + $(this).context.outerHTML + '</li>');
      });
    });

  //insertafter prependto punto 4
  //let $inicio = $('<a href="#"></a>');
  //let $link = $('<a href="#">Back to the top</a>');
  $('<a href="#"></a>').prependTo($('body'));
  $('<a href="#">Back to the top</a>').insertAfter($('div.chapter').find('p'));
});
