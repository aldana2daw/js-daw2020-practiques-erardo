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
});
