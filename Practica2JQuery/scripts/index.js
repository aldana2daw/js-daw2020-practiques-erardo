/**
 * Practica 2 JQUERY Erardo Aldana
 */
$(document).ready(function () {
  /**
   * Part de shakespeare:
   */
  $('div#container ul#selected-plays > li').addClass('horizontal');
  $('div#container ul#selected-plays > li > *').addClass('sub-level');

  //Sin usar el id
  $('div#container > ul > li').addClass('big-letter');
  //añadir clase mail
  $("a[href^='mailto']").addClass('mailto');
  //añadir clase pdf
  $("a[href$='.pdf']").addClass('pdflink');
  //añadir henrylink
  $("a[href^='http'],a[href~='henry']").addClass('henrylink');
  //clase para table
  $('div#container table tr:odd').addClass('alt');

  //Final clase highlight
  $("table tr td:contains('Henry')").addClass('highlight');

  /**
   * Práctica 3:
   */
  /**
   * Filtrar History
   */
  $('table tr')
    .find('td')
    .filter(function () {
      return $(this).text() === 'History';
    })
    .addClass('highlight');

  /**
   * Filtrar palabra et desde la primera columna:
   */
  $('table')
    .eq(0)
    .find('tr td')
    .filter(function () {
      let val = 'et';
      return $(this).text().toLowerCase().indexOf(val.toLowerCase()) >= 0;
    })
    .nextUntil()
    .addClass('highlight');
});
